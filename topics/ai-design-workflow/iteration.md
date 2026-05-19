---
id: kb.ai-design-workflow.iteration
intent_primary: "Can I iterate on a design I already made?"
intent_aliases:
  - "Can I tweak my design?"
  - "How do I make changes to an existing design?"
  - "Can I get more variations?"
  - "Can I regenerate the design?"
  - "How do I refine my design?"
category: ai-design-workflow
audience: customer
language: en
confidence: medium
related:
  - kb.ai-design-workflow.how-it-works
  - kb.ai-design-workflow.regeneration-limits
  - kb.ai-design-workflow.print-technique-recommendation
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: false
  defer_to_api:
    - condition: "user wants to actually trigger an edit on a specific design"
      handoff: design.edit
    - condition: "user wants a full fresh start, abandoning the current design"
      handoff: design.create
source_of_truth:
  - "../../../custyle-brand/product/workflows.md"
  - "~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Can I iterate on a design?

## Quick answer

Yes — iteration is unlimited before you order. Tell the Crew what to change ("more abstract," "try it in green," "shift it to the chest," whatever lands) and we'll build a new variant. You can keep variants side by side and pick the one that feels most right. No regen caps, no extra cost for iterations.

## Details

How iteration works in practice:

- **Just describe the change.** "Make it warmer." "Less busy." "Move the artwork higher." The Crew reads the instruction against the current design and builds a variant.
- **Variants stack.** You don't lose the previous design when you ask for changes — your workspace keeps the variants so you can compare.
- **Compare in chat.** Ask the Crew to weigh in: "Which of these works better for a gift?" — Vibbi will give a take based on your previous direction.
- **Fresh start anytime.** If the current direction isn't working, start over with a new prompt.

What's unlimited is iteration **before** you order. Once a piece goes into production, the design is locked — see [Modify / cancel](../ordering/modify-cancel.md) for the cancellation window.

## When to defer

- "Iterate this design now" (action) → handoff `design.edit` with the user's instruction.
- "Throw it out and start over" → handoff `design.create`.
- "Why doesn't iteration X look like I asked?" → keep in conversation; describe what's off and try again. If it's a recurring miss, escalate to a human teammate.

## Editorial notes (review before promoting to high)

- "**Iteration is unlimited**" — direct lift from ks-faq "What if I'm not satisfied with my merch?" which says "you have unlimited AI re-generations."
- "**No extra cost for iterations**" — implied by "unlimited" but not explicitly stated in source. Verify against billing logic (Pro membership terms in ks-faq mention "AI credits" — confirm whether credits apply to iterations or only first generations).
- The compare-in-chat behavior — matches `converse-domain-implementation-plan.md` artifact_compare intent. Confirmed against design system, not just guessed.
- "Variants stack in workspace" — matches Custyle's design system; verify against front-end behavior.
- "Once in production, design is locked" — implicit policy from ks-faq lead-time framing; cross-check with the actual cancel-window rule.

## Sources

- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — "What if I'm not satisfied with my merch?"
- `custyle-brand/product/workflows.md` — iteration in the product flow
- `back/src/agent-orchestrator/domains/converse-domain.service.ts` — `artifact_compare` intent (architectural reference)
