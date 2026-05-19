---
id: kb.shipping.tracking
intent_primary: "How do I track my order?"
intent_aliases:
  - "Where's my order?"
  - "Can I get a tracking number?"
  - "How do I see shipping status?"
  - "When was my order shipped?"
category: shipping
audience: customer
language: en
confidence: medium
related:
  - kb.shipping.lead-time
  - kb.shipping.lost-package
  - kb.account-and-data.find-my-orders
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "the actual tracking number / live status for a specific order"
      handoff: transact.get_order
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# How do I track my order?

## Quick answer

When your order ships, we email a tracking link and update the status in Account → Orders. Before that point, your order is either still in production or queued — the order page tells you which phase it's in. If you want the live status right now, just ask and I'll pull it.

## Details

Three phases your order goes through:

1. **In production.** Right after payment, the design enters manufacturing. Account → Orders shows "in production." No tracking number yet — there's nothing to track until it ships.
2. **Shipped.** Once the package leaves the production facility, we email a tracking link and the order status flips to "shipped." Tracking is provided by the carrier — clicking through goes to their site (USPS, DHL, FedEx, etc., depending on route).
3. **Delivered.** Carrier marks the package delivered. If it doesn't arrive and the tracking says delivered, see [Lost package](lost-package.md).

If you don't see the shipping email by the expected lead-time end, check spam first, then ask — I can confirm what state the order is in. Sometimes orders sit "in production" longer than the typical window if a design needed an extra QC pass.

## When to defer

- "What's the live tracking number for order #X?" → handoff `transact.get_order`.
- "My order says delivered but I don't have it" → [Lost package](lost-package.md).
- "Carrier tracking link isn't loading" → that's a carrier-side issue; try the carrier's site directly.

## Editorial notes (review before promoting to high)

- **Carriers named (USPS, DHL, FedEx)** — examples; the actual carrier depends on the fulfillment route. Verify which carriers are in regular use; this list could mislead by including ones we don't use or omitting ones we do.
- "**Tracking email + Account → Orders update**" — standard ecommerce flow; verify the actual delivery channel (the email part might be carrier-direct vs. Custyle-relayed).
- "**Three-phase status**" — in production / shipped / delivered. Verify the actual status taxonomy in `back/src/transact/**` (may have more granular states like "in QC," "awaiting carrier pickup," etc.).
- "**Designs sometimes need extra QC**" — true reality but voice-soft. Verify whether the actual UI surfaces this as a delay reason.

## Sources

- Inferred from standard custom-merch shipping flow
- Verify against `back/src/transact/**` order-status logic + email-trigger code
