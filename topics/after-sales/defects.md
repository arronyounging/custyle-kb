---
id: kb.after-sales.defects
intent_primary: "My product arrived damaged or defective"
intent_aliases:
  - "Item is broken"
  - "Print quality is bad"
  - "Wrong size / wrong color shipped"
  - "The print is faded / cracked / off-center"
  - "Item arrived broken"
category: after-sales
audience: customer
language: en
confidence: medium
related:
  - kb.after-sales.returns
  - kb.after-sales.refunds
  - kb.after-sales.product-not-as-expected
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "any specific defect report on a real order"
      handoff: converse.handoff_human
source_of_truth:
  - "~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Damaged or defective product

## Quick answer

That shouldn't happen — and when it does, we replace it at no cost. Tell support what's wrong, send a clear photo, and we'll process a free replacement (or refund if you'd rather). Defects are on us. The faster the photo + order ID arrive, the faster we resolve.

## Details

What counts as a defect we replace:

| Category | Example | What support needs |
|---|---|---|
| **Damaged in transit** | Torn package, broken zipper, ripped print | Photo of the damage + shipping label |
| **Print defect** | Faded, cracked, off-center, wrong colors out of normal tolerance | Photo of the print, ideally next to the preview |
| **Wrong item shipped** | Got a hoodie instead of the tee you ordered | Photo + order ID |
| **Manufacturing defect** | Loose stitching, holes, malformed garment | Photo |
| **Wrong size shipped** (versus what was ordered) | Order says M, package contains L | Photo of the size label + your order details |

What's NOT a defect (different paths):

- **Preview color doesn't exactly match physical** — print color always varies slightly from screen. See [Product not as expected](product-not-as-expected.md).
- **Sized down/up from your preference** — sizing is per-product; see [Size chart](../product-info/size-chart.md). Wrong-size-ordered (by buyer) is not a defect.
- **You don't like the design** — not a defect. See [Returns](returns.md) — iteration is unlimited *before* ordering.

How fast to file:

- File as soon as you spot the issue. The longer it sits, the harder for the carrier or supplier to verify damage was in transit vs. after delivery.
- Most defect cases resolve within a few business days from filing.

## When to defer

- Any defect report on a specific order → human teammate. They'll file the case with the supplier and resolve directly.
- "Will I get a replacement or a refund?" → that's a per-case decision; support will discuss.

## Editorial notes (review before promoting to high)

- "**Replace at no cost**" — direct from ks-faq Q "What if I'm not satisfied with my merch?".
- The 5-category defect matrix is **synthesis of standard custom-merch defect types** + the requirement for photo evidence (universal industry standard). Verify the actual support intake process matches.
- "**Most resolve within a few business days**" — speculative; **verify the actual SLA** with ops.
- "**Wrong size shipped (defect) vs wrong size ordered (buyer choice)**" — important distinction, my framing, **verify against actual policy**. Some platforms allow size-exchange even when buyer's mistake.
- The "**how fast to file**" framing — voice-honest, accurate to defect-claim reality, voice-aligned.

## Sources

- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — "What if I'm not satisfied with my merch?"
- Standard custom-merch defect-claim practice
- Verify against ops support workflow
