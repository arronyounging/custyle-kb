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
confidence: low
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
  - "~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md"  # Ordering & Fulfillment section
  - "~/Desktop/Custyle/商品/Printful/"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Where Custyle ships

> Status: **stub**. Body TODO.

## Quick answer

TODO — List supported regions at the level of "US, EU (most countries), UK, Canada, Australia, Japan, …" — verify against fulfillment integration. Don't list every country in Quick answer.

## Details

TODO — Full country list as a reference table.

## When to defer

TODO — Specific cart shipping cost → `transact.estimate_shipping`.

## Sources

TODO
