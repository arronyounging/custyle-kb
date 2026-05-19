---
id: kb.ordering.reorder
intent_primary: "Can I reorder a past order?"
intent_aliases:
  - "I want another one of the same thing"
  - "Order the same design again"
  - "Reorder in a different size / color"
category: ordering
audience: customer
language: en
confidence: low
related:
  - kb.account-and-data.find-my-orders
  - kb.ai-design-workflow.iteration
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user wants to actually reorder a specific past order"
      handoff: transact.reorder
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Reorder a past order

> Status: **stub**. Body TODO.

## Quick answer

TODO — Path: account → Orders → Reorder. Same design, same product, can adjust size/quantity. ≤ 80 words.

## Details

TODO — Distinguish reorder (same design, same product) from iteration (modify the design). Cross-link both.

## When to defer

TODO

## Sources

TODO
