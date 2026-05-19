---
id: kb.ordering.gift-and-recipient
intent_primary: "Can I send this as a gift?"
intent_aliases:
  - "Can I ship to someone else?"
  - "Is there gift wrapping?"
  - "Can I include a message?"
  - "Hide the price from the recipient?"
category: ordering
audience: customer
language: en
confidence: medium
related:
  - kb.shipping.regions-and-rates
  - kb.shipping.address-change
  - kb.ordering.invoice-and-receipt
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Sending as a gift

## Quick answer

Yes — enter the recipient's address at checkout. The package ships to them, not you. Today there's no standalone gift wrap or note add-on, but the receipt / pricing only goes to your email — the recipient sees just the product. If you want a custom note or premium packaging, mention it in the order and we'll see what we can do.

## Details

How to send a piece as a gift:

- **At checkout, enter the recipient's shipping address** (not yours).
- **Your billing address can stay** — only the shipping address needs to change.
- **The order confirmation and receipt go to your email**, not the recipient's. They get a product, you get the paperwork.

Today's gift limits:

- **No standalone gift wrap option** at checkout — the package is the standard fulfillment packaging.
- **No standalone "gift message" field** that prints onto a card — not a default feature today.
- **No "hide pricing" toggle** — the receipt doesn't ship with the package; it's emailed to you. So the recipient doesn't see pricing in the box.

If gift packaging or a custom note matters for your case, contact support before ordering — sometimes we can arrange something case-by-case.

If you'd rather **send a Custyle gift card** (so the recipient designs and orders themselves), that's a separate path — check whether gift cards are available today (verify in account).

## When to defer

- "Set up gift wrapping for this order" → human teammate; case-by-case.
- "Where do I buy a gift card?" → verify availability; if yes, surface link; if no, soft "not today, on roadmap" answer.

## Editorial notes (review before promoting to high)

- "**No standalone gift wrap / gift message / hide-pricing toggle**" — **assumed at Phase 0**; verify against the actual checkout UI. If any of these exist today, the entry needs to be updated immediately.
- "**Sometimes we can arrange something case-by-case**" — voice-friendly but **verify ops actually has this discretion**. If no, soften to "not supported today."
- "**Gift cards**" — speculative; verify whether Custyle has a gift-card product live or planned.

## Sources

- Inferred from standard custom-merch gift practice
- Verify against checkout UI + ops policy
