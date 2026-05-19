---
id: kb.product-info.fit-and-cut
intent_primary: "What's the fit like?"
intent_aliases:
  - "Is the t-shirt slim or boxy?"
  - "Does the hoodie run oversized?"
  - "Unisex or fitted?"
category: product-info
audience: customer
language: en
confidence: low
related:
  - kb.product-info.size-chart
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "fit details for a specific product"
      handoff: shop.get_product_specs
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Fit & cut

> Status: **stub**. Body TODO.

## Quick answer

TODO — Variants exist across the catalog (relaxed, fitted, oversized, classic). Each product page declares its fit. Give one piece of practical guidance (e.g., "for streetwear silhouettes, our oversized cut is usually the call"). ≤ 80 words.

## Details

TODO

## When to defer

TODO

## Sources

TODO
