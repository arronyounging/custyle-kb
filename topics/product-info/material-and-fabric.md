---
id: kb.product-info.material-and-fabric
intent_primary: "What's the fabric made of?"
intent_aliases:
  - "Is it 100% cotton?"
  - "What material is the hoodie?"
  - "Is the fabric organic?"
  - "What's the GSM / weight?"
category: product-info
audience: customer
language: en
confidence: low
related:
  - kb.product-info.size-chart
  - kb.product-info.care-instructions
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user wants material specs for a specific product"
      handoff: shop.get_product_specs
source_of_truth:
  - "~/Desktop/Custyle/商品/供应链/一对半面料选型分析.md"
  - "~/Desktop/Custyle/商品/供应链/衣舍面料选型分析 .md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Material & fabric

> Status: **stub**. Body TODO.

## Quick answer

TODO — Materials vary by product. State the common defaults (e.g., cotton or cotton/poly blend for tees; mid-weight fleece for hoodies — verify) and direct to the product page for exact composition + GSM. ≤ 80 words.

## Details

TODO — Cover: organic options, synthetic blends, eco-certified lines if any (verify against supplier integrations).

## When to defer

TODO

## Sources

TODO
