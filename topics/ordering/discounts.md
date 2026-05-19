---
id: kb.ordering.discounts
intent_primary: "Do you have discounts or coupons?"
intent_aliases:
  - "Is there a promo code?"
  - "How do I redeem a discount?"
  - "Are there any sales?"
  - "What are merch credits?"
category: ordering
audience: customer
language: en
confidence: medium
related:
  - kb.ordering.place-order
  - kb.ordering.payment-methods
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user wants to know if a specific code is currently valid"
      handoff: shop.validate_coupon
source_of_truth:
  - "~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md"
  - "~/Desktop/Custyle/launch-strategy/kickstarter/ks-reward-tiers.md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Discounts & coupons

## Quick answer

Promo codes (when active) and merch credits both apply at checkout. Enter a code in the discount field; merch credits show up automatically if you have any on your account. We don't always run promos — the marketing team announces them via email, the gallery, or the official social channels. The Crew can't generate a discount for you on its own.

## Details

Three flavors of "less money at checkout":

- **Promo codes.** When marketing runs a campaign (launch, holiday, partnership), you'll get a code via the announcement channels. Enter it in the discount field at checkout. One code per order. Codes have expiry dates and sometimes minimum-order thresholds — checkout will flag if a code can't apply.
- **Merch credits.** Account credit that can be spent on any product, like store credit. You'll see your balance in Account; it deducts automatically at checkout. Merch credits come from Kickstarter rewards, refunds you opt to take as credit instead of cash, or occasional promotions.
- **Bundle discounts.** Currently not a default offering, but campaigns may include "buy more, save more" promos.

A few practical things:

- **Stack rules.** Codes and credits can typically combine, but verify at checkout — the math shows before you pay.
- **No retroactive application.** If you forgot to enter a code, we can't apply it after the order is placed.
- **Codes are not negotiated.** The Crew (and support) can't issue one-off codes outside of official campaigns.

## When to defer

- "Is code XYZ still valid?" → handoff `shop.validate_coupon`.
- "What's my merch credit balance?" → Account → Credits, or human teammate.
- "Can you give me a discount?" → no. Direct redirect to current public promotions if any.

## Editorial notes (review before promoting to high)

- "**Promo codes / merch credits / bundle discounts**" three-flavor taxonomy — partly from ks-faq (merch credits are explicit there) and partly my framing. Verify the actual discount system in `back/src/`.
- "**One code per order**" — standard convention, verify against `back/src/transact/**` coupon logic.
- "**Merch credits from Kickstarter rewards**" — direct from ks-faq Q "How do merch credits work?".
- "**Codes can't be retroactively applied**" — standard policy, verify.
- "**The Crew can't issue one-off discounts**" — voice-aligned policy, verify with ops (some support orgs allow goodwill discounts).
- No specific active codes mentioned — KB intentionally never quotes live codes; that's marketing's owned channel.

## Sources

- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — "How do merch credits work?", reward-tier mechanics
- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-reward-tiers.md` — credit-issuance via KS backer tiers
