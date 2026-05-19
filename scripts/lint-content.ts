#!/usr/bin/env tsx
/**
 * Content-style linter for KB entries.
 *
 * Enforces:
 *   - Required sections exist (Quick answer, Details, When to defer, Sources)
 *   - Quick answer ≤ 80 words (skipped for confidence:low stubs)
 *   - Banned phrases (from style guide)
 *   - No live commerce facts in body (price/currency markers)
 *   - No competitor mentions (anywhere in the entry)
 *   - No internally-used third-party supplier / partner brand names
 *     (anywhere in the entry — this repo is public on GitHub)
 *
 * Stubs (confidence:low) are linted leniently — TODO placeholders are
 * allowed, but the brand / supplier / competitor / live-fact checks
 * still run.
 *
 * Section-strip semantics:
 *   - Writer-only sections (Sources + Editorial notes) are stripped
 *     before checking voice/style rules (banned phrases, Quick-answer
 *     word count, live-fact markers). Writers may legitimately mention
 *     internal paths and inferred reasoning there.
 *   - Competitor and supplier-name checks run on the FULL file content.
 *     The repo is public; supplier identities should not be discoverable
 *     anywhere, including in writer-only sections.
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

/**
 * Competitors — never compare Custyle to these (positioning guardrail).
 * Different list from suppliers below; conflating the two confuses the
 * rationale.
 */
const COMPETITORS = [
  "Teespring",
  "Spreadshirt",
  "Redbubble",
  "Zazzle",
  "Society6",
];

/**
 * Internally-used third-party supplier / partner brand names.
 *
 * Custyle's brand position is "AI Merch Agent with a global manufacturing
 * network." Naming specific fulfillment partners (Printful, Printify) or
 * blank-garment brands (Bella+Canvas, Gildan, Next Level) pigeon-holes
 * Custyle as a printer rather than a Product Engine.
 *
 * These names MUST NOT appear anywhere in the KB repo content — not in
 * customer-facing sections, not in editorial notes, not in sources.
 * The repo is public; discoverability is the same as customer exposure.
 *
 * When you genuinely need to reference one in writer-only context,
 * encode it indirectly:
 *   - "the fulfillment partner integration" (not "Printful integration")
 *   - "the blank-garment supplier" (not "Bella+Canvas")
 *   - "supplier docs at ~/Desktop/Custyle/商品/[supplier-docs]/" (not the brand name)
 */
const SUPPLIER_PARTNER_NAMES = [
  "Printful",
  "Printify",
  "Gooten",
  "Bella+Canvas",
  "Bella Canvas",
  "Gildan",
  "Next Level",
  "AS Colour",
  "American Apparel",
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
 * Strip writer-only sections from a body before linting / exporting.
 *
 * Two sections are writer-only by convention:
 *   - "## Sources" — internal paths, provenance
 *   - "## Editorial notes ..." — author's annotations on what's
 *     extrapolated beyond source; reviewed when promoting to high
 *
 * Both are excluded from the Answer LLM's context. Same convention
 * mirrored in export-for-rag.ts.
 *
 * Voice / brand / live-fact checks run on the stripped body. Supplier
 * + competitor checks run on the FULL raw content (public-repo posture).
 */
const WRITER_ONLY_SECTION_PATTERN = /^##\s+(Sources|Editorial notes\b.*)\s*$/m;

function stripWriterOnlySections(body: string): string {
  const i = body.search(WRITER_ONLY_SECTION_PATTERN);
  return i === -1 ? body : body.slice(0, i);
}

const files = walk(TOPICS);

for (const file of files) {
  const rel = relative(ROOT, file);
  const raw = readFileSync(file, "utf8");
  const parsed = matter(raw);
  const fm = parsed.data as Record<string, unknown>;
  const customerFacingBody = stripWriterOnlySections(parsed.content);
  const fullContent = raw; // include frontmatter + body; public-repo scan
  const confidence = fm.confidence as string;

  // Required sections — check against the raw content (including Sources)
  for (const section of REQUIRED_SECTIONS) {
    if (!parsed.content.includes(section)) {
      issues.push({ file: rel, level: "error", message: `missing required section: ${section}` });
    }
  }

  // Quick answer length — only for medium/high confidence entries
  if (confidence !== "low") {
    const quickAnswerMatch = customerFacingBody.match(/## Quick answer\s+([\s\S]*?)(?=\n##\s|$)/);
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

  // Banned phrases — voice checks on customer-facing body only
  for (const phrase of BANNED_PHRASES) {
    const re = new RegExp(`\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
    if (re.test(customerFacingBody)) {
      issues.push({ file: rel, level: "warning", message: `banned phrase: "${phrase}"` });
    }
  }

  // Competitor mentions — full-file scan (public-repo posture)
  for (const comp of COMPETITORS) {
    const re = new RegExp(`\\b${comp}\\b`, "i");
    if (re.test(fullContent)) {
      issues.push({
        file: rel,
        level: "error",
        message: `competitor mention "${comp}" — public repo; never name competitors`,
      });
    }
  }

  // Supplier / partner brand mentions — full-file scan (public-repo posture)
  for (const name of SUPPLIER_PARTNER_NAMES) {
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // For names with spaces or "+", word-boundary doesn't fit — match
    // the literal sequence as a token. For single-word names, anchor.
    const re = /\s/.test(name)
      ? new RegExp(escaped, "i")
      : new RegExp(`\\b${escaped}\\b`, "i");
    if (re.test(fullContent)) {
      issues.push({
        file: rel,
        level: "error",
        message: `third-party supplier/partner brand "${name}" — Custyle is the AI Merch Agent; suppliers stay behind the curtain. Use "global fulfillment network" / "manufacturing partner network" instead.`,
      });
    }
  }

  // Live fact markers — body only
  for (const re of LIVE_FACT_MARKERS) {
    if (re.test(customerFacingBody)) {
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
