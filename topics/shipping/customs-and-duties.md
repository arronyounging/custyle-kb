---
id: kb.shipping.customs-and-duties
intent_primary: "Will I be charged customs or duties?"
intent_aliases:
  - "Are there import fees?"
  - "Do I pay extra at the border?"
  - "Is customs included in the price?"
  - "What's the DDU / DDP setup?"
category: shipping
audience: customer
language: en
confidence: medium
related:
  - kb.shipping.regions-and-rates
  - kb.ordering.taxes-and-fees
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Customs and duties

## Quick answer

Maybe — depends on where you're shipping and what's already covered at checkout. International orders may incur customs duties or import VAT in the destination country, charged by the destination's customs authority, not by us. Some routes are DDU (you pay at delivery), some are DDP (everything's bundled at checkout). The cart will tell you which applies for your destination.

## Details

How customs works in this model:

- **Production happens in regional facilities.** Most orders ship domestically once produced — no border crossing, no customs.
- **When a package does cross a border**, the destination country may charge import duties, VAT, or both, depending on the country's rules and the order value.
- **DDU (Delivered Duty Unpaid).** The carrier (or sometimes the destination's customs) collects duty at delivery — you'll be contacted to pay before the package is released. We don't see or set that amount.
- **DDP (Delivered Duty Paid).** Duty is calculated and bundled at checkout. You pay nothing extra at delivery. Common for routes where we have IOSS or similar programs.

Why we can't quote a specific duty amount:

- **Set by the destination's customs authority**, not by us.
- **Depends on the product category's tariff code**, the order value, sometimes the materials.
- **Changes with policy.** What was duty-free yesterday may not be today (US de minimis rules, post-Brexit UK changes, etc.).

If duties feel surprising at delivery, contact the destination customs authority — they can explain the calculation. We can't override or refund duty charges.

## When to defer

- "How much will customs charge me?" → can't predict from our end; depends on destination country. Human teammate if the user insists.
- "Why was I charged at the border?" → destination customs question; we can confirm whether the order was DDU or DDP.
- "Can you mark the package as a gift to avoid customs?" → no. We declare the actual contents at the actual value (legal requirement).

## Editorial notes (review before promoting to high)

- "**DDU / DDP varies by route**" — likely true but **need to verify which Custyle routes are which.** This is critical accuracy. If, say, all EU orders are DDP via IOSS and all US-to-rest-of-world are DDU, that should be stated specifically.
- "**IOSS or similar programs**" — Custyle is likely registered for IOSS for EU; verify.
- "**US de minimis changes**" — referenced in `custyle-brand/market/compliance-risk.md` ("US de minimis eliminated Aug 2025"). Confirm whether this affects current shipping costs.
- "**We can't mark as gift**" — true (legal requirement under most customs regimes); verify support has a script for this request.
- The detailed "why we can't quote" framing is **voice-aligned but unverified** as policy. Verify the customer-service script for customs questions matches.

## Sources

- Inferred from standard international ecommerce customs practice
- `custyle-brand/market/compliance-risk.md` — references US de minimis and EU AI Act timing
- Verify against fulfillment integration + ops policy
