---
id: kb.after-sales.returns
intent_primary: "What's your return policy?"
intent_aliases:
  - "Can I return a custom item?"
  - "Do you accept returns?"
  - "How do I send something back?"
category: after-sales
audience: customer
language: en
confidence: low
related:
  - kb.after-sales.refunds
  - kb.after-sales.defects
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "specific return request for an existing order"
      handoff: converse.handoff_human
source_of_truth:
  - "~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md"  # Returns / Refunds section
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Return policy

> Status: **stub**. Body TODO.

## Quick answer

TODO — Custom-printed merch is generally non-returnable for buyer's-remorse — verify exact policy. Defects and wrong-item are different (see defects.md).

## Details

TODO — Layer 1: custom items are made for you, so general returns don't apply. Layer 2: exceptions for defects/damage/wrong item. Layer 3: how to start a case.

## When to defer

TODO

## Sources

TODO
