# Ordering — Planned Entries

Placing, modifying, and paying for orders. Process-level — never live commerce data.

| Priority | ID | Status | Owner |
|---|---|---|---|
| P0 | `kb.ordering.place-order` | stub | arronyounging |
| P0 | `kb.ordering.modify-cancel` | stub | arronyounging |
| P0 | `kb.ordering.payment-methods` | stub | arronyounging |
| P0 | `kb.ordering.discounts` | stub | arronyounging |
| P0 | `kb.ordering.taxes-and-fees` | stub | arronyounging |
| P1 | `kb.ordering.checkout-issues` | stub | arronyounging |
| P1 | `kb.ordering.invoice-and-receipt` | stub | arronyounging |
| P1 | `kb.ordering.bulk-orders` | stub | arronyounging |

## Notes for writers

- Source: `custyle-platform/back/src/transact/**`, `custyle-platform/back/src/payments/**`. Verify behavior against code, not assumption.
- Anything that varies per-order or per-user → `defer_to_api` block.
- Cancellation policy is policy (KB); cancelling *this* order is API (`transact.cancel_order` — verify name).
- Coupon mechanics is KB; whether *this* coupon is valid is API.
