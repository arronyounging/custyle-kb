---
id: kb.product-info.fit-and-cut
intent_primary: "What's the fit like?"
intent_aliases:
  - "Is the t-shirt slim or boxy?"
  - "Does the hoodie run oversized?"
  - "Unisex or fitted?"
  - "How does the cut look on a body?"
category: product-info
audience: customer
language: en
confidence: medium
related:
  - kb.product-info.size-chart
  - kb.product-info.material-and-fabric
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "fit details for a specific product"
      handoff: shop.get_product_specs
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Fit & cut

## Quick answer

Different products in the catalog come in different cuts — relaxed, regular, fitted, oversized. Each product page declares its fit. For streetwear silhouettes (a big design over the chest, drop shoulder), our oversized cut usually lands best. For a closer-to-body feel, the fitted or regular cuts work. When in doubt, the try-on preview from Moxy shows how it sits on a body.

## Details

The cuts you'll see across the catalog:

- **Classic / regular.** Standard fit. Neither tight nor loose. The default for most customers.
- **Fitted.** Cut closer to the body. Cleaner silhouette, less room.
- **Relaxed.** A bit looser through the body and shoulders. Comfortable, casual.
- **Oversized.** Drop shoulder, longer body, looser sleeves. Streetwear default. Designs sit larger on the chest.

What this changes:

- **How the design lands.** A large graphic on an oversized cut looks intentional and high-fashion; the same graphic on a fitted cut may feel cramped.
- **How forgiving the size choice is.** Oversized cuts are forgiving — between-sizes? Pick either. Fitted cuts are stricter.

Moxy's try-on preview reflects the actual cut — what you see is reasonably close to what shows up on a body. For an exact body comparison, measure a piece you own and match against the chart — see [Size chart](size-chart.md).

Some products are intentionally **unisex** (most tees, hoodies) — they work across body types in their respective cuts. Other products may have separate men's / women's / kids' cuts; the product page indicates which.

## When to defer

- "Fit on a [specific product]" → product page or handoff `shop.get_product_specs`.
- "Does this product come in a different cut?" → only if the catalog lists multiple cuts for it.
- "My body type is X — what cut?" → not customer-service business; recommend trying the try-on preview, or human teammate.

## Editorial notes (review before promoting to high)

- The four cuts (classic / fitted / relaxed / oversized) — **standard apparel taxonomy**, not from a Custyle source. Verify the catalog actually offers products in this range. If Custyle only has "regular" today (early-stage catalog), this entry overstates options.
- "**Drop-shoulder, longer body**" oversized description — accurate to streetwear. Verify the actual oversized cuts in the catalog match this descriptor.
- "**Moxy's try-on preview reflects the actual cut**" — implicit in `voice/crew.md` Moxy role; **verify the try-on is accurate enough to be trusted for cut decisions**, not just style preview.
- "**Unisex / separate men's-women's-kids'**" — ks-faq lists "Kids Clothing" as a category but doesn't say if men's/women's are separate. Verify.

## Sources

- Standard apparel-cut taxonomy
- `custyle-brand/voice/crew.md` — Moxy try-on role
- Verify against actual product-page cut declarations
