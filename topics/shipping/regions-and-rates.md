---
id: kb.shipping.regions-and-rates
intent_primary: "Where do you ship?"
intent_aliases:
  - "Do you ship internationally?"
  - "Do you ship to my country?"
  - "Which countries do you deliver to?"
category: shipping
audience: customer
language: en
confidence: medium
related:
  - kb.shipping.lead-time
  - kb.shipping.customs-and-duties
  - kb.shipping.shipping-methods
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "live shipping cost for a specific cart / destination"
      handoff: transact.estimate_shipping
    - condition: "live availability check for a specific country not in the static list"
      handoff: shop.check_shipping_availability
source_of_truth:
  - "~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md"
  - "~/Desktop/Custyle/商品/Printful/"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Where do you ship?

## Quick answer

Yes, we ship worldwide. Our global fulfillment network covers the US, the UK, the EU, Canada, Australia, Japan, and most of the rest of the world. The methods and cost for your specific address are calculated at checkout. If you want to confirm coverage before designing, just tell me the destination and I'll check.

## Details

Production happens in regional facilities — usually whichever is closest to you — so most orders ship domestically once produced. That keeps transit time and customs friction down.

A few notes:
- **Cost** depends on destination, weight, and method (standard vs. express). It shows up at checkout — we don't quote shipping in conversation because it's calculated live.
- **Restricted destinations** exist (sanctions, embargoes, some remote territories). Checkout will flag if a destination isn't supported.
- **International orders** may go through customs — see [Customs & duties](customs-and-duties.md).
- **PO boxes / APO/FPO**: supported on some routes only.

## When to defer

- "How much is shipping to [country]?" → handoff `transact.estimate_shipping` (needs cart + address).
- "Do you ship to [specific country not commonly listed]?" → handoff `shop.check_shipping_availability`.
- Bulk / freight / pallet shipping → human teammate.

## Editorial notes (review before promoting to high)

- ks-faq says **"Worldwide. Our fulfillment partner (Printful) has production facilities in the US, Europe, and other regions. International shipping is available to most countries."** No specific country enumeration in source.
- **My enumeration "US, the UK, the EU, Canada, Australia, Japan"** is inferred from Printful's known fulfillment footprint, not from a Custyle policy doc. Verify against fulfillment integration. Particular concerns:
  - **Japan**: Printful does ship to Japan but with longer transit; safe to claim.
  - **EU "most countries"**: hedged language is intentional — some EU member states have shipping limitations on certain products.
  - **Canada, Australia, NZ**: standard but verify the actual list.
- "**Restricted destinations** exist (sanctions, embargoes, some remote territories)" — generic e-commerce standard, not in source. Confirm checkout actually surfaces a flag for restricted countries.
- "**PO boxes / APO/FPO**: supported on some routes only" — speculative. Some carriers don't, some do. Verify.
- Quick answer ends with "or ask me and I'll route you to a check." — that depends on `shop.check_shipping_availability` op existing. **The op name is a target, not yet confirmed against `custyle-platform`.** Verify before this entry's Quick answer ships in production.

## Sources

- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — "Where do you ship?" (2026-05)
- `~/Desktop/Custyle/商品/Printful/` — supported regions integration spec
