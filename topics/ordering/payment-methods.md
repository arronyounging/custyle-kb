---
id: kb.ordering.payment-methods
intent_primary: "What payment methods do you accept?"
intent_aliases:
  - "Can I pay with PayPal?"
  - "Do you accept Apple Pay?"
  - "Which credit cards work?"
  - "Can I pay with crypto?"
category: ordering
audience: customer
language: en
confidence: medium
related:
  - kb.ordering.place-order
  - kb.ordering.checkout-issues
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "specific payment failure or status for this checkout"
      handoff: transact.get_payment_status
source_of_truth:
  - "~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# What payment methods do you accept?

## Quick answer

Payments run through Stripe. Major credit and debit cards (Visa, Mastercard, American Express, Discover) work everywhere we ship. Wallet options like Apple Pay, Google Pay, and Link show up at checkout when your device and region support them. Bank transfer, wire, and crypto aren't supported right now.

## Details

A few specifics:

- **Cards** are the universal option — any major brand card from any country we ship to should work.
- **Regional methods** (SEPA, iDEAL, Bancontact, and others) appear at checkout if your country supports them through Stripe.
- **Charge timing**: you're charged when the order is placed, not when it ships. This locks in production.
- **Security**: Stripe handles card data — we don't store your card number on our servers.
- **3D Secure**: some banks require a quick verification step before approving the charge. Follow your bank's prompt and the checkout will complete.

## When to defer

- "My card was declined" / "Payment didn't go through" → see [Checkout issues](checkout-issues.md); handoff `transact.get_payment_status` for the live state on a specific attempt.
- "Can I split payment across two cards?" → not supported; human teammate.
- "Can my company pay by invoice?" → bulk / B2B path, human teammate.

## Sources

- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — Ordering & Fulfillment section (2026-05)
- Stripe is the payment processor on custyle-platform (verified against `back/src/payments/**`).
