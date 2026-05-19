#!/usr/bin/env tsx
/**
 * Produces kb-index.json — the canonical export consumed by the
 * Custyle Converse Domain at runtime.
 *
 * Phase 0: this is a stub. The schema is defined so that the consumer
 * (Converse `agent-memory-loader` integration, to come) can target it,
 * and so that the export contract is reviewable independently of the
 * retrieval choice (BM25 vs vector — still TBD).
 *
 * Output schema (see KB.md and boundaries/safety-flags.md):
 *
 *   {
 *     "version": "0.1",
 *     "generated_at": "<ISO timestamp>",
 *     "entries": [
 *       {
 *         "id": "kb.shipping.regions-and-rates",
 *         "intent_primary": "Where do you ship?",
 *         "intent_aliases": [ ... ],
 *         "category": "shipping",
 *         "summary": "<Quick answer text>",
 *         "boundary": { ... },
 *         "body_chunks": [ { "section": "Quick answer", "text": "..." }, ... ],
 *         "related": [ ... ]
 *       }
 *     ]
 *   }
 */

import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, basename, relative } from "node:path";
import matter from "gray-matter";

const ROOT = join(__dirname, "..");
const TOPICS = join(ROOT, "topics");
const OUT = join(ROOT, "kb-index.json");

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else if (st.isFile() && full.endsWith(".md") && !basename(full).startsWith("_")) {
      out.push(full);
    }
  }
  return out;
}

interface Chunk {
  section: string;
  text: string;
}

function chunkBody(body: string): Chunk[] {
  // Split on H2 headings; preserve section name.
  const lines = body.split("\n");
  const chunks: Chunk[] = [];
  let currentSection = "_preamble";
  let buffer: string[] = [];

  function flush() {
    const text = buffer.join("\n").trim();
    if (text) chunks.push({ section: currentSection, text });
    buffer = [];
  }

  for (const line of lines) {
    const h2 = line.match(/^##\s+(.+)$/);
    if (h2) {
      flush();
      currentSection = h2[1].trim();
    } else {
      buffer.push(line);
    }
  }
  flush();
  return chunks;
}

const files = walk(TOPICS);
const entries: unknown[] = [];

for (const file of files) {
  const raw = readFileSync(file, "utf8");
  const parsed = matter(raw);
  const fm = parsed.data as Record<string, unknown>;
  if (fm.confidence === "low") {
    // Stubs are excluded from the export — they would mislead the LLM.
    continue;
  }

  const allChunks = chunkBody(parsed.content);
  // Sources is a writers-facing provenance log — exclude it from the
  // exported chunks so the Answer LLM is never grounded on internal paths,
  // vendor names, or supplier references.
  const chunks = allChunks.filter((c) => c.section !== "Sources");
  const quickAnswer = chunks.find((c) => c.section === "Quick answer")?.text ?? "";

  entries.push({
    id: fm.id,
    intent_primary: fm.intent_primary,
    intent_aliases: fm.intent_aliases ?? [],
    category: fm.category,
    summary: quickAnswer,
    boundary: fm.boundary,
    body_chunks: chunks,
    related: fm.related ?? [],
  });
}

const payload = {
  version: "0.1",
  generated_at: new Date().toISOString(),
  entries,
};

writeFileSync(OUT, JSON.stringify(payload, null, 2) + "\n", "utf8");

// eslint-disable-next-line no-console
console.log(
  `Exported ${entries.length} entries → ${relative(ROOT, OUT)} (skipped stubs).`
);
