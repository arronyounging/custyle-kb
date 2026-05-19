---
id: kb.ordering.checkout-issues
intent_primary: "My checkout isn't working"
intent_aliases:
  - "Payment was declined"
  - "Stuck at checkout"
  - "Card error"
category: ordering
audience: customer
language: en
confidence: low
related:
  - kb.ordering.payment-methods
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user reports a specific checkout failure for their session"
      handoff: transact.get_payment_status
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Checkout issues

> Status: **stub**. Body TODO.

## Quick answer

TODO — Frame the common causes (card declined by bank, expired card, address mismatch, browser issue). Direct the user to the resolution path.

## Details

TODO

## When to defer

TODO

## Sources

TODO
