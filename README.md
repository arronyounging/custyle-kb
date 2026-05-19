# Custyle Knowledge Base

The customer-facing knowledge base for **Custyle.ai** — the world's first AI Merch Agent.

This repository is the **single source of truth** that powers the Custyle Converse Domain (AI customer service / self-serve). Every entry here is consumed by an LLM at runtime to answer user questions about the platform.

## What lives here

| Path | Purpose |
|------|---------|
| [`KB.md`](KB.md) | Master index — start here |
| [`topics/`](topics/) | Knowledge entries organized by user intent |
| [`schema/`](schema/) | Frontmatter schema, intent catalog, writing style guide |
| [`boundaries/`](boundaries/) | What the KB must NOT answer — directly maps to Converse safety flags |
| [`handoffs/`](handoffs/) | When and how to route to APIs, design flow, or humans |
| [`glossary/`](glossary/) | Canonical terms — keeps voice consistent |
| [`eval/`](eval/) | Golden Q&A + boundary tests for regression |
| [`scripts/`](scripts/) | `validate` / `lint` / `export-for-rag` |

## What does NOT live here

- Live commerce facts (price, inventory, order status, shipping ETA) — those come from Custyle APIs at runtime, not from this repo. See [`boundaries/do-not-answer.md`](boundaries/do-not-answer.md).
- Investor / financial / market materials — see `custyle-brand/market/`.
- Internal engineering architecture — see `custyle-platform/docs/`.
- Brand engine source of truth — see `custyle-brand/` (this KB *consumes* it).

## Design principles

1. **Atomic** — one file = one user intent answered.
2. **Quotable** — every entry has a `Quick answer` ≤ 80 words that the Answer LLM may surface verbatim.
3. **Bounded** — every entry declares `boundary` flags that map 1:1 to Converse Domain safety constraints.
4. **Sourced** — every fact is traceable to brand engine, code, or a public help page.
5. **Versioned** — every entry has `last_verified` and `review_cadence_days`; stale entries auto-degrade confidence in CI.
6. **Tested** — [`eval/golden-questions.yaml`](eval/golden-questions.yaml) protects against regression.

## Status

**Phase 0 — Skeleton.** All P0/P1 entries exist as stubs with `confidence: low`. Content batch-fill begins after skeleton is reviewed.

Cold-start scope: 5 categories — `product-capability`, `ai-design-workflow`, `ordering`, `shipping`, `after-sales`. Other categories (`catalog-and-pricing`, `production`, `account-and-data`, `policies`, `about-custyle`) will follow once Phase 1 is healthy.

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## License

Proprietary. © Custyle 2026.
