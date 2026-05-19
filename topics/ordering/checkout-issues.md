---
id: kb.ordering.checkout-issues
intent_primary: "My checkout isn't working"
intent_aliases:
  - "Payment was declined"
  - "Stuck at checkout"
  - "Card error"
  - "Why won't my order go through?"
  - "Checkout error message"
category: ordering
audience: customer
language: en
confidence: medium
related:
  - kb.ordering.payment-methods
  - kb.ordering.place-order
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user reports a specific checkout failure for their session"
      handoff: transact.get_payment_status
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Checkout issues

## Quick answer

Most checkout problems trace to one of four things: the card got declined by the issuer (most common), an address mismatch with the billing record, a 3D Secure / SCA verification step that needs completing, or a browser-side issue (extensions, ad blockers, cookie restrictions). Tell me what error you saw and I'll point you at the right fix — or check the live state of your last attempt.

## Details

The usual suspects, in order of likelihood:

- **Card declined by your bank.** Issuer-side decision — could be fraud-detection, insufficient funds, foreign-transaction block. Try another card, or contact your bank and retry.
- **Billing address mismatch.** Some issuers require the billing address on the card to match what you enter. If your card is registered to a different address than your shipping address, enter the *billing* address in the card form (you can still ship elsewhere).
- **3D Secure step.** Some banks pop up a verification step (SMS code, app confirmation). If that window doesn't open or closes early, the charge fails. Disable popup blockers and retry.
- **Browser issue.** Ad blockers and tracker-prevention extensions sometimes block payment scripts. Try an incognito window or a different browser.
- **Expired card.** Self-explanatory — replace and retry.

What to do if it persists:

- Try a different card or payment method (Apple Pay / Google Pay bypass some issues since the bank pre-authorizes).
- Take a screenshot of the error if it's not a generic "declined" — support can debug from the error code.
- Ask me — I can pull the live payment-attempt status on your account.

## When to defer

- "What was the actual error on attempt #X?" → handoff `transact.get_payment_status` for the live state.
- Persistent failure on multiple cards → human teammate, may be account-level.
- "I was charged but the order didn't go through" → human teammate, urgent.

## Editorial notes (review before promoting to high)

- The four-cause taxonomy (issuer decline, billing mismatch, 3DS, browser) is **standard Stripe troubleshooting** for any e-commerce checkout. Safe to claim, but verify against any Custyle-specific failure modes (e.g., custom-merch checkout might have additional validation that POD checkouts don't).
- "**Apple Pay / Google Pay bypass some issues**" — true in practice (the wallet pre-authorizes the issuer), but verify the user-facing copy doesn't promise resolution; it's a workaround not a fix.
- "**Take a screenshot of the error**" — voice-friendly + practical, verify support actually uses screenshots in debugging.
- "**I was charged but order didn't go through**" — emergency case. The actual recovery path needs to be defined (is the payment captured but order in limbo? Refunded automatically? Manual?). Critical to verify.

## Sources

- Standard Stripe / e-commerce checkout failure modes
- Verify against `back/src/payments/**` + `back/src/transact/**` failure-mode handling
