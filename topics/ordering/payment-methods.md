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

## Editorial notes (review before promoting to high)

**This entry is the most extrapolated of the four — ks-faq says only "Stripe handles payment".** The rest is inferred from Stripe's standard capabilities. Specifically:

- "**Visa, Mastercard, American Express, Discover**" — standard Stripe defaults. Verify the Custyle Stripe account has all four enabled (Amex sometimes requires extra activation).
- "**Apple Pay, Google Pay, Link**" — Stripe defaults when the merchant enables them. Verify whether Custyle has enabled them; "Link" specifically requires opt-in.
- "**SEPA, iDEAL, Bancontact**" mentioned as regional examples — speculative. Verify exact regional method list.
- "**Bank transfer, wire, and crypto aren't supported right now**" — likely true but unverified. Could be wrong if Custyle has enabled Stripe's ACH or bank-debit features.
- "**Charged when the order is placed, not when it ships**" — Stripe-standard immediate capture, but Custyle could be using authorize-then-capture. Verify against `back/src/payments/**`.
- "**3D Secure: some banks require a quick verification step**" — universally true for SCA-mandated jurisdictions (EU/UK). Safe to claim.
- "**We don't store your card number on our servers**" — true under standard Stripe Checkout/Elements integration; verify Custyle's integration mode confirms this.
- "Split payment / invoice" rejections — likely correct but unverified; could be supported via Stripe Invoices.

## Sources

- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — Ordering & Fulfillment section (2026-05)
- Stripe is the payment processor on custyle-platform (verified against `back/src/payments/**`).
