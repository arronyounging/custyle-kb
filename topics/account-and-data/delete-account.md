---
id: kb.account-and-data.delete-account
intent_primary: "How do I delete my account?"
intent_aliases:
  - "Close my account"
  - "Remove my data from Custyle"
  - "GDPR data deletion request"
category: account-and-data
audience: customer
language: en
confidence: low
related:
  - kb.account-and-data.data-privacy
  - kb.policies.privacy-policy
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user actually wants to initiate deletion"
      handoff: converse.handoff_human
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Delete your account

> Status: **stub**. Body TODO.

## Quick answer

TODO — Self-serve vs. request-based path (verify). What gets deleted vs. what is retained for legal reasons (e.g., paid order records for tax purposes). Set expectation on processing timeline.

## Details

TODO — Distinguish: account deletion (closes login) vs. data deletion (right to erasure under GDPR/CCPA — may be broader). Both have different mechanics and timelines.

## When to defer

TODO — Specific deletion request → human handoff for identity verification, per Privacy Policy.

## Sources

TODO
