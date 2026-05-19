---
id: kb.shipping.delivery-failure
intent_primary: "Delivery was attempted but failed"
intent_aliases:
  - "Carrier couldn't deliver"
  - "Returned to sender"
  - "Held at customs"
category: shipping
audience: customer
language: en
confidence: low
related:
  - kb.shipping.lost-package
  - kb.shipping.customs-and-duties
boundary:
  forbid_commerce_facts: false
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "specific failed-delivery event"
      handoff: converse.handoff_human
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Delivery failed

> Status: **stub**. Body TODO.

## Quick answer

TODO — Common cases: address issue, customs hold, no one home. Action path for each.

## Details

TODO

## When to defer

TODO

## Sources

TODO
