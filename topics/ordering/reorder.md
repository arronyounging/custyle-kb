---
id: kb.ordering.reorder
intent_primary: "Can I reorder a past order?"
intent_aliases:
  - "I want another one of the same thing"
  - "Order the same design again"
  - "Reorder in a different size / color"
  - "How do I buy this again?"
category: ordering
audience: customer
language: en
confidence: medium
related:
  - kb.account-and-data.find-my-orders
  - kb.ai-design-workflow.iteration
  - kb.ordering.place-order
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user wants to actually reorder a specific past order"
      handoff: transact.reorder
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Reorder a past order

## Quick answer

Yes — Account → Orders → pick the order → Reorder. The same design and product carry over; you can adjust size, color, and quantity before paying. If you want to change the design itself, that's iteration, not reorder — see [Iteration](../ai-design-workflow/iteration.md).

## Details

What carries from the original:

- The design (artwork, prompt, generated output).
- The product type (the t-shirt, hoodie, etc. you ordered).
- The technique pairing (DTG / DTF / embroidery etc.).
- Default shipping address (you can change).

What you can adjust at the reorder step:

- Size (same product, different size).
- Color (within the product's available options).
- Quantity.
- Shipping address.

When reorder is the right path:

- You loved it. Order another one. Or order one for a friend with their address.
- You want it in a different size. Faster than re-designing.
- You want multiples now, having ordered one originally.

When **iteration** is the right path (not reorder):

- The design needs tweaking. Different colors in the artwork itself, different composition, different mood. See [Iteration](../ai-design-workflow/iteration.md).
- You want a similar vibe but a fundamentally different piece.

## When to defer

- "Reorder order #X" → handoff `transact.reorder` (or take it as a fresh order with carried-over design).
- "Reorder but in a product type I didn't order originally" → that's iteration + new order, not pure reorder. Cross-link.

## Editorial notes (review before promoting to high)

- "**Account → Orders → Reorder**" — assumed UI path; verify against `front/modules/account/**`.
- "**Same product type, adjust size/color/qty**" — assumed reorder semantics. Verify the actual reorder flow allows these adjustments or just clones the original order verbatim.
- "**Default shipping address picked up**" — assumed; verify.

## Sources

- Inferred from standard reorder UX patterns
- Verify against `back/src/transact/**` reorder logic
