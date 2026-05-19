---
id: kb.ordering.place-order
intent_primary: "How do I place an order?"
intent_aliases:
  - "How do I check out?"
  - "Where do I buy what I just designed?"
  - "How do I order a design?"
category: ordering
audience: customer
language: en
confidence: low
related:
  - kb.ordering.payment-methods
  - kb.ordering.modify-cancel
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# How do I place an order?

> Status: **stub**. Body TODO.

## Quick answer

TODO — Walk: pick the design + product, choose size/variant, add to cart, confirm shipping address, pay. Order confirmation arrives by email.

## Details

TODO — Verify exact flow in `custyle-platform/front/modules/cart/**` and `transact/**`.

## When to defer

TODO — Checkout errors → `transact.get_checkout_status` (verify op name).

## Sources

TODO
