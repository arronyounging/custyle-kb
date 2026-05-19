---
id: kb.ordering.discounts
intent_primary: "Do you have discounts or coupons?"
intent_aliases:
  - "Is there a promo code?"
  - "How do I redeem a discount?"
  - "Are there any sales?"
category: ordering
audience: customer
language: en
confidence: low
related: []
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user wants to know if a specific code is currently valid"
      handoff: shop.validate_coupon
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Discounts & coupons

> Status: **stub**. Body TODO.

## Quick answer

TODO — Describe whether Custyle currently runs promos, how codes are entered at checkout, and that all live codes are owned by marketing. Never quote an active code in KB.

## Details

TODO

## When to defer

TODO

## Sources

TODO
