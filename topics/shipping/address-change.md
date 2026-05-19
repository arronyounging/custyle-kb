---
id: kb.shipping.address-change
intent_primary: "Can I change my shipping address?"
intent_aliases:
  - "I entered the wrong address"
  - "How do I update where my order ships?"
category: shipping
audience: customer
language: en
confidence: low
related:
  - kb.ordering.modify-cancel
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user wants to change address on a specific order"
      handoff: transact.update_order_address
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Changing shipping address

> Status: **stub**. Body TODO.

## Quick answer

TODO — Policy: address can be changed within X window or before production / before ship. Verify exact rule.

## Details

TODO — If too late, options: redirect via carrier (when supported), or treat as lost-package case.

## When to defer

TODO

## Sources

TODO
