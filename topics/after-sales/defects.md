---
id: kb.after-sales.defects
intent_primary: "My product arrived damaged or defective"
intent_aliases:
  - "Item is broken"
  - "Print quality is bad"
  - "Wrong size / wrong color shipped"
category: after-sales
audience: customer
language: en
confidence: low
related:
  - kb.after-sales.returns
  - kb.after-sales.refunds
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "any specific defect report on a real order"
      handoff: converse.handoff_human
source_of_truth:
  - "~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md"  # Returns / Refunds section
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Damaged or defective product

> Status: **stub**. Body TODO.

## Quick answer

TODO — Acknowledge + concrete next step: request a photo, file a case, support handles within X. Don't promise a specific resolution.

## Details

TODO — Categories: damage in transit, print defect, wrong item, sizing far off spec. For each: what evidence support needs.

## When to defer

TODO

## Sources

TODO
