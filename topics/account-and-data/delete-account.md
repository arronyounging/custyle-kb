---
id: kb.account-and-data.delete-account
intent_primary: "How do I delete my account?"
intent_aliases:
  - "Close my account"
  - "Remove my data from Custyle"
  - "GDPR data deletion request"
  - "Right to be forgotten"
category: account-and-data
audience: customer
language: en
confidence: medium
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

## Quick answer

You can delete your account — this closes login and removes your personal data (account info, designs, preferences). Some records are kept for legal reasons (paid order history for tax and fraud purposes). Initiating deletion goes through a human-verified flow to make sure it's actually you. Tell support and we'll start it.

## Details

What deletion does:

- **Closes your account.** You can't log in anymore. Email is released so a future signup with the same address is possible.
- **Removes personal data tied to your account.** Profile, designs, preferences, communication history.
- **Retains legally required records.** Order receipts, payment records, tax filings — these are kept because we're legally required to under accounting and consumer-protection law. They're stored separately and not used for any other purpose.

What deletion does NOT do:

- Doesn't refund past orders (separate process).
- Doesn't recover anything once started — it's not reversible.
- Doesn't pull your designs from anywhere you've already shared them publicly (e.g., social media).

The process:

1. Request deletion — through support, not self-serve (to ensure it's really you).
2. Identity verification — quick confirmation step.
3. We process the deletion. Standard timeline is within 30 days, often faster.
4. You get a confirmation when it's done.

If you change your mind before step 3 completes, you can cancel.

## When to defer

- Any deletion request — always human-handoff. Identity must be verified to satisfy GDPR / CCPA and to prevent malicious deletions.
- "Delete just one specific design" → self-serve from Account → My Designs, not full deletion.

## Editorial notes (review before promoting to high)

- "**30-day standard timeline**" — standard GDPR / CCPA window for data-subject deletion requests. Verify the actual ops-side processing time matches; if it's significantly different (e.g., 7 days), update.
- "**Goes through a human-verified flow**" — best-practice security; **verify there's actually a human review step.** If deletion is fully self-serve via a confirm button + email confirm, this entry overstates the friction.
- "**Email is released for future signup**" — assumed; verify the actual policy. Some platforms hold the email permanently to prevent reactivation issues.
- "**Legally required records kept separately**" — true in principle; verify the actual retention policy and storage setup.
- "**Not reversible once started**" — needs to be unambiguous in the actual flow. Confirm the system reflects this.
- The 4-step process is **inferred standard**, not from source. Verify against support's actual workflow.

## Sources

- Inferred from standard GDPR / CCPA-compliant deletion practice
- Verify against ops policy + `back/src/auth/**` deletion logic
