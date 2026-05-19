---
id: kb.product-capability.customization-scope
intent_primary: "What can I customize on a product?"
intent_aliases:
  - "Can I change the color of a product?"
  - "Can I customize the inside / lining / material?"
  - "How much of a product can I change?"
  - "Custom material / fabric?"
category: product-capability
audience: customer
language: en
confidence: medium
related:
  - kb.product-capability.what-can-i-make
  - kb.product-capability.limitations
  - kb.product-info.material-and-fabric
  - kb.ai-design-workflow.print-technique-recommendation
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
source_of_truth:
  - "../../../custyle-brand/product/architecture.md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# What can I customize on a product?

## Quick answer

What's customizable: the design itself (the artwork, image, or text), where it's placed, the size of the print, and the base product / color you put it on. What's not (yet): the cut of the garment, the fabric weight, the lining or trim, the construction details. We're a "designs on real products," not a from-scratch tailor.

## Details

What you control:

- **The artwork.** What the design is. The Crew creates it from your description or your upload.
- **Placement.** Chest, sleeve, back, all-over, hem — Grid (the layout agent) picks a default; you can shift it.
- **Scale.** How big the print sits. Influences how the design lands on a body.
- **Base product + color.** Pick the t-shirt, the hoodie, the cap; pick from the color options the product offers.
- **Size / quantity.** Standard.

What you don't (yet) control:

- **Garment construction.** Sleeve length, hem shape, body length — those are fixed per product type.
- **Fabric composition / weight.** Each product has a defined material; you can't swap fabrics within a product.
- **Lining, trim, hardware.** Standard for the product.
- **Adding a new product type** ("can I have it as a poncho?") — only existing catalog options.

The customization that *does* exist is broader than typical POD:

- Beyond just "paste your image" — the Crew also picks the manufacturing technique (DTG / DTF / embroidery / sublimation) based on what'll look best for your design. See [Print technique recommendation](../ai-design-workflow/print-technique-recommendation.md).
- Some product variants offer color options that aren't standard POD (e.g., dyed-to-order base colors on select products).

If you need full made-to-measure (a t-shirt cut to your exact body measurements, a fabric we don't stock), that's a different service category — not what Custyle does today.

## When to defer

- "Can I make this in [specific not-supported material]?" → not today; cross-link [Limitations](limitations.md).
- "Can you sew a custom pattern from my measurements?" → out of scope; human teammate if user wants to discuss.

## Editorial notes (review before promoting to high)

- "**Custyle is not a from-scratch tailor**" — important positioning to set, voice-honest. Aligns with brand positioning ("not luxury bespoke").
- The "what you control / what you don't" split — **my framing**, **verify against actual product configuration UI**. Some platforms allow placement/scale adjustment via UI; some don't surface it as user-controllable. Confirm.
- "**Dyed-to-order base colors on select products**" — speculative, may overpromise. Verify whether this actually exists in the current catalog.
- "**The Crew picks the manufacturing technique**" — direct from `custyle-brand/product/architecture.md` Product Engine framing.

## Sources

- `custyle-brand/product/architecture.md` — Product Engine / Manufacturing Intelligence
- Cross-references to what-can-i-make / limitations / print-technique-recommendation
