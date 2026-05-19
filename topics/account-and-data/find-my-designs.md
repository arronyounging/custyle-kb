---
id: kb.account-and-data.find-my-designs
intent_primary: "Where are my saved designs?"
intent_aliases:
  - "How do I find designs I made before?"
  - "Are my designs saved?"
  - "Did I lose my design?"
category: account-and-data
audience: customer
language: en
confidence: low
related:
  - kb.ai-design-workflow.iteration
  - kb.account-and-data.signup-login
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user wants the actual list / status of their designs"
      handoff: design.list_my_designs
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Finding your saved designs

> Status: **stub**. Body TODO.

## Quick answer

TODO — Designs are saved to the account that created them. Path: account → My Designs (verify naming). For un-logged-in creation: depending on policy, designs may persist in session-only or be lost on close.

## Details

TODO — Confirm session vs. account persistence rules. Address common case: "I designed something while logged out and now I can't find it."

## When to defer

TODO — Actual fetch of the user's design list at runtime is a Converse memory / design-domain concern, not KB.

## Sources

TODO
