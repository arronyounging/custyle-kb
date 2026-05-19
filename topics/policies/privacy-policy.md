---
id: kb.policies.privacy-policy
intent_primary: "What's your privacy policy?"
intent_aliases:
  - "How do you use my data?"
  - "What data do you collect?"
  - "GDPR / CCPA compliance"
  - "Do you sell my data?"
  - "Is my data safe?"
category: policies
audience: customer
language: en
confidence: medium
related:
  - kb.account-and-data.data-privacy
  - kb.account-and-data.delete-account
  - kb.policies.terms-summary
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
source_of_truth:
  - "~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Privacy Policy — summary

## Quick answer

The short version: we collect account info, your prompts and designs, and order data — used to fulfill orders, improve the Crew, and run the platform. We use encrypted connections and Stripe for payments. We don't sell personal data. The full Privacy Policy on our legal page is the binding source.

## Details

Plain-language overview:

**What we collect:**
- Account info (email, password hash, optional profile).
- Your design inputs (prompts, uploads) and the designs the Crew produces.
- Order data (what you bought, where to ship, payment receipt via Stripe).
- Standard analytics (page views, feature usage) — for product improvement.

**What we use it for:**
- Fulfilling your orders and supporting your account.
- Improving the Crew's quality (designs used in training only under each AI provider's published consent and licensing terms).
- Communicating about your orders and (if you opt in) about new features.

**What we don't do:**
- Sell your personal data to advertisers or third parties.
- Share your private designs publicly. You decide what (if anything) goes to a public gallery.
- Use payment card data — Stripe handles that, not us.

**Your rights** (GDPR / CCPA and equivalents):
- Access the data we have on you.
- Request deletion of your account and associated data — see [Delete account](../account-and-data/delete-account.md).
- Export your data in a portable format.

For the binding legal version, see the Privacy Policy on our legal page.

## When to defer

- "What specifically do you store?" / "Send me my data" → human teammate (data-subject access requests need identity verification).
- "Delete me" → see [Delete account](../account-and-data/delete-account.md); the actual deletion goes through a human-verified flow.
- "Did you get hacked?" → human teammate immediately.

## Editorial notes (review before promoting to high)

- "**We don't sell personal data**" — direct lift from ks-faq Q "Is my data safe?" ("we don't sell personal data").
- "**Encrypted connections (HTTPS)**" + "**Stripe handles payment data**" — direct from ks-faq.
- "**Designs used in training only under each AI provider's consent/licensing terms**" — ks-faq Q7 mentions "All training data follows each provider's published consent and licensing policies." Verify this still applies to user-generated designs (the ks-faq text was about training the *base* models, not Custyle's use of user data).
- "**You decide what goes to the public gallery**" — implied by "private unless you choose to publish them" in ks-faq. Direct.
- "**GDPR / CCPA rights**" enumeration (access / deletion / portability) — standard rights under those frameworks. Verify the Privacy Policy doc actually enumerates these or just references the regulations.
- "**Standard analytics**" — assumed, not in source. Verify the actual analytics scope (any third-party trackers? Mixpanel, GA, etc.).
- "**Opt in for new-feature communications**" — assumed standard but **unverified**. Email defaults may be opt-out rather than opt-in. Check.
- No canonical legal-page URL yet — placeholder reference.

## Sources

- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — "Is my data safe?" + "What AI technology do you use?"
- (canonical Privacy Policy URL — TODO when published)
