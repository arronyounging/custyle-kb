---
id: kb.shipping.address-change
intent_primary: "Can I change my shipping address?"
intent_aliases:
  - "I entered the wrong address"
  - "How do I update where my order ships?"
  - "Address typo on my order"
  - "Can I redirect a package?"
category: shipping
audience: customer
language: en
confidence: medium
related:
  - kb.ordering.modify-cancel
  - kb.shipping.lost-package
  - kb.shipping.delivery-failure
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user wants to change address on a specific order"
      handoff: transact.update_order_address
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Changing shipping address

## Quick answer

Caught it before production or shipment? Update it from Account → Orders, or ask me and I'll route the change. Once the package is in transit, address changes have to go through the carrier (we can sometimes file a redirect request, but it's not guaranteed). Already delivered to the wrong address — see [Lost package](lost-package.md).

## Details

Three windows, three paths:

| Order state | What you can do |
|---|---|
| Pre-production (just paid) | Change directly from Account → Orders, or via support. |
| In production | Address changes are still possible up until the package is handed to the carrier — but get them in fast. |
| Shipped (in transit) | We can file a carrier redirect request when supported. Not all carriers / routes support this. May add transit time. |
| Delivered to wrong address | Treat as lost package — see [Lost package](lost-package.md). |

Common gotchas:

- **Typos.** A single-character typo (street number, postal code) can route the package to the wrong place. Double-check before you hit pay.
- **Apartment / suite numbers.** Missing unit numbers often cause carrier returns. Always include them.
- **Country-specific formats.** UK postcodes, Canadian postal codes, etc. — checkout should validate, but typos slip through.

## When to defer

- "Change address on order #X" → handoff `transact.update_order_address`.
- "Carrier redirect for in-transit order" → human teammate (carrier-side coordination).
- "Order shipped to wrong address" → [Lost package](lost-package.md).

## Editorial notes (review before promoting to high)

- The four-state table (pre-production / in production / shipped / delivered) needs to align with the actual cancellation window in `modify-cancel.md`. If the in-production address-change window is the same as the cancel window, say so explicitly.
- "**Carrier redirect when supported**" — varies hugely by carrier (USPS Package Intercept is real but limited; DHL has stricter rules). Verify support team can actually file these and which routes support it.
- "**Carrier redirect adds transit time**" — true, varies. Voice-soft, accurate.
- "**Apt/suite missing causes returns**" — common reality; verify support actually sees this in defect/return stats.
- No explicit window duration quoted (kept policy-level intentionally).

## Sources

- Inferred from standard custom-merch fulfillment + carrier behavior
- Verify against `back/src/transact/**` address-mutation logic + ops policy
