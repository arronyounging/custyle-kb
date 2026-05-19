---
id: kb.product-info.color-accuracy
intent_primary: "Will the printed color match what I see on screen?"
intent_aliases:
  - "Why does the print look different from the preview?"
  - "Color difference between preview and reality"
  - "Are the colors accurate?"
  - "Why is my red more orange in real life?"
category: product-info
audience: customer
language: en
confidence: medium
related:
  - kb.after-sales.product-not-as-expected
  - kb.product-info.print-techniques-overview
  - kb.product-info.material-and-fabric
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
source_of_truth:
  - "~/Desktop/Custyle/商品/颜色名称和色值列表.markdown"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Color accuracy

## Quick answer

Close to the preview, but small variance is normal. Screens are RGB and ink-on-fabric is CMYK, so a few colors that look perfect on your phone can't be exactly reproduced in print — we get the closest match. The biggest gaps usually show up in saturated neons and very dark blacks. If the variance feels big (not just a shade off), see [Product not as expected](../after-sales/product-not-as-expected.md).

## Details

What affects how the print actually looks vs. the preview:

- **RGB vs CMYK gamut.** Screens can show colors that physically can't be reproduced with print inks. Saturated neons (electric pinks, sharp greens), pure cyan, and pure violet are the most affected. The Crew picks the closest in-gamut color, but it's not a 1:1 match.
- **Monitor calibration.** Your screen isn't calibrated; mine isn't either. Two screens side by side can show different colors of the same preview.
- **Fabric absorption.** Cotton soaks up ink slightly differently than poly. Saturated colors look a touch more muted on natural cotton vs. a coated fabric.
- **Light at delivery.** Daylight vs. warm indoor lighting changes how the color reads when you first see the package.

What this looks like in practice:

| Color zone | What to expect |
|---|---|
| **Standard tones** (earth tones, mid-grays, mid-saturation primaries) | Very close to preview |
| **Bright primaries** (true red, true blue, true yellow) | Close, slight saturation shift |
| **Neons / fluorescents** | Most variance — the printed version will look more "real-world" than the screen glow |
| **Pure black** | Print as deep as ink chemistry allows — slight charcoal tone in some cases |
| **Pure white** (on light fabric) | Comes from the fabric showing through, so depends on fabric base color |

What we do to keep variance small:

- The Crew uses production-aware color profiles, not generic screen colors.
- Bolt (the production-decision agent) picks techniques and materials that suit the color palette your design uses.
- Final files include color-management metadata for the printer.

If your specific case feels wrong — colors way off, not just a shade — that's a defect, not tolerance. See [Product not as expected](../after-sales/product-not-as-expected.md).

## When to defer

- "Will my [specific neon shade] print true?" → likely not exactly; the Crew will pick the closest in-gamut. If exact color is critical (brand merch, exact Pantone match), human teammate.
- "Pantone match — can you do it?" → not standard; depends on technique. Human teammate.

## Editorial notes (review before promoting to high)

- "**RGB / CMYK gamut**" framing — universally true; safe and useful for customer-facing copy.
- The color-zone table is **industry-standard print expectation**, not specifically from a Custyle source. Verify against the actual print quality on common colors — if Custyle has tighter or looser tolerance than industry average, update.
- "**Production-aware color profiles**" / "**color-management metadata**" — implied by Custyle's "Product Engine" + "designs made for merch" positioning. **Verify against the actual color-management pipeline** in `back/`. If the Crew currently just generates RGB images without explicit color management, this entry overstates capability.
- "**Bolt picks techniques + materials that suit the palette**" — direct from `voice/crew.md` Bolt role; verify whether Bolt's logic actually considers color palette for material selection.
- The "**neons most affected**" framing is correct industry knowledge; verify it matches what users actually see.

## Sources

- `~/Desktop/Custyle/商品/颜色名称和色值列表.markdown` — 100+ official color names + hex
- Industry-standard RGB/CMYK gamut analysis
- Verify against `back/src/agent-orchestrator/domains/role/bolt-role.module.ts` (Bolt color/material decision logic)
