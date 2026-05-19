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

## Status board

**Total: 64 entries · 64 at confidence:medium · 0 stubs**

Pipeline: validate 0 errors / 0 warnings · lint 0 errors / 0 warnings.

Every entry carries an `Editorial notes (review before promoting to high)` section flagging any line that isn't a direct lift from canonical source material. Owner review converts medium → high by walking those bullets.

| Category | Entries | All at medium |
|---|---|---|
| **product-capability** | 6 | ✅ |
| **ai-design-workflow** | 10 | ✅ |
| **product-info** | 7 | ✅ |
| **ordering** | 10 | ✅ |
| **shipping** | 8 | ✅ |
| **after-sales** | 7 | ✅ |
| **account-and-data** | 8 | ✅ |
| **policies** | 4 | ✅ |
| **about-custyle** | 4 | ✅ |

## Categories (TOC)

- [`product-capability`](topics/product-capability/_TOC.md) — what Custyle can / cannot do
- [`ai-design-workflow`](topics/ai-design-workflow/_TOC.md) — how the AI design works, prompt tips, iteration, technique recommendation
- [`product-info`](topics/product-info/_TOC.md) — physical product attributes: sizing, materials, care, color, techniques
- [`ordering`](topics/ordering/_TOC.md) — place / modify / cancel, payments, discounts, reorder, gift, invoices, bulk
- [`shipping`](topics/shipping/_TOC.md) — regions, lead time, tracking, customs, address change, lost / failed
- [`after-sales`](topics/after-sales/_TOC.md) — returns, defects, refunds, complaints, warranty, reviews
- [`account-and-data`](topics/account-and-data/_TOC.md) — signup / login, password, data privacy, find designs / orders, deletion
- [`policies`](topics/policies/_TOC.md) — plain-language ToS / Privacy / IP / Content policy summaries
- [`about-custyle`](topics/about-custyle/_TOC.md) — who is Custyle, meet the Crew, safety stance, contact

## Future categories (Phase 2+ if user demand justifies)

- **catalog-and-pricing** — public pricing model documentation
- **production** — deeper manufacturing-technique docs (already covered at user level by `product-info/print-techniques-overview`)

## Integration with the Converse Domain

See [`INTEGRATION.md`](INTEGRATION.md) — the load-bearing document that wires this KB into the custyle-platform Converse Domain at runtime. Without it, the KB is inert.

## Conventions

- **Language**: `en` (Phase 0). Multilingual schema is in frontmatter; `zh` and others ship later.
- **Owner**: every entry must declare an owner email before promotion past `confidence: low`.
- **Review cadence**: default 90 days. `last_verified` older than cadence → CI demotes confidence in next build.
