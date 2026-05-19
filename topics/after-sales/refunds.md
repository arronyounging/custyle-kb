---
id: kb.after-sales.refunds
intent_primary: "How do refunds work?"
intent_aliases:
  - "When will I get my refund?"
  - "Can you refund me?"
  - "Refund timeline"
  - "How long does a refund take?"
category: after-sales
audience: customer
language: en
confidence: medium
related:
  - kb.after-sales.returns
  - kb.after-sales.defects
  - kb.ordering.payment-methods
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "specific refund request"
      handoff: converse.handoff_human
    - condition: "refund processing status"
      handoff: transact.get_payment_status
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# How refunds work

## Quick answer

Refunds go back to the original payment method. Once approved, processing is typically a few business days on our side; the time it takes to actually land in your account depends on your bank or card issuer (usually 5–10 business days). For defects, refund vs. replacement is your choice. For order cancellations within the window, refunds are automatic.

## Details

When refunds apply:

- **Defects / damage / wrong item.** Free of charge. You can choose replacement or refund — see [Defects](defects.md).
- **Order cancellation within window.** Pre-production cancellations refund automatically. See [Modify / cancel](../ordering/modify-cancel.md).
- **Lost packages.** After a carrier claim, refund (or replacement) per support's decision. See [Lost package](../shipping/lost-package.md).
- **Goodwill / case-by-case.** Sometimes support approves a refund outside the standard window if the situation warrants. Not guaranteed.

When refunds don't apply:

- **Buyer's remorse on custom merch** — see [Returns](returns.md). Custom items are non-returnable for "I changed my mind."
- **In-production / shipped** — past the cancellation window; not eligible unless it becomes a defect case.

Timeline, two parts:

- **Our side** — typically a few business days from approval to initiating the refund through Stripe.
- **Your bank's side** — 5–10 business days for the funds to appear, depending on the issuer. International or non-US cards may take longer.

You'll get an email when we initiate the refund. The line item in your statement may show as "CUSTYLE" or "STRIPE" depending on the card / issuer.

## When to defer

- "Where's my refund?" → handoff `transact.get_payment_status` for the live state; or human teammate if it's been more than 10 business days.
- "I want a partial refund for X reason" → human teammate, case-by-case.
- "Refund to a different card than I paid with" → not standard; human teammate to discuss.

## Editorial notes (review before promoting to high)

- "**Refund to original payment method**" — universal Stripe standard, safe to claim.
- "**Few business days on our side**" — **verify the actual SLA** with ops; could be hours, could be days.
- "**5-10 business days to land**" — typical Stripe → issuer settlement window. Could be faster (instant for some Apple Pay / Google Pay) or slower (some international cards). Verify.
- "**Goodwill refunds outside standard window**" — voice-honest acknowledgment that support has discretion. Verify ops actually has this discretion and how it's exercised.
- "**Buyer's remorse on custom merch isn't refunded**" — flagged earlier in `returns.md` editorial notes as needing actual ToS verification.
- The "**our side / your bank's side**" two-part timeline framing is helpful and accurate. Lock.

## Sources

- Standard Stripe refund mechanics
- Cross-links to `returns.md` and `defects.md`
- Verify against `back/src/payments/**` refund implementation + ops SLA
