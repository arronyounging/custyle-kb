---
id: kb.ordering.place-order
intent_primary: "How do I place an order?"
intent_aliases:
  - "How do I check out?"
  - "Where do I buy what I just designed?"
  - "How do I order a design?"
  - "I love this design — how do I order it?"
category: ordering
audience: customer
language: en
confidence: medium
related:
  - kb.ordering.payment-methods
  - kb.ordering.modify-cancel
  - kb.shipping.lead-time
  - kb.account-and-data.signup-login
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "checkout error or stuck session for a specific user"
      handoff: transact.get_payment_status
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# How do I place an order?

## Quick answer

When you're happy with a design, hit order from the design view. Pick the product, size, and quantity. Confirm the shipping address. Pay. You'll get a confirmation email immediately, and production starts on our end. The whole checkout is a few clicks — no design uploads, no specs to fill in.

## Details

The flow, step by step:

1. **From the design view, choose to order.** You don't re-upload the design — it's already in your workspace.
2. **Pick the product form and size.** Some designs come with a Crew-recommended product (Axis picked it during design); you can override.
3. **Set quantity.** One is enough. No minimums.
4. **Shipping address.** If you've ordered before, your saved address is the default.
5. **Pay.** See [Payment methods](payment-methods.md) for what's accepted.
6. **Confirmation.** You'll get an order ID and email. The design enters production from there.

An account is required to check out — see [Sign up / log in](../account-and-data/signup-login.md). Designing without an account is fine; ordering needs one so we can fulfill it.

After ordering: production starts immediately. See [Lead time](../shipping/lead-time.md) for what to expect on delivery.

## When to defer

- "My checkout is stuck / payment was declined" → [Checkout issues](checkout-issues.md) + handoff `transact.get_payment_status` for the specific session.
- "Can I change my order now?" → [Modify or cancel](modify-cancel.md).
- "Where's my order confirmation email?" → human teammate; verify spam folder first.

## Editorial notes (review before promoting to high)

- The five-step flow is **standard e-commerce checkout** with Custyle-specific touches (no design re-upload, Crew-recommended product). Verify against the actual `custyle-platform/front` checkout UI.
- "**The design is already in your workspace**" — implied by the platform's design-then-order model. Verify the workspace persistence behavior — does it survive logout, session expiry, etc.?
- "**Saved address default**" — assumed feature; verify implementation.
- "**Order ID and email confirmation immediately**" — standard but verify the actual confirmation latency and what's in the email (tracking? receipt? both?).
- "**Production starts from there**" — needs to align with the cancellation window in `modify-cancel.md`. If there's a grace period, production doesn't actually start "immediately."
- The Axis-recommended-product mention — verify whether the order flow actually exposes Axis's recommendation as a default or just an option.

## Sources

- Inferred from standard custom-merch checkout flow + cross-references to other KB entries
- Verify against `custyle-platform/front/modules/cart/**` + `back/src/transact/**` before promoting to high
