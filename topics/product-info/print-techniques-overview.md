---
id: kb.product-info.print-techniques-overview
intent_primary: "What printing techniques do you use?"
intent_aliases:
  - "Is it screen printed or DTG?"
  - "What's the difference between DTG and DTF?"
  - "Is the print embroidered or stitched?"
  - "What's sublimation?"
category: product-info
audience: customer
language: en
confidence: medium
related:
  - kb.product-info.color-accuracy
  - kb.product-info.care-instructions
  - kb.product-info.durability-and-wash-life
  - kb.ai-design-workflow.print-technique-recommendation
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
source_of_truth:
  - "../../../custyle-brand/product/definition.md"
  - "~/Desktop/Custyle/商品/供应链/一对半面料选型分析.md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Print techniques — overview

## Quick answer

The Crew picks the technique that fits your design and product best. The main ones: **DTG** for rich color on cotton tees, **DTF** for vivid color across more materials, **screen print** for bold/durable runs, **embroidery** for premium texture, **sublimation** for all-over patterns on poly. You don't pick — the Crew matches it. If you want a specific technique, you can ask.

## Details

What each one is good at:

| Technique | Best for | Trade-offs |
|---|---|---|
| **DTG** (direct-to-garment) | Photo-real artwork, gradients, fine detail on cotton tees. Rich color, soft hand (the ink becomes part of the fabric). | Cotton or cotton-rich blends only. Slightly muted on dark fabrics. |
| **DTF** (direct-to-film) | Bright, saturated artwork on more material types (cotton, poly, blends). | The print sits *on* the fabric (slight raised feel). Crisper than DTG but a bit stiffer to touch. |
| **Screen print** | Bold, graphic-heavy designs, long-run consistency, durable. | Limited color count (each color = one screen). Best for simpler designs. |
| **Embroidery** | Logos, small designs, premium texture. Survives washing best of all techniques. | Detail limit — small text and gradients don't translate. Texture, not photo. |
| **Sublimation** | All-over patterns, vivid color across the whole piece. | Polyester or poly-blend only (won't bond to cotton). Limited to light base fabrics. |

How the Crew chooses:

- **Bolt** (the production-decision agent) reads your design + the product you picked + the available techniques and picks the best match.
- It's not random or generic. A photo-real cat on a cotton tee → DTG. The same cat all-over on a poly bag → sublimation. A bold logo on a hat → embroidery.
- The technique appears in your order details if you want to see it.

What you can't have:

- **Embroidery on photo art.** The technique can't reproduce fine detail. The Crew won't pick it.
- **Sublimation on cotton.** Physics — the dye won't bond. The Crew won't pick it.

If you want a specific technique that's compatible with your design, you can ask — see [Why the AI picks a printing technique](../ai-design-workflow/print-technique-recommendation.md).

## When to defer

- "Can my [design] be done as [technique]?" → check compatibility; the Crew's recommendation usually answers this. Human teammate for edge cases.
- "What's the longest-lasting technique?" → embroidery, generally. See [Durability & wash life](durability-and-wash-life.md).

## Editorial notes (review before promoting to high)

- The five-technique list is **direct alignment with `一对半面料选型分析.md`** (DTG, DTF, screen, sublimation explicit) plus embroidery (industry-standard, mentioned in `custyle-brand/product/definition.md`).
- The "best for / trade-offs" descriptions match standard industry knowledge of these techniques.
- **"Each technique is integrated into Custyle's production today"** is an assumption. **Verify which are actually live vs. roadmap.** At Phase 1 (Printful POD), the live set may be narrower (DTG, possibly DTF). Embroidery and sublimation may not be available yet on Custyle's catalog even though the Crew is aware of them.
- "**Bolt picks the technique**" — direct from `voice/crew.md`.
- The example mappings ("photo-real cat → DTG, all-over bag → sublimation, logo on hat → embroidery") are illustrative; verify they match Custyle's actual routing rules.

## Sources

- `~/Desktop/Custyle/商品/供应链/一对半面料选型分析.md` — material × technique matrix
- `custyle-brand/product/definition.md` — Product Engine + technique scope
- `custyle-brand/voice/crew.md` — Bolt role
- Verify against actual production integration
