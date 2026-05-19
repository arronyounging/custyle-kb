---
id: kb.after-sales.product-not-as-expected
intent_primary: "The product doesn't look like what I designed"
intent_aliases:
  - "Print doesn't match the preview"
  - "Colors are off"
  - "It's not exactly what I expected"
category: after-sales
audience: customer
language: en
confidence: low
related:
  - kb.after-sales.defects
  - kb.production.techniques
boundary:
  forbid_commerce_facts: false
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "specific case with photos"
      handoff: converse.handoff_human
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# When the product doesn't match expectations

> Status: **stub**. Body TODO.

## Quick answer

TODO — Two cases: (1) genuine defect → defects path; (2) preview-to-print color/scale variance → set realistic expectation that physical print has tolerance, then offer to escalate.

## Details

TODO — Explain why preview ≠ exact print (monitor calibration, fabric absorption, etc.) without being defensive. Offer escalation if user's case is outside tolerance.

## When to defer

TODO

## Sources

TODO
