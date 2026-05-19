---
id: kb.ordering.modify-cancel
intent_primary: "Can I cancel or modify my order?"
intent_aliases:
  - "How do I cancel?"
  - "I want to change my order"
  - "I picked the wrong size, can I fix it?"
  - "Can I cancel after paying?"
category: ordering
audience: customer
language: en
confidence: medium
related:
  - kb.after-sales.returns
  - kb.shipping.address-change
  - kb.ordering.place-order
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user wants to actually cancel a specific order"
      handoff: transact.cancel_order
    - condition: "user wants to check whether their order has entered production"
      handoff: transact.get_order
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Cancel or modify an order

## Quick answer

Custom merch goes into production right after payment, so the cancellation window is short. You can cancel or change details (size, address, quantity) while the order is still pre-production. Once it's in production, the design is committed to fabric — you can't pull it back. For specifics on your order, check Account → Orders or ask me.

## Details

Two windows:

**Pre-production** — right after you pay and before the Crew sends the design to manufacturing. In this window you can:
- Cancel for a refund.
- Change size or quantity.
- Update the shipping address (also see [Address change](../shipping/address-change.md)).

**In production / shipped** — once the design hits the manufacturing queue, you can't undo it. The piece is being made just for you, on-demand. If something arrives wrong, that's a different path — see [Defects](../after-sales/defects.md).

Why the window is short: custom merch isn't pulled from inventory; production starts as soon as you order. The Crew doesn't sit on your order to make sure it's "real."

If you're not sure which window your order is in, ask — I'll check live status. Or go to Account → Orders.

## When to defer

- "Cancel order #X" → handoff `transact.cancel_order` (which itself checks the window).
- "Has order #X entered production yet?" → handoff `transact.get_order`.
- "I need to change something but the window closed" → human teammate, case-by-case.

## Editorial notes (review before promoting to high)

- **The specific cancellation window duration is not in any source I've found.** I described it as "before production starts" without quoting hours/minutes. **Verify the exact policy** — some platforms have a strict 60-minute grace period; others let you cancel "until the supplier accepts." This is the most critical claim to verify before promoting.
- "**Custom merch goes into production right after payment**" — implied by ks-faq's lead-time framing (3-7 day production starts immediately). Verify the actual scheduling — there may be a daily / hourly batch handoff rather than immediate.
- "**Size, address, quantity changeable pre-production**" — likely true but verify what fields are actually mutable via the live UI vs. via human teammate.
- "**You don't sit on the order**" framing — voice choice, on-brand.

## Sources

- Inferred from custom-merch on-demand model
- Verify against `back/src/transact/**` cancellation logic before promoting to high
