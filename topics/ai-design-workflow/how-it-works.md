---
id: kb.ai-design-workflow.how-it-works
intent_primary: "How does the AI design work?"
intent_aliases:
  - "How does Custyle create my design?"
  - "What does the AI actually do?"
  - "How does Custyle take my idea to merch?"
  - "What happens after I describe my idea?"
category: ai-design-workflow
audience: customer
language: en
confidence: medium
related:
  - kb.ai-design-workflow.describe-vs-upload
  - kb.ai-design-workflow.iteration
  - kb.about-custyle.meet-the-crew
  - kb.ai-design-workflow.print-technique-recommendation
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: false
source_of_truth:
  - "../../../custyle-brand/product/workflows.md"
  - "../../../custyle-brand/product/agent-system.md"
  - "~/Desktop/Custyle/BP-10B/phase3-writing/chapters/bp-chapters-1-6.md"  # Ch 2-3: Creation Gap + AI vs POD + Leo story + 9-agent workflow
  - "~/Desktop/Custyle/seo-articles/ai-custom-merchandise-market-2026.md"
  - "~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# How the AI design works

## Quick answer

You describe an idea or upload a reference. The Crew takes it from there. Vibbi orchestrates, Pia reads your taste, Nova sharpens the concept, Ink draws the artwork, Bolt picks the right way to build it, Grid handles the layout, Axis matches the product form, Moxy shows the try-on, Lumi sets the scene. About two minutes start to finish.

## Details

You stay in one chat the whole way. The Crew works in the background, and you see results emerge — not nine separate steps to click through.

What's actually happening:

1. **Read** — Pia picks up your taste from the prompt (or the image you uploaded) and from anything you've made before.
2. **Sharpen** — Nova turns a loose direction into a stronger one. "Cyberpunk cat" becomes a concrete brief.
3. **Draw** — Ink creates the artwork. Real visual language, not a generic cutout.
4. **Build** — Bolt picks the manufacturing technique that fits the design (DTG / DTF / embroidery / sublimation / etc.). This is the part that makes Custyle different from print-on-demand: we don't just paste your design onto a generic blank.
5. **Place** — Grid handles composition and placement. Axis matches the final design to the right product form.
6. **Show** — Moxy generates the try-on so you can see how it lands on a body. Lumi builds the scene around it.

You decide what to keep, what to iterate on, what to order. The Crew doesn't auto-purchase anything.

The whole pass typically takes about two minutes. If you want a different direction, just say so — iteration is unlimited before you order.

## When to defer

- "Why did the Crew choose [this technique]?" → [`kb.ai-design-workflow.print-technique-recommendation`](print-technique-recommendation.md).
- "Can I change the design after?" → [`kb.ai-design-workflow.iteration`](iteration.md).
- "What model / LLM does the Crew use?" → not customer-facing KB; deflect to "the Crew is the part you interact with" or human teammate.
- Internal architecture (Selectors, Domains, orchestration graph) → never expose.

## Editorial notes (review before promoting to high)

- The 9-agent pipeline order — direct from `custyle-brand/voice/crew.md` §Pipeline Order, also matches ks-faq Q5 exactly. Locked.
- Per-agent role one-liners — paraphrased from `voice/crew.md` card copy + ks-faq Q5. Within voice, no fact drift.
- "About two minutes start to finish" — ks-faq Q5 says "under 2 minutes." Direct lift.
- "Iteration is unlimited before you order" — ks-faq Q "What if I'm not satisfied with my merch?" says "you have unlimited AI re-generations." Direct lift.
- "We don't auto-purchase anything" — implicit in product behavior, not stated in source. Safe but verify against actual UX (no surprise charges).
- The technique-list (DTG/DTF/embroidery/sublimation) — common merch techniques. Verify which Custyle has actually integrated today (some may be roadmap).
- The Bolt-vs-POD framing ("we don't paste your design onto a generic blank") — direct lift from positioning.md guardrail #6 + ks-faq Q2. Voice-aligned.

## Sources

- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — Q5 (pipeline), Q2 (POD differentiation), "What if I'm not satisfied" (iteration)
- `custyle-brand/voice/crew.md` — canonical Crew + pipeline order + role descriptions
- `custyle-brand/identity/positioning.md` — "What Custyle is NOT" guardrails (esp. #6 — never paste on)
- `custyle-brand/product/workflows.md` — internal flow spec
- `~/Desktop/Custyle/BP-10B/phase3-writing/chapters/bp-chapters-1-6.md` — Ch3 Leo story (narrative reference)
