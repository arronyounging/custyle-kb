---
id: kb.ordering.invoice-and-receipt
intent_primary: "How do I get a receipt or invoice?"
intent_aliases:
  - "Can I get a tax invoice?"
  - "Where's my order receipt?"
  - "Receipt for accounting?"
  - "VAT invoice?"
category: ordering
audience: customer
language: en
confidence: medium
related:
  - kb.account-and-data.find-my-orders
  - kb.ordering.taxes-and-fees
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user needs a receipt for a specific order"
      handoff: transact.get_invoice
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Receipts and invoices

## Quick answer

Receipt is emailed automatically right after payment, and stays available in Account → Orders → the specific order. For a VAT invoice or business-billing format, ask — we can issue one with your billing details, business name, and tax ID.

## Details

What's standard:

- **Email receipt at order placement.** Sent to the email on your account. Includes order ID, line items, totals, tax breakdown, and shipping address.
- **In-account receipt.** Same content, accessible from Account → Orders → click the order.

For business / tax invoices:

- **VAT invoices** are available on request for orders in jurisdictions that require them. Include your business name, business address, and VAT / tax ID in the request.
- **Receipt re-issue** for a different name / billing detail is generally possible if the order paperwork hasn't been finalized externally. Ask support.

If a receipt didn't arrive:

- Check the spam / promotions folder.
- Confirm the email on the order matches the one you're checking.
- The in-account version is always there as a backup.

## When to defer

- "Issue a VAT invoice with my business details" → human teammate, business-billing flow.
- "Change the billing name on a past order" → human teammate; may or may not be possible depending on what's been filed.

## Editorial notes (review before promoting to high)

- "**Email receipt sent automatically**" — universal e-commerce standard; verify Custyle's actual implementation.
- "**VAT invoice on request**" — **standard for EU sales but verify Custyle has the workflow set up.** If support can't issue VAT-compliant invoices today, this entry over-promises and EU customers will be disappointed.
- "**Account → Orders → click the order**" — assumed UI path; verify.

## Sources

- Inferred from standard e-commerce receipt practice
- Verify against `back/src/transact/**` invoice generation + ops business-billing workflow
