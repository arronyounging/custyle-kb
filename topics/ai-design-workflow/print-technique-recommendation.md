---
id: kb.ai-design-workflow.print-technique-recommendation
intent_primary: "Why did the AI choose this printing method?"
intent_aliases:
  - "Why DTF and not DTG?"
  - "Can I pick the printing technique?"
  - "What decides whether my design is screen-printed or embroidered?"
  - "How is the production method chosen?"
category: ai-design-workflow
audience: customer
language: en
confidence: low
related:
  - kb.product-info.print-techniques-overview
  - kb.ai-design-workflow.how-it-works
  - kb.product-info.material-and-fabric
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: false
source_of_truth:
  - "../../../商品/供应链/一对半面料选型分析.md"
  - "../../../custyle-brand/product/architecture.md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Why the AI picks a printing technique

> Status: **stub**. Body TODO.

## Quick answer

TODO — Explain the decision in user language: the Crew matches your design + chosen product to the technique that will look and feel best (DTG for rich color on cotton tees, DTF for vivid color on more materials, embroidery for premium texture, sublimation for all-over print, etc.). You can request a different technique when supported. ≤ 80 words.

## Details

TODO — Pull decision logic from `商品/供应链/一对半面料选型分析.md` (material-technique compatibility matrix) and `custyle-brand/product/architecture.md` (Product Engine). User-facing: when each technique excels, when it's avoided. Don't reveal internal routing code.

## When to defer

TODO — User wants to override the recommended technique → suggest `design.edit` with explicit technique preference (verify support).

## Sources

- `~/Desktop/Custyle/商品/供应链/一对半面料选型分析.md` (material-technique matrix)
- `custyle-brand/product/architecture.md` (Product Engine)
