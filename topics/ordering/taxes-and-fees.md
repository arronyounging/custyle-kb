---
id: kb.ordering.taxes-and-fees
intent_primary: "Are taxes included in the price?"
intent_aliases:
  - "Do I pay VAT?"
  - "Are there hidden fees?"
  - "Why is my total higher than the listed price?"
  - "Sales tax?"
category: ordering
audience: customer
language: en
confidence: medium
related:
  - kb.shipping.customs-and-duties
  - kb.ordering.place-order
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Taxes and fees

## Quick answer

Tax depends on where you're shipping. Listed product prices typically don't include sales tax / VAT — checkout calculates and adds the applicable tax based on your delivery address. International orders may also incur customs / duties on top of that, charged by the destination country, not by us. Your full total — product + shipping + tax — shows at checkout before you pay.

## Details

What gets charged, and where:

| Line | Where it's set | Visible |
|---|---|---|
| Product price | Custyle | Product page |
| Shipping | Custyle / region | Cart + checkout |
| Sales tax / VAT | Destination jurisdiction | Checkout |
| Customs / import duties | Destination country | At delivery, by carrier (typically) |
| Card processing | Included in price (Stripe absorbs) | Not a separate line |

A few things worth knowing:

- **US sales tax.** Applies in states where we have tax nexus. Checkout figures the rate based on your shipping address.
- **EU VAT.** Charged at checkout for orders to EU member states (per OSS / IOSS rules where applicable). Listed prices may not include VAT; verify at checkout.
- **Customs / duties on international.** Charged by the destination country's customs authority, not by Custyle. Some routes are DDU (you pay at delivery), some are DDP (included). Checkout will indicate which applies for your destination — see [Customs & duties](../shipping/customs-and-duties.md).

No hidden fees beyond what's on the checkout total. The total you see is the total you pay (excluding any destination-country customs in DDU routes, which are settled at delivery).

## When to defer

- "What's the exact tax on my order?" → add to cart with the destination address; checkout will show.
- "How much will customs charge me at delivery?" → not predictable from our end; depends on the destination country's authority. Human teammate if pressed.

## Editorial notes (review before promoting to high)

- "**Tax depends on shipping address**" — universal e-commerce reality, safe to claim.
- "**US sales tax applies in nexus states**" — verify which states have nexus from a finance/legal perspective.
- "**EU VAT at checkout via OSS/IOSS**" — assumed if Custyle sells into EU; verify the actual implementation. If we're operating under IOSS, listed prices to EU customers should include VAT.
- "**Customs is destination-country, not us**" — standard for international shipping, but verify whether any of our routes are DDP (we collect duties in advance) vs DDU.
- "**No hidden fees**" — voice-strong but **verify against checkout calculation logic**. Common hidden fees to watch: order minimums, payment-method surcharges, rush-production fees. Currently none mentioned in source, but verify.
- The example fee table is structural; specifics (DDU/DDP per route) need ops verification.

## Sources

- Inferred from standard custom-merch tax practice + cross-references
- Verify against `back/src/transact/**` + `back/src/payments/**` tax calculation logic
