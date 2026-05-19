---
id: kb.shipping.tracking
intent_primary: "How do I track my order?"
intent_aliases:
  - "Where's my order?"
  - "Can I get a tracking number?"
  - "How do I see shipping status?"
category: shipping
audience: customer
language: en
confidence: low
related:
  - kb.shipping.lead-time
boundary:
  forbid_commerce_facts: false
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "the actual tracking number / live status for a specific order"
      handoff: transact.get_order
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# How do I track my order?

> Status: **stub**. Body TODO.

## Quick answer

TODO — Explain: tracking is emailed when the order ships, and visible in account → orders.

## Details

TODO — What to do if no tracking after expected window. Handoff to `transact.get_order` for active fetch.

## When to defer

TODO

## Sources

TODO
