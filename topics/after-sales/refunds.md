---
id: kb.after-sales.refunds
intent_primary: "How do refunds work?"
intent_aliases:
  - "When will I get my refund?"
  - "Can you refund me?"
  - "Refund timeline"
category: after-sales
audience: customer
language: en
confidence: low
related:
  - kb.after-sales.returns
  - kb.after-sales.defects
boundary:
  forbid_commerce_facts: false
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "specific refund request"
      handoff: converse.handoff_human
    - condition: "refund processing status"
      handoff: transact.get_payment_status
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# How refunds work

> Status: **stub**. Body TODO.

## Quick answer

TODO — Describe **policy** only: when refunds apply (qualifying issue), how they're processed (back to original payment), typical processing time (verify). Do NOT promise a refund.

## Details

TODO

## When to defer

TODO

## Sources

TODO
