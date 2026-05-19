---
id: kb.shipping.lead-time
intent_primary: "How long does delivery take?"
intent_aliases:
  - "How long until I get my order?"
  - "What's the production time?"
  - "How fast is shipping?"
category: shipping
audience: customer
language: en
confidence: low
related:
  - kb.shipping.regions-and-rates
  - kb.shipping.tracking
boundary:
  forbid_commerce_facts: false
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "ETA for a specific order"
      handoff: transact.get_order
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# How long does delivery take?

> Status: **stub**. Body TODO.

## Quick answer

TODO — Frame as **typical ranges**: production X days + transit Y days, depending on region and product. Verify ranges against fulfillment integration.

## Details

TODO — Break out by region. Custom merch is made on demand — set realistic expectations.

## When to defer

TODO

## Sources

TODO
