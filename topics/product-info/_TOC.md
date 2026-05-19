# Product Info — Planned Entries

Physical product attributes — what the actual merch is like. This is the highest-volume support category for custom-apparel businesses.

| Priority | ID | Status | Owner |
|---|---|---|---|
| P0 | `kb.product-info.size-chart` | stub | arronyounging |
| P0 | `kb.product-info.material-and-fabric` | stub | arronyounging |
| P0 | `kb.product-info.care-instructions` | stub | arronyounging |
| P0 | `kb.product-info.color-accuracy` | stub | arronyounging |
| P0 | `kb.product-info.fit-and-cut` | stub | arronyounging |
| P1 | `kb.product-info.print-techniques-overview` | stub | arronyounging |
| P1 | `kb.product-info.durability-and-wash-life` | stub | arronyounging |

## Notes for writers

- **The hardest category for KB voice.** Custom apparel = many SKUs, each with slightly different specs. Resist over-specificity in Quick answer — speak about defaults and ranges; defer to product page / `shop.get_product_specs` for specifics.
- Sizing is **per-supplier** in a routed-manufacturing model. There is no single Custyle size chart. KB must explain this clearly (each product has its own chart, accessible on its product page).
- Care instructions: typical defaults exist (cold wash, inside out, no bleach, low-heat tumble) — fine to state. Anything that varies by print technique → handoff to product page.
- Color accuracy: explain DTG vs. screen-color expectations. Sets the right tolerance baseline for downstream returns/defects questions.
- This category links heavily into `after-sales/` — keep cross-references current.
