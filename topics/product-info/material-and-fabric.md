---
id: kb.product-info.material-and-fabric
intent_primary: "What's the fabric made of?"
intent_aliases:
  - "Is it 100% cotton?"
  - "What material is the hoodie?"
  - "Is the fabric organic?"
  - "What's the GSM / weight?"
  - "Material composition"
category: product-info
audience: customer
language: en
confidence: medium
related:
  - kb.product-info.size-chart
  - kb.product-info.care-instructions
  - kb.product-info.print-techniques-overview
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user wants material specs for a specific product"
      handoff: shop.get_product_specs
source_of_truth:
  - "~/Desktop/Custyle/商品/供应链/一对半面料选型分析.md"
  - "~/Desktop/Custyle/商品/供应链/衣舍面料选型分析 .md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Material & fabric

## Quick answer

Materials vary by product. Tees and hoodies are typically combed cotton or cotton-rich blends in the 210–260g range — the sweet spot for soft hand-feel + print quality. Bags lean toward heavy canvas. Specific composition and weight live on each product page. We pick the fabric for how it prints, not just how it feels.

## Details

How we pick materials — the short version:

- **Print quality first.** Combed cotton (100%) is the gold standard for DTG-printed pieces — ink absorbs evenly, color is true, wash life is long. Cotton-rich blends (cotton + Sorona, cotton + poly with ≥60% cotton) work well for DTF.
- **Hand-feel second.** Weight matters for feel: ~210g for light summer tees, ~240g for year-round standard, ~260g for the "heavyweight tee" feel that's been trending.
- **No "premium" multi-fiber blends.** Some fabrics (5+ fiber compositions, modal/lyocell/silk blends) feel luxurious but print unevenly. We avoid them for printed items.

Typical product compositions:

| Product type | Typical material | Weight |
|---|---|---|
| **T-shirts** | 100% combed cotton, or cotton-poly blend (cotton-rich) | 210–260 g/m² |
| **Hoodies / sweatshirts** | Cotton-poly fleece blend, brushed inside | 280–340 g/m² |
| **Tote bags** | Heavy cotton canvas | varies, typically 8–12 oz |
| **Phone cases** | Polycarbonate or TPU | n/a |
| **Mugs** | Ceramic | n/a |

Each product page shows the **exact composition, weight, and origin** for that specific item. If a spec isn't visible on a product you're looking at, ask — we'll pull it.

Sustainability / certifications:

- Organic cotton lines are available on some products; the product page will say if it's certified (e.g., GOTS).
- Recycled / eco-blends exist on select items.

## When to defer

- "Exact GSM and composition for [specific product]" → handoff `shop.get_product_specs`.
- "Is the cotton organic / GOTS certified?" → check product page; if not stated, human teammate.
- "Do you have any vegan / cruelty-free options?" → mostly yes (no leather, no silk standard); verify per product.

## Editorial notes (review before promoting to high)

- "**210-260g sweet spot for tees**" — directly informed by `一对半面料选型分析.md` ("夏季主力 210-240g; 重磅 260-280g"). Verify Custyle actually offers products in this range or whether the catalog is currently narrower.
- "**100% combed cotton is gold standard for DTG**" — direct from material analysis doc. Locked.
- "**Cotton + poly (≥60% cotton) for DTF**" — direct from doc.
- "**No multi-fiber blends for printed items**" — direct from doc reasoning ("不同纤维吸墨率不同, DTG 喷上去会出现色差不均").
- The hoodie / tote / phone-case / mug rows are **standard category material defaults**, not from Custyle source. Verify these match what's actually in the catalog.
- "**Organic cotton / GOTS certification**" — assumed availability; verify against supplier integrations.
- "**Each product page shows exact composition**" — depends on UI; verify the product page actually surfaces fabric weight + composition.

## Sources

- `~/Desktop/Custyle/商品/供应链/一对半面料选型分析.md` — material × technique compatibility matrix, GSM analysis
- `~/Desktop/Custyle/商品/供应链/衣舍面料选型分析 .md` — alternative supplier reference
- Verify against actual product-page material specs
