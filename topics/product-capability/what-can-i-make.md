---
id: kb.product-capability.what-can-i-make
intent_primary: "What can I make on Custyle?"
intent_aliases:
  - "What can I customize?"
  - "What product types do you support?"
  - "Can I make a hoodie / t-shirt / cap?"
  - "What can I create here?"
  - "What products do you offer?"
category: product-capability
audience: customer
language: en
confidence: medium
related:
  - kb.product-capability.product-categories
  - kb.product-capability.limitations
  - kb.ai-design-workflow.how-it-works
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
source_of_truth:
  - "../../../custyle-brand/product/definition.md"
  - "~/Desktop/Custyle/seo-articles/ai-custom-merchandise-market-2026.md"
  - "~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# What can I make on Custyle?

## Quick answer

Thirteen product categories today, across three groups — Wear (T-shirts, hoodies, sweatshirts, kids' clothing, underwear), Carry (tote bags, canvas bags, phone cases, stickers), and Display (mugs, mouse pads, notebooks, calendars). Each design is matched to the right manufacturing technique — DTG, embroidery, sublimation, whatever fits — so what you create is built for you, not "printed onto" something off a shelf.

## Details

The current catalog:

| Group | Categories |
|---|---|
| **Wear** | T-shirts, hoodies, sweatshirts, kids' clothing, underwear |
| **Carry** | Tote bags, canvas bags, phone cases, stickers |
| **Display** | Mugs, mouse pads, notebooks, calendars |

More categories are added over time as the manufacturing network expands.

A few things worth knowing:

- **Each design routes to the technique that fits it.** A textured logo might land as embroidery; a photo-real illustration goes DTG or DTF; an all-over pattern uses sublimation. You don't pick the technique — the Crew matches it to your design and the product.
- **One piece is enough.** No minimums, ever. A single custom hoodie is fine.
- **Designs are made for merch, not just for screens.** The Crew designs with placement, scale, fabric, and technique in mind from the start — not as an afterthought.

What you can't make is covered in [Limitations](limitations.md) — short version: no copyrighted IP you don't own, no hate / illegal / explicit content, and a few categories that are roadmap rather than today.

## When to defer

- "What size / material / care for [a specific product]?" → [`product-info/*`](../product-info/).
- "Will you add [a new product category]?" → no future commitment policy; human teammate.
- "Can I make [specific copyrighted character]?" → [`policies/ip-and-copyright`](../policies/ip-and-copyright.md).

## Editorial notes (review before promoting to high)

- The 13-category enumeration is **direct lift** from ks-faq Q4. Three-group framing (Wear / Carry / Display) also from ks-faq Q4. High confidence.
- "Each design is matched to the right manufacturing technique" — Product Engine concept from `custyle-brand/product/definition.md` and architecture.md. Direct lift.
- The technique list (DTG / embroidery / sublimation / DTF) is **standard custom-merch terminology**, but verify which are actually integrated today vs. roadmap. The Bolt agent's selection logic in `back/` is the ground truth.
- "Built for you, not 'printed onto' something off a shelf" — direct lift from ks-faq Q2 + positioning.md guardrail #6.
- "Designs are made for merch, not just for screens" — direct from positioning.md / messaging.md value pillars.
- The technique-routing examples (textured logo → embroidery, photo-real → DTG, all-over → sublimation) — these match the industry conventions but should be cross-checked against Custyle's actual Bolt routing rules. If our supplier integration today only supports DTG (likely the case at Phase 1 with Printful), the embroidery / sublimation references should be qualified as "as the manufacturing network expands" rather than presented as current.
- "More categories are added over time" — vague forward-looking, but safe (no specific commitment).

## Sources

- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — Q2 (POD differentiation), Q4 (13 categories)
- `custyle-brand/product/definition.md` — Product Engine + category overview
- `custyle-brand/product/architecture.md` — manufacturing routing logic
- `custyle-brand/identity/positioning.md` — guardrails (esp. #6 — "custom" is intent-driven, not printed-onto)
