#!/usr/bin/env tsx
/**
 * Content-style linter for KB entries.
 *
 * Enforces:
 *   - Required sections exist (Quick answer, Details, When to defer, Sources)
 *   - Quick answer ≤ 80 words (skipped for confidence:low stubs)
 *   - Banned phrases (from style guide)
 *   - No live commerce facts in body (price/currency markers)
 *   - No competitor names
 *
 * Stubs (confidence:low) are linted more leniently — they're allowed to
 * have TODO placeholders, but banned phrases and competitor mentions are
 * still flagged.
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, basename, relative } from "node:path";
import matter from "gray-matter";

const ROOT = join(__dirname, "..");
const TOPICS = join(ROOT, "topics");

const REQUIRED_SECTIONS = ["## Quick answer", "## Details", "## When to defer", "## Sources"];

const BANNED_PHRASES = [
  "I'm just an AI",
  "Please understand that",
  "Unfortunately",
  "As mentioned earlier",
  "Our team will",
  "Reach out to support",
  "AI-powered",
  "Synthesize",
  "Leverage",
  "Disruptive",
  "Empower",
  "Ecosystem",
];

const COMPETITORS = [
  "Printful",
  "Printify",
  "Teespring",
  "Spreadshirt",
  "Redbubble",
  "Zazzle",
  "Society6",
  "Spring",
];

const LIVE_FACT_MARKERS = [
  /\$\s?\d/, // "$10", "$ 25"
  /\b\d+\s?USD\b/i,
  /\b\d+\s?EUR\b/i,
  /\bUS\$\d/i,
];

interface Issue {
  file: string;
  level: "error" | "warning";
  message: string;
}

const issues: Issue[] = [];

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

/**
 * Strip the "## Sources" section from a body before linting / exporting.
 * Sources are a writers-facing provenance log — they may legitimately
 * mention vendor names, internal paths, etc. that aren't fit for the
 * customer-facing Answer LLM. Same convention applied in export-for-rag.
 */
function stripSourcesSection(body: string): string {
  const i = body.search(/^##\s+Sources\s*$/m);
  return i === -1 ? body : body.slice(0, i);
}

const files = walk(TOPICS);

for (const file of files) {
  const rel = relative(ROOT, file);
  const raw = readFileSync(file, "utf8");
  const parsed = matter(raw);
  const fm = parsed.data as Record<string, unknown>;
  const body = stripSourcesSection(parsed.content);
  const confidence = fm.confidence as string;

  // Required sections — check against the raw content (including Sources)
  for (const section of REQUIRED_SECTIONS) {
    if (!parsed.content.includes(section)) {
      issues.push({ file: rel, level: "error", message: `missing required section: ${section}` });
    }
  }

  // Quick answer length — only for medium/high confidence entries
  if (confidence !== "low") {
    const quickAnswerMatch = body.match(/## Quick answer\s+([\s\S]*?)(?=\n##\s|$)/);
    if (quickAnswerMatch) {
      const words = quickAnswerMatch[1].trim().split(/\s+/).filter(Boolean).length;
      if (words > 80) {
        issues.push({
          file: rel,
          level: "error",
          message: `Quick answer is ${words} words (max 80)`,
        });
      }
      if (words < 5) {
        issues.push({
          file: rel,
          level: "warning",
          message: `Quick answer looks empty — only ${words} words`,
        });
      }
    }
  }

  // Banned phrases (case-insensitive whole match for safety)
  for (const phrase of BANNED_PHRASES) {
    const re = new RegExp(`\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
    if (re.test(body)) {
      issues.push({ file: rel, level: "warning", message: `banned phrase: "${phrase}"` });
    }
  }

  // Competitor mentions
  for (const comp of COMPETITORS) {
    const re = new RegExp(`\\b${comp}\\b`, "i");
    if (re.test(body)) {
      issues.push({
        file: rel,
        level: "error",
        message: `competitor mention "${comp}" — never compare to competitors`,
      });
    }
  }

  // Live fact markers
  for (const re of LIVE_FACT_MARKERS) {
    if (re.test(body)) {
      issues.push({
        file: rel,
        level: "error",
        message: `live commerce fact pattern matched: ${re} — defer to API`,
      });
    }
  }
}

const errors = issues.filter((i) => i.level === "error");
const warnings = issues.filter((i) => i.level === "warning");

for (const i of issues) {
  const tag = i.level === "error" ? "✗" : "⚠";
  // eslint-disable-next-line no-console
  console.log(`${tag} ${i.file}: ${i.message}`);
}

// eslint-disable-next-line no-console
console.log(
  `\nLinted ${files.length} entries — ${errors.length} errors, ${warnings.length} warnings.`
);

if (errors.length > 0) process.exit(1);
