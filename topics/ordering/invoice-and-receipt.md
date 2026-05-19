---
id: kb.ordering.invoice-and-receipt
intent_primary: "How do I get a receipt or invoice?"
intent_aliases:
  - "Can I get a tax invoice?"
  - "Where's my order receipt?"
category: ordering
audience: customer
language: en
confidence: low
related: []
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user needs a receipt for a specific order"
      handoff: transact.get_invoice
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Receipts and invoices

> Status: **stub**. Body TODO.

## Quick answer

TODO — How receipts are sent (email after payment), where to find them in the account.

## Details

TODO

## When to defer

TODO

## Sources

TODO
