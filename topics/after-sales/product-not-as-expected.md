---
id: kb.after-sales.product-not-as-expected
intent_primary: "The product doesn't look like what I designed"
intent_aliases:
  - "Print doesn't match the preview"
  - "Colors are off"
  - "It's not exactly what I expected"
  - "The print looks duller than my preview"
  - "Why is the design smaller than I thought?"
category: after-sales
audience: customer
language: en
confidence: medium
related:
  - kb.after-sales.defects
  - kb.product-info.color-accuracy
  - kb.product-info.print-techniques-overview
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "specific case with photos"
      handoff: converse.handoff_human
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# When the product doesn't match expectations

## Quick answer

Two possibilities. Some preview-vs-print variance is normal — monitor color isn't the same as fabric color, and how a print sits on physical material is always a little different. But if the gap is big — colors way off, scale wrong, alignment broken — that's a defect and we replace it. Send a photo and we'll tell you which case it is.

## Details

Why physical prints differ from screen previews:

- **Monitor color is RGB, fabric is CMYK + ink.** RGB has a wider color gamut. Some screen colors literally can't be reproduced on fabric — they get the closest match.
- **Fabric absorbs ink.** Saturated colors on a soft cotton tend to look slightly muted compared to a bright preview.
- **Lighting.** The preview is rendered in even light; your living room isn't.
- **Scale.** Previews are zoomed for visibility. The actual print at full size on a body looks different from a square crop on a screen.

What's within tolerance vs. what's a defect:

| Within tolerance | Defect (we replace) |
|---|---|
| Color is similar but slightly muted | Color is dramatically different (orange → red, etc.) |
| Scale feels different from preview | Placement is broken (centered design printed off-center) |
| Slight blurring on small text or fine lines | Print is faded, cracked, smearing, or has missed sections |
| Slight cropping at fabric edges | The wrong design entirely was printed |

If you're not sure which side of the line you're on, send a photo — we'll look at it next to the preview and give you a straight answer.

## When to defer

- "Is this a defect or tolerance?" → send a photo, human teammate decides.
- "I want a refund because the preview was misleading" → if it's tolerance, no; if it's defect, yes. See above.

## Editorial notes (review before promoting to high)

- "**RGB vs CMYK gamut**" — universally true; safe to reference in customer-facing copy. The framing helps customers understand without being lecture-y.
- The "**tolerance vs defect**" table — my synthesis, **not from a Custyle source**. Verify against actual quality-control criteria. The boundary between "slight variance" and "defect" needs to be a documented spec.
- "**Send a photo, we'll tell you which case**" — voice-aligned and customer-friendly. Verify support can actually make the judgment call quickly.
- The framing avoids being defensive — voice rule from brand. The "we'll tell you which case it is" line keeps responsibility on us, not on the customer to self-diagnose.

## Sources

- Standard custom-merch print-quality reality
- Verify against `custyle-platform/back/` quality-scoring system (ks-faq mentions "Quality scoring system: 6-dimension AI analysis")
