#!/usr/bin/env tsx
/**
 * Validates every KB entry under topics/** against schema/frontmatter.schema.json.
 *
 * Checks:
 *   1. Frontmatter parses and matches schema
 *   2. `id` matches `kb.<category>.<slug>` and is globally unique
 *   3. `id`'s <category> matches the directory the file lives in
 *   4. `id`'s <slug> matches the filename (sans .md)
 *   5. `related[]` refers to existing ids
 *   6. `last_verified` is a valid date and not in the future
 *   7. Stale entries (older than review_cadence_days) emit a warning
 *
 * Exits non-zero on any error.
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, basename, dirname, relative } from "node:path";
import matter from "gray-matter";
import Ajv from "ajv";
import addFormats from "ajv-formats";

const ROOT = join(__dirname, "..");
const TOPICS = join(ROOT, "topics");
const SCHEMA = JSON.parse(
  readFileSync(join(ROOT, "schema/frontmatter.schema.json"), "utf8")
);

interface Issue {
  file: string;
  level: "error" | "warning";
  message: string;
}

const issues: Issue[] = [];
const idIndex = new Map<string, string>(); // id -> file path

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

const ajv = new Ajv({ allErrors: true, strict: false });
// @ts-expect-error addFormats default export typing
addFormats(ajv);
const validate = ajv.compile(SCHEMA);

const files = walk(TOPICS);

for (const file of files) {
  const rel = relative(ROOT, file);
  const raw = readFileSync(file, "utf8");

  let fm: Record<string, unknown>;
  try {
    fm = matter(raw).data as Record<string, unknown>;
  } catch (e) {
    issues.push({ file: rel, level: "error", message: `frontmatter parse failed: ${(e as Error).message}` });
    continue;
  }

  if (!validate(fm)) {
    for (const err of validate.errors ?? []) {
      issues.push({
        file: rel,
        level: "error",
        message: `schema: ${err.instancePath || "(root)"} ${err.message}`,
      });
    }
    continue;
  }

  const id = fm.id as string;
  const category = fm.category as string;
  const expectedDir = join(TOPICS, category);
  if (!file.startsWith(expectedDir + "/")) {
    issues.push({
      file: rel,
      level: "error",
      message: `category mismatch: id says "${category}" but file lives under ${dirname(rel)}`,
    });
  }

  const expectedSlug = basename(file, ".md");
  const idSlug = id.split(".").slice(2).join(".");
  if (idSlug !== expectedSlug) {
    issues.push({
      file: rel,
      level: "error",
      message: `slug mismatch: id slug "${idSlug}" vs filename "${expectedSlug}"`,
    });
  }

  if (idIndex.has(id)) {
    issues.push({
      file: rel,
      level: "error",
      message: `duplicate id "${id}" — first seen at ${idIndex.get(id)}`,
    });
  } else {
    idIndex.set(id, rel);
  }

  const lastVerified = fm.last_verified as string | undefined;
  if (lastVerified) {
    const lv = new Date(lastVerified);
    if (isNaN(lv.getTime())) {
      issues.push({ file: rel, level: "error", message: `last_verified is not a valid date: ${lastVerified}` });
    } else if (lv > new Date()) {
      issues.push({ file: rel, level: "error", message: `last_verified is in the future` });
    } else {
      const cadence = (fm.review_cadence_days as number) ?? 90;
      const ageDays = (Date.now() - lv.getTime()) / 86_400_000;
      if (ageDays > cadence) {
        issues.push({
          file: rel,
          level: "warning",
          message: `stale: last verified ${Math.floor(ageDays)} days ago (cadence ${cadence})`,
        });
      }
    }
  }
}

// Second pass: validate `related` ids
for (const file of files) {
  const rel = relative(ROOT, file);
  const raw = readFileSync(file, "utf8");
  const fm = matter(raw).data as Record<string, unknown>;
  const related = (fm.related as string[] | undefined) ?? [];
  for (const r of related) {
    if (!idIndex.has(r)) {
      issues.push({
        file: rel,
        level: "warning",
        message: `related id "${r}" not found in repo (will become an error once both ends exist)`,
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
  `\nValidated ${files.length} entries — ${errors.length} errors, ${warnings.length} warnings.`
);

if (errors.length > 0) process.exit(1);
