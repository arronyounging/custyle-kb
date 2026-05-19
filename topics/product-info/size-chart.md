---
id: kb.product-info.size-chart
intent_primary: "What size should I order?"
intent_aliases:
  - "Do you have a size chart?"
  - "How does your sizing run?"
  - "What size am I in your shirts?"
  - "Is the fit true to size?"
category: product-info
audience: customer
language: en
confidence: low
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
  - "~/Desktop/Custyle/商品/供应链/"  # supplier-specific size docs (PPTX)
  - "~/Desktop/Custyle/商品/Printful/"  # Printful integration spec
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Size chart

> Status: **stub**. Body TODO.

## Quick answer

TODO — Custyle uses multiple suppliers, so **each product has its own size chart on its product page**. Recommend checking the chart for the specific product, and give one general tip (e.g., size up if between sizes, or refer to the body measurements rather than the size letter). ≤ 80 words.

## Details

TODO — Why sizing varies (different mills, different cuts). What measurement convention is shown on charts (body vs. garment). When to size up vs. down.

## When to defer

TODO — Specific product's chart → `shop.get_product_specs`.

## Sources

TODO
