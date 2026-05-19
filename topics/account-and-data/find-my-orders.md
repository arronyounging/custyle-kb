---
id: kb.account-and-data.find-my-orders
intent_primary: "Where do I find my orders?"
intent_aliases:
  - "How do I see my order history?"
  - "Where's my order list?"
  - "Can I view past orders?"
  - "Order receipt / invoice"
category: account-and-data
audience: customer
language: en
confidence: medium
related:
  - kb.ordering.invoice-and-receipt
  - kb.shipping.tracking
  - kb.ordering.reorder
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user wants the actual list / status of their orders"
      handoff: transact.list_my_orders
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Where do I find my orders?

## Quick answer

Account → Orders. You'll see every order with its current status, the design that was on it, the tracking link once it ships, and the receipt. Confirmation emails are also sent for every order — those are the authoritative paper trail.

## Details

What's on the orders list:

- **Order ID** — use this when you need to ask support about a specific order.
- **Status** — in production, shipped, delivered, refunded.
- **The design** — preview thumbnail; click through to the full design.
- **Product details** — type, size, color, quantity.
- **Tracking** — once shipped, the carrier's link is here.
- **Total** — the amount you paid + breakdown (product, shipping, tax).
- **Receipt / invoice** — downloadable PDF (or accessible link).

The order email at confirmation time has the same details — keep it for records.

If a recent order isn't showing up:

- Make sure you're signed in with the same account you ordered under.
- Check the email confirmation — sometimes orders placed as a guest get tied to a different (or no) account.
- Tell support and we'll trace it.

## When to defer

- "Live status of order #X" → handoff `transact.list_my_orders` or `transact.get_order` for a single order.
- "I don't see an order I placed" → human teammate, can trace via email or payment receipt.
- "Re-order from this past purchase" → [Reorder](../ordering/reorder.md).

## Editorial notes (review before promoting to high)

- "**Account → Orders**" — assumed UI path; verify the actual navigation label.
- The list of visible fields (Order ID / Status / Design / Product / Tracking / Total / Receipt) — assumed; verify against the actual orders page UI in `front/modules/account/**`.
- "**Receipt / invoice downloadable PDF**" — assumed; verify implementation. Some platforms only do email-based receipts.
- "**Orders placed as guest**" — assumed possible (most ecom supports guest checkout); verify Custyle actually allows guest checkout or whether account is required (cross-reference `signup-login.md`).
- "**Status taxonomy** (in production / shipped / delivered / refunded)" — verify against actual `back/src/transact/**` status enum.

## Sources

- Standard ecommerce order-history UI patterns
- Verify against `back/src/transact/**` + `front/modules/account/**`
