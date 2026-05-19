---
id: kb.shipping.lost-package
intent_primary: "My package never arrived"
intent_aliases:
  - "Where's my missing order?"
  - "Tracking says delivered but I didn't get it"
  - "I think my package is lost"
category: shipping
audience: customer
language: en
confidence: low
related:
  - kb.shipping.tracking
  - kb.after-sales.defects
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user reports a specific lost shipment"
      handoff: converse.handoff_human
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Lost package

> Status: **stub**. Body TODO.

## Quick answer

TODO — Frame the path: check tracking + neighbors first, wait X days past expected delivery, then human handoff for claim.

## Details

TODO

## When to defer

TODO

## Sources

TODO
