---
id: kb.account-and-data.find-my-orders
intent_primary: "Where do I find my orders?"
intent_aliases:
  - "How do I see my order history?"
  - "Where's my order list?"
  - "Can I view past orders?"
category: account-and-data
audience: customer
language: en
confidence: low
related:
  - kb.ordering.invoice-and-receipt
  - kb.shipping.tracking
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user wants the actual list / status of their orders"
      handoff: transact.list_my_orders
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Finding your orders

> Status: **stub**. Body TODO.

## Quick answer

TODO — Path: account → Orders (verify naming). What's visible per order (status, tracking link, receipt). ≤ 80 words.

## Details

TODO — Confirmation email is the authoritative receipt; the in-account view mirrors it.

## When to defer

TODO

## Sources

TODO
