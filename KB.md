# Custyle KB — Master Index

> Single source of truth for Custyle AI customer service.
> All entries are intent-organized, customer-facing, and bound by [`boundaries/do-not-answer.md`](boundaries/do-not-answer.md).

## How to read this index

- Each topic file answers **one** user intent.
- Frontmatter `boundary` block dictates what the Answer LLM may/may not assert.
- IDs are stable forever — rename via `intent_aliases`, never change `id`.

## Critical reading (read first)

- [`boundaries/do-not-answer.md`](boundaries/do-not-answer.md) — hard refusal categories
- [`boundaries/safety-flags.md`](boundaries/safety-flags.md) — flag semantics matching Converse `ConverseAnswerInput.constraints`
- [`handoffs/to-commerce-api.md`](handoffs/to-commerce-api.md) — when to defer to runtime APIs
- [`schema/intent-catalog.md`](schema/intent-catalog.md) — canonical intent vocabulary
- [`schema/style-guide.md`](schema/style-guide.md) — writing rules

## P0 Categories (Phase 0 skeleton)

| Category | Purpose | TOC |
|---|---|---|
| **product-capability** | What Custyle can / cannot do, what users can customize | [TOC](topics/product-capability/_TOC.md) |
| **ai-design-workflow** | How AI design works, prompt tips, iteration, upload rules | [TOC](topics/ai-design-workflow/_TOC.md) |
| **product-info** | Physical product attributes: sizing, materials, care | [TOC](topics/product-info/_TOC.md) |
| **ordering** | Place / modify / cancel orders, payments, discounts, reorder, gift | [TOC](topics/ordering/_TOC.md) |
| **shipping** | Regions, lead time, tracking, customs | [TOC](topics/shipping/_TOC.md) |
| **after-sales** | Returns, defects, refunds, complaints | [TOC](topics/after-sales/_TOC.md) |
| **account-and-data** | Signup, login, password, designs/orders lookup, data deletion, privacy | [TOC](topics/account-and-data/_TOC.md) |

## Future Categories (Phase 1+)

- **catalog-and-pricing** — product types, base pricing logic
- **production** — manufacturing techniques (DTG/DTF/embroidery/...) from user POV
- **policies** — IP, content policy, ToS / Privacy summaries
- **about-custyle** — brand story, the Crew, safety stance

## Integration with the Converse Domain

See [`INTEGRATION.md`](INTEGRATION.md) — the load-bearing document that wires this KB into the custyle-platform Converse Domain at runtime. Without it, the KB is inert.

## Conventions

- **Language**: `en` (Phase 0). Multilingual schema is in frontmatter; `zh` and others ship later.
- **Owner**: every entry must declare an owner email before promotion past `confidence: low`.
- **Review cadence**: default 90 days. `last_verified` older than cadence → CI demotes confidence in next build.
