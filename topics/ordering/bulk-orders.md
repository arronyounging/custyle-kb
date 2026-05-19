---
id: kb.ordering.bulk-orders
intent_primary: "Do you support bulk or wholesale orders?"
intent_aliases:
  - "Can I order 100 t-shirts?"
  - "Is there a bulk discount?"
  - "I want to order for my team"
category: ordering
audience: prospect
language: en
confidence: low
related:
  - kb.ordering.discounts
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user wants to discuss volume / pricing for a specific bulk order"
      handoff: converse.handoff_human
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Bulk and wholesale orders

> Status: **stub**. Body TODO.

## Quick answer

TODO — State current bulk policy (or note that bulk is via human team if Phase 0 is per-unit only).

## Details

TODO

## When to defer

TODO

## Sources

TODO
