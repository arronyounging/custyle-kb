---
id: kb.product-info.size-chart
intent_primary: "What size should I order?"
intent_aliases:
  - "Do you have a size chart?"
  - "How does your sizing run?"
  - "What size am I in your shirts?"
  - "Is the fit true to size?"
  - "Where's the size guide?"
category: product-info
audience: customer
language: en
confidence: medium
related:
  - kb.product-info.fit-and-cut
  - kb.product-info.material-and-fabric
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user wants the size chart for a specific product"
      handoff: shop.get_product_specs
source_of_truth:
  - "~/Desktop/Custyle/商品/供应链/"
  - "~/Desktop/Custyle/商品/[fulfillment-partner-docs]"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Size chart

## Quick answer

Each product has its own size chart on its product page — sizing varies by product type (a streetwear tee runs different from a fitted tank). One tip: measure a piece you already own and love, and match those numbers to the chart rather than guessing by the size letter (M / L / XL). If you're between sizes, size up — fabric softens but doesn't grow.

## Details

Why no single Custyle size chart:

- Different product types (tees, hoodies, kids', tote bags) have inherently different sizing models.
- Production routes through manufacturing partners with their own dimension sets, so a Custyle "M" on one product type isn't necessarily the same as on another.
- Each product page surfaces the relevant chart at the size-selection step.

How to read the chart:

- **Charts show body measurements** (chest, length, shoulder, etc.) — these are the measurements of the wearer, not the garment.
- **For fit feel**, also check the "fit" notation on the product (relaxed / regular / slim / oversized) — see [Fit & cut](fit-and-cut.md).
- **Compare to a piece you own.** Lay a similar product flat, measure it, find the closest match on the chart.

Sizing tips:

- **Between sizes?** Size up. Fabric softens with wash but doesn't expand.
- **For a relaxed / oversized feel** on a regular-fit garment, also size up.
- **For a fitted feel** on a relaxed-fit garment, size down.
- **Kids' sizing** usually follows age + height ranges rather than letter sizes — chart will show the conversion.

If a piece doesn't fit, [Returns](../after-sales/returns.md) covers the policy (short version: defects yes, buyer's-mistake size no — measure carefully).

## When to defer

- "Show me the size chart for [specific product]" → handoff `shop.get_product_specs`.
- "What's the conversion from EU sizes to US sizes for [product]?" → product page chart usually has both; if not, human teammate.
- "I'm in between two sizes for [specific product]" → check the body-measurement column rather than the size letter; if still unclear, human teammate.

## Editorial notes (review before promoting to high)

- "**Each product has its own chart**" — implied by multi-supplier routing in `custyle-brand/product/architecture.md`. **Verify against actual product pages** — if Custyle has standardized one chart across all of a category, this entry overstates the variance.
- "**Size up between sizes**" — universal apparel advice; reasonable to claim.
- "**Body measurements not garment measurements**" — common convention but **verify against actual chart format** (some platforms show garment measurements, some body, some both).
- "**Kids' sizing by age + height**" — assumed convention; verify Custyle's kids product spec.
- "**Buyer's-mistake size = not returnable**" cross-link with `returns.md` — verify consistency.

## Sources

- `~/Desktop/Custyle/商品/供应链/` — supplier sizing docs (PPTX, multiple suppliers)
- `~/Desktop/Custyle/商品/[fulfillment-partner-docs]` — current fulfillment-partner integration size data
- Verify against actual product-page size-chart UI
