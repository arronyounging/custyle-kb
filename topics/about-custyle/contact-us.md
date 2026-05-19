---
id: kb.about-custyle.contact-us
intent_primary: "How do I contact Custyle?"
intent_aliases:
  - "Support email"
  - "How do I reach a human?"
  - "Is there a phone number?"
  - "Where do I send feedback?"
category: about-custyle
audience: customer
language: en
confidence: medium
related:
  - kb.after-sales.complaints
  - kb.after-sales.review-and-feedback
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user wants to actually start a support conversation now"
      handoff: converse.handoff_human
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# How to contact us

## Quick answer

Easiest path: ask in this chat — say "talk to a human" or describe what you need, and I'll route you to a teammate with all the context already in hand. Email also works; the support address is on our contact page. No phone line at the moment; chat and email are how the team is reachable.

## Details

Three ways to reach us:

- **Chat (recommended).** Ask here — the conversation context comes with you, so the teammate doesn't start cold. Faster for most cases.
- **Email.** Support address on our contact page. Best for cases where you want a written record or have a long writeup with attachments.
- **Account → Help.** Some account-specific issues have direct paths from inside the account view.

What we don't have today:

- **Phone.** No phone support — written channels only at this stage. Chat is fast enough that phone isn't usually a value add for custom-merch questions; email handles the rest.
- **Live chat with a human 24/7.** We're not 24/7. Response time varies by region and time of day; expect a reply within one business day during typical hours.

What helps speed it up:

- Order ID if it's about an order.
- A clear description of what you need or what's wrong.
- Photos if it's a product issue.

For complaints specifically, see [Filing a complaint](../after-sales/complaints.md).

## When to defer

- "Connect me to a human now" → handoff `converse.handoff_human`.
- "What's the support email address?" → contact page link (not hardcoded in KB, since channels can change).

## Editorial notes (review before promoting to high)

- "**No phone**" — assumed at this stage; verify against actual support staffing.
- "**Response within one business day**" — same flag as in `complaints.md`; verify the actual SLA.
- "**Account → Help direct paths**" — assumed if Custyle has in-account contact UI; verify implementation.
- The "**no live 24/7**" honesty — voice-aligned. Don't promise what we can't deliver.

## Sources

- Inferred from standard customer-service patterns for venture-stage SaaS
- Verify against actual support staffing and channels
