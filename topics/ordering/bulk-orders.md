---
id: kb.ordering.bulk-orders
intent_primary: "Do you support bulk or wholesale orders?"
intent_aliases:
  - "Can I order 100 t-shirts?"
  - "Is there a bulk discount?"
  - "I want to order for my team"
  - "Team merch?"
  - "Wholesale pricing?"
category: ordering
audience: prospect
language: en
confidence: medium
related:
  - kb.ordering.discounts
  - kb.ordering.place-order
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user wants to discuss volume / pricing for a specific bulk order"
      handoff: converse.handoff_human
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Bulk and wholesale orders

## Quick answer

Per-unit ordering works fine for moderate quantities — just bump the qty at checkout. For larger volume (team merch, event giveaways, brand drops at scale), talk to us directly. Custyle can route bulk through dedicated production with different timelines and pricing than per-unit retail. Ask and we'll set it up.

## Details

Two paths:

**Standard checkout with quantity** — works for small batches:
- Order 5, 10, even 20+ pieces of the same design through normal checkout.
- Same per-unit pricing; same production window.
- Suitable for: friend groups, small teams, small events.

**Bulk / wholesale dedicated path** — for larger volume:
- Larger volume (typically dozens or hundreds) can route differently — different production line, different timeline, possibly different pricing.
- Use cases: brand merch drops, corporate orders, event-scale runs, creator audience drops.
- Volume discounts may apply, but case-by-case — not a standing public price ladder.
- Contact support to discuss volume + timeline + delivery needs.

What we'll want to know for a bulk inquiry:

- **Design** — finalized or still in concept? We can run both, but timeline differs.
- **Volume** — how many pieces, what mix of sizes / variants.
- **Timeline** — when do you need them?
- **Delivery** — single drop-ship or distributed?
- **Recurring or one-off?** — a recurring drop is different from a one-time event.

## When to defer

- Any bulk / wholesale inquiry → human teammate. We don't quote bulk in chat.
- "What's the cheapest per-unit price at [N] volume?" → not a published number; human teammate.

## Editorial notes (review before promoting to high)

- "**Standard checkout handles small batches**" — assumed; **verify the quantity limit** (some platforms cap retail-flow quantity to prevent abuse-by-volume). If there's a hard cap, this entry should mention it.
- "**Bulk dedicated path**" — **verify this actually exists at Phase 0**. If Custyle today doesn't have a bulk operations workflow, this entry over-promises. May need to soften to "we're working on a dedicated bulk path — for now, contact support."
- "**Volume discounts case-by-case**" — assumed support discretion; verify.
- "**Recurring or one-off**" — speculative; verify ops can actually support recurring B2B-style drops.

## Sources

- Inferred from standard custom-merch bulk-order practice
- Verify against ops policy + whether bulk fulfillment workflow is live
