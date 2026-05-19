---
id: kb.account-and-data.data-privacy
intent_primary: "How does Custyle handle my data?"
intent_aliases:
  - "What data do you collect?"
  - "Do you sell my data?"
  - "Is my data safe?"
  - "GDPR / CCPA"
  - "Where is my data stored?"
category: account-and-data
audience: customer
language: en
confidence: medium
related:
  - kb.account-and-data.delete-account
  - kb.policies.privacy-policy
  - kb.account-and-data.signup-login
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

# Data privacy — the basics

## Quick answer

Short version: we collect account info, your prompts and designs, and order data — used to fulfill orders and improve the Crew. We don't sell personal data. Payments go through Stripe (we never see your card number). Your designs are private unless you publish them. For the binding details, see the [Privacy Policy](../policies/privacy-policy.md).

## Details

What we collect:

- **Account info.** Email, password hash, optional profile.
- **Your creations.** The prompts you give, the images you upload, the designs the Crew produces for you. These stay private to your account unless you opt to publish.
- **Orders.** Items, shipping address, order history.
- **Standard analytics.** Page views, feature usage — for product improvement, not for re-sale.

What we use it for:

- Fulfilling orders, supporting your account, sending order updates.
- Improving how the Crew works (per the licensing terms each AI provider publishes for their models).
- Communicating about new features (if you've opted in).

What we don't do:

- Sell personal data to advertisers or third parties.
- Make your designs public without your action.
- Store your payment card numbers (Stripe handles those).

Your rights:

- Access the data we hold on you.
- Delete your account and the data tied to it — see [Delete account](delete-account.md).
- Export your data in a portable format.

For the legally binding version, see the published [Privacy Policy](../policies/privacy-policy.md).

## When to defer

- "Send me a copy of all my data" → human teammate, identity-verified data export.
- "Delete me from your systems" → [Delete account](delete-account.md) + human-verified flow.
- "Are you certified [SOC 2 / ISO 27001]?" → human teammate or trust page if published.

## Editorial notes (review before promoting to high)

- "**We don't sell personal data**" — direct from ks-faq Q "Is my data safe?".
- "**HTTPS + Stripe**" — direct from ks-faq.
- "**Designs private unless published**" — direct from ks-faq "User-created designs are private unless you choose to publish them to the gallery."
- "**Standard analytics for product improvement**" — assumed standard; verify the actual analytics scope (which third parties involved — Mixpanel, GA, PostHog, etc.).
- "**Opt-in for new-feature communications**" — assumed; **verify whether the default is opt-in or opt-out** (some platforms default to opt-out for marketing emails).
- "**Each AI provider's licensing terms**" — paraphrasing ks-faq Q "What AI technology do you use?" ("All training data follows each provider's published consent and licensing policies"). Note: ks-faq is talking about how the *base models* were trained, not about how Custyle uses user data. Be careful — this could be misleading. **Verify**: does Custyle use user prompts / designs for any AI training, including on-platform fine-tuning? If yes, that needs explicit consent disclosure.
- The "GDPR / CCPA rights" list (access / deletion / portability) is duplicated with `policies/privacy-policy.md`. Consider whether one entry should defer to the other.

## Sources

- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — "Is my data safe?", "What AI technology do you use?"
- Cross-reference to `policies/privacy-policy.md` (the binding doc)
