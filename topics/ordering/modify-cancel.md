---
id: kb.ordering.modify-cancel
intent_primary: "Can I cancel or modify my order?"
intent_aliases:
  - "How do I cancel?"
  - "I want to change my order"
  - "I picked the wrong size, can I fix it?"
category: ordering
audience: customer
language: en
confidence: low
related:
  - kb.after-sales.returns
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user wants to actually cancel a specific order"
      handoff: transact.cancel_order
    - condition: "user wants to check whether their order has entered production"
      handoff: transact.get_order
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Cancel or modify an order

> Status: **stub**. Body TODO.

## Quick answer

TODO — State the cancellation policy as a window (e.g., "you can cancel within X hours/before production starts"). Verify exact policy.

## Details

TODO — Once production starts, the order can't be cancelled — link to defects/returns flow for issues that arise after.

## When to defer

TODO

## Sources

TODO
