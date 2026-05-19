---
id: kb.shipping.shipping-methods
intent_primary: "What shipping methods do you offer?"
intent_aliases:
  - "Is there express shipping?"
  - "Can I pay for faster delivery?"
  - "Standard or rush?"
  - "Overnight shipping?"
category: shipping
audience: customer
language: en
confidence: medium
related:
  - kb.shipping.lead-time
  - kb.shipping.regions-and-rates
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "exact methods + cost for a destination"
      handoff: transact.estimate_shipping
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Shipping methods

## Quick answer

The methods available depend on your destination. Standard shipping is offered everywhere we ship; faster options (express, expedited) appear at checkout where the carrier supports them. Custom merch has a fixed production window before *any* shipping starts, so even express shipping doesn't shortcut production time. The cart shows your options with delivery estimates before you pay.

## Details

What "shipping method" means here:

- **Production time is separate from shipping time.** A choice at checkout shifts the *transit* phase, not the *production* phase. See [Lead time](lead-time.md) for the production window.
- **Standard** — typically lowest cost, longest transit window. Available to every destination we ship to.
- **Expedited / express** — faster transit when the carrier supports it for your destination. Costs more. Not available on every route.
- **Same-day / overnight** — generally not available; custom merch can't be produced in a day.

What to expect:

- The cart compares methods + their delivery estimates side by side.
- Express on a custom item still shows a longer total time than express on stock items (because of production).
- Some remote destinations only have one option (standard) — that's a carrier reality, not a Custyle choice.

## When to defer

- "What does express cost for [destination]?" → handoff `transact.estimate_shipping` with cart + address.
- "Can you guarantee delivery by [date]?" → no. We don't promise specific arrival dates.
- "Why is there no express option for my country?" → carrier-side limitation; route choice not controlled by us. Human teammate if pressed.

## Editorial notes (review before promoting to high)

- "**Express doesn't shortcut production**" — universally true for custom merch but worth verifying we communicate this clearly at checkout (otherwise customers might feel misled).
- "**Standard / expedited / overnight**" three-tier framing — assumed; verify the actual checkout method names used.
- "**Same-day not available**" — true at Phase 0 (POD model); flagged in case it changes with C2M.
- "**Remote destinations have only one option**" — carrier reality; verify which destinations are single-method.

## Sources

- Inferred from standard custom-merch shipping practice
- Verify against fulfillment integration + checkout UI
