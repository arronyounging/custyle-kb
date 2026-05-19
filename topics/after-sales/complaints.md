---
id: kb.after-sales.complaints
intent_primary: "I want to file a complaint"
intent_aliases:
  - "I'm unhappy with my experience"
  - "Where do I escalate?"
  - "How do I report an issue?"
category: after-sales
audience: customer
language: en
confidence: low
related:
  - kb.after-sales.defects
  - kb.after-sales.refunds
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "any complaint at any severity"
      handoff: converse.handoff_human
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Filing a complaint

> Status: **stub**. Body TODO.

## Quick answer

TODO — Direct path to human support. Confirm receipt. No defensiveness, no boilerplate apology.

## Details

TODO — Channels (chat handoff, email), what info to include, expected response window.

## When to defer

TODO

## Sources

TODO
