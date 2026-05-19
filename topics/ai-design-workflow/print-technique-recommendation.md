---
id: kb.ai-design-workflow.print-technique-recommendation
intent_primary: "Why did the AI choose this printing method?"
intent_aliases:
  - "Why DTF and not DTG?"
  - "Can I pick the printing technique?"
  - "What decides whether my design is screen-printed or embroidered?"
  - "How is the production method chosen?"
  - "Can I override the technique?"
category: ai-design-workflow
audience: customer
language: en
confidence: medium
related:
  - kb.product-info.print-techniques-overview
  - kb.ai-design-workflow.how-it-works
  - kb.product-info.material-and-fabric
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: false
source_of_truth:
  - "~/Desktop/Custyle/商品/供应链/一对半面料选型分析.md"
  - "../../../custyle-brand/product/architecture.md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Why the Crew picks a printing technique

## Quick answer

Bolt (the Crew's production lead) reads your design and your chosen product, then picks the technique that produces the best result. A rich-color illustration on a cotton tee usually lands as DTG. A vivid graphic on poly goes DTF or sublimation. A logo on a cap is embroidery. You don't have to think about it — but if you want a specific technique, you can ask before ordering.

## Details

What Bolt actually considers:

- **The design.** Photo-real? Bold flat colors? Fine text? Embroidered-looking textures? Different design types favor different techniques.
- **The material.** Cotton wants DTG. Poly wants sublimation. Cotton-rich blends with bold artwork prefer DTF. The technique-material pairing is physics, not preference.
- **Where the print goes.** Chest, sleeve, all-over wrap, hat front. Some placements only work for some techniques (you can't embroider an all-over pattern).
- **Color count + saturation.** Lots of saturated color = DTF or sublimation. A few solid colors = screen print works great.
- **Durability priority.** Embroidery for things that take a beating; DTG for soft hand.

Examples of how this lands:

| Your design + product | Crew picks |
|---|---|
| Photo of your cat on a cotton tee | **DTG** — soft, color-rich |
| Bright cartoon character on a cotton-poly tee | **DTF** — vivid, holds saturation |
| Minimalist logo on a baseball cap | **Embroidery** — premium texture, durable |
| All-over abstract pattern on a poly tote | **Sublimation** — vivid, full-coverage |
| Simple two-color band logo, dozens of pieces | **Screen print** — efficient, bold |

Can you override?

- **Some techniques can be requested** — if your design is compatible, you can say "do this as embroidery" or "use DTF." Bolt won't refuse a valid request.
- **Incompatible requests get a redirect.** "Sublimate this on a cotton tee" isn't physics; the Crew will tell you and propose the closest viable.

## When to defer

- "Change technique on this design" → handoff `design.edit` with technique preference.
- "Why is technique X not available?" → cross-link to [Print techniques overview](../product-info/print-techniques-overview.md) for material/design compatibility.

## Editorial notes (review before promoting to high)

- "**Bolt picks based on design + material + placement + color + durability**" — direct from `voice/crew.md` Bolt role ("right process, right material, right quality") + `一对半面料选型分析.md` decision logic.
- The 5-row example table — illustrative; verify against actual Crew routing rules.
- "**Some techniques can be requested**" — implied capability but **verify** whether the design.edit op actually accepts technique-preference input today. If not, this should soften to "in the future" or "ask support."
- "**Incompatible requests get redirected**" — voice-friendly; verify the actual UX surfaces this gracefully.

## Sources

- `~/Desktop/Custyle/商品/供应链/一对半面料选型分析.md` — material × technique compatibility matrix
- `custyle-brand/product/architecture.md` — Product Engine routing
- `custyle-brand/voice/crew.md` — Bolt role
- Verify against actual `back/src/agent-orchestrator/domains/role/bolt-role.module.ts` routing rules
