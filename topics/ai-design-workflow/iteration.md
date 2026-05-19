---
id: kb.ai-design-workflow.iteration
intent_primary: "Can I iterate on a design I already made?"
intent_aliases:
  - "Can I tweak my design?"
  - "How do I make changes to an existing design?"
  - "Can I get more variations?"
category: ai-design-workflow
audience: customer
language: en
confidence: low
related:
  - kb.ai-design-workflow.how-it-works
  - kb.ai-design-workflow.regeneration-limits
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user wants to actually create the iteration now"
      handoff: design.edit
source_of_truth:
  - "../../../custyle-brand/product/workflows.md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Can I iterate on a design?

> Status: **stub**. Body TODO.

## Quick answer

TODO — Confirm yes. Describe how: tell the Crew what to change ("make it more abstract", "try it in green", "shift it to the chest"). Mention design.edit handoff when the user wants to actually trigger an iteration.

## Details

TODO — Walk through: edit-by-description, variants, side-by-side compare via Converse, picking a final.

## When to defer

TODO

## Sources

TODO
