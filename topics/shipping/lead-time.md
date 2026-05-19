---
id: kb.shipping.lead-time
intent_primary: "How long does delivery take?"
intent_aliases:
  - "How long until I get my order?"
  - "What's the production time?"
  - "How fast is shipping?"
category: shipping
audience: customer
language: en
confidence: medium
related:
  - kb.shipping.regions-and-rates
  - kb.shipping.tracking
  - kb.shipping.customs-and-duties
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "ETA for a specific order"
      handoff: transact.get_order
    - condition: "expected timeline for a product not yet in cart"
      handoff: shop.estimate_lead_time
source_of_truth:
  - "~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md"
  - "~/Desktop/Custyle/商品/[fulfillment-partner-docs]"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# How long does delivery take?

## Quick answer

Custom merch is made just for you, so total time is **production + shipping**. Typical production runs 3–7 business days. Transit on top of that: 3–5 days within the US, 5–10 days across Europe, 7–15 days rest of world. For your actual order's ETA, check Account → Orders, or ask me to pull the live status.

## Details

Two phases run back to back once you place an order:

| Phase | Typical time | What's happening |
|---|---|---|
| Production | 3–7 business days | The Crew finalizes the artwork; the right manufacturing technique runs (DTG / DTF / embroidery / etc.); QC. |
| Transit | Varies by region | Carrier delivery — see ranges in Quick answer above. |

A few things that shift the timing:
- **Technique**: DTG and DTF print fast; embroidery and all-over print take longer.
- **Region**: domestic routes are quicker than cross-border; remote destinations and small islands stretch transit.
- **Customs**: international packages sometimes hold for inspection — outside our control. See [Customs & duties](customs-and-duties.md).
- **Holiday peaks**: late November through December may add a few days end to end.

Business days exclude weekends and public holidays in the production region.

## When to defer

- "When exactly will **my** order #X arrive?" → handoff `transact.get_order` for live tracking and current ETA.
- "How long for a Y product if I order today?" → handoff `shop.estimate_lead_time` for a destination-aware estimate.
- Custom rush requests → human teammate.

## Editorial notes (review before promoting to high)

- The headline numbers (3–7 production / 3–5 US / 5–10 EU / 7–15 ROW) are lifted **verbatim** from ks-faq.md. But that section describes the current fulfillment partner's on-demand printing windows specifically. **Custyle's positioning is broader** — the Product Engine also routes to embroidery, sublimation, all-over print, etc., and those techniques almost certainly have different production windows. Either: (a) re-quote ranges that span all techniques, or (b) split the table by technique class. Verify with ops before promoting.
- "DTG and DTF print fast; embroidery and all-over print take longer" — general industry knowledge, not Custyle-attested. Confirm.
- "Late November through December may add a few days" — standard POD seasonal pattern, not in any Custyle source. Confirm.
- "Business days exclude weekends and public holidays in the production region" — implicit standard, not in source. Confirm whether the production region's holidays or the buyer's region's holidays apply.

## Sources

- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — "How long does shipping take?" section (2026-05)
- `~/Desktop/Custyle/商品/[fulfillment-partner-docs]` — current fulfillment partner lead-time spec
