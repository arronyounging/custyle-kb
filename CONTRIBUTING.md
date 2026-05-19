# Contributing to Custyle KB

This KB powers the Custyle AI customer service. Bad content = bad customer experience. Read this before editing.

## The Iron Law

> **If you can't cite a source, don't write it.**

Every claim must trace to one of:
- `custyle-brand/` (brand engine)
- `custyle-platform/` code (verified current behavior)
- A published Custyle help page or policy doc
- A signed-off product decision (linked in `source_of_truth`)

If none of the above, leave the entry as `confidence: low` with a TODO.

## Workflow

1. **Pick an entry** from a `_TOC.md`, or propose a new one.
2. **Create the stub** (or edit existing) with full frontmatter.
3. **Write the body**:
   - `Quick answer` — ≤ 80 words, customer-facing, voice-aligned (see [`schema/style-guide.md`](schema/style-guide.md))
   - `Details` — long-form, edge cases
   - `When to defer` — explicit handoff conditions
   - `Sources` — links back to L2
4. **Set `confidence`**:
   - `low` — stub, body TODO
   - `medium` — body written but not signed off by owner
   - `high` — owner-reviewed and current
5. **Update `last_verified`** to today's date.
6. **Validate locally**: `pnpm validate` (or `npm run validate`).
7. **Open PR** with one entry per PR when possible.

## Single-person review (Phase 0)

Until otherwise decided, all PRs are reviewed by **@arronyounging**. The `owner` field still tracks domain responsibility for future hand-off but does not gate merge in Phase 0.

## Writing rules (summary — full guide in `schema/style-guide.md`)

- **Voice**: confident, helpful, never apologetic. Custyle is the AI Merch Agent — speak with authority.
- **Quotable Quick answer**: written so the LLM can return it word-for-word. No "well, it depends" hedging in the Quick answer block.
- **No live facts**: never write specific prices, inventory counts, shipping ETAs, or order statuses. Those are commerce facts — defer to APIs.
- **No legal language**: link to the legal doc; don't paraphrase ToS.
- **No competitor mentions**: ever.
- **No internal architecture**: users don't need to know about Selectors, Domains, agents-graph internals.

## Boundary defaults

New entries default to **maximum safety**:

```yaml
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
```

Loosen these only with explicit justification in a `Why this boundary is open` note in the body.

## Naming convention for IDs

Format: `kb.<category>.<slug>`

- `category` matches the directory name
- `slug` is kebab-case, ≤ 4 words, describes what the entry answers
- IDs are **immutable**. To rename a topic, add `intent_aliases` and `related`, never change `id`.

Examples:
- `kb.shipping.regions-and-rates` ✓
- `kb.ordering.cancel-after-placed` ✓
- `kb.ai-design-workflow.prompt-tips` ✓

## When you discover a gap

Add the question to [`eval/coverage-gaps.md`](eval/coverage-gaps.md) — don't lose it.
