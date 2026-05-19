# Shipping — Planned Entries

Where Custyle ships, how long it takes, what to expect. Policy + process, never live ETAs.

| Priority | ID | Status | Owner |
|---|---|---|---|
| P0 | `kb.shipping.regions-and-rates` | stub | arronyounging |
| P0 | `kb.shipping.lead-time` | stub | arronyounging |
| P0 | `kb.shipping.tracking` | stub | arronyounging |
| P0 | `kb.shipping.customs-and-duties` | stub | arronyounging |
| P0 | `kb.shipping.address-change` | stub | arronyounging |
| P0 | `kb.shipping.shipping-methods` | stub | arronyounging |
| P1 | `kb.shipping.lost-package` | stub | arronyounging |
| P1 | `kb.shipping.delivery-failure` | stub | arronyounging |

## Notes for writers

- Source: `custyle-platform/back/src/fulfillment/**` + Printful integration docs in `custyle-platform/docs/integrations/`.
- Lead time = production + transit. Treat as **typical ranges**, never a guarantee for a specific order.
- Customs/duties: state the buyer is responsible (DDU), but never quote a specific duty rate.
- All "when will mine arrive" questions → `transact.get_order`.
