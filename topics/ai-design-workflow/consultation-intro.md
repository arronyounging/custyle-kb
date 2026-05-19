---
id: kb.ai-design-workflow.consultation-intro
intent_primary: "I don't know what to design — can you help?"
intent_aliases:
  - "Help me come up with a design"
  - "I need design ideas"
  - "Can you ask me questions to help me figure out a design?"
category: ai-design-workflow
audience: customer
language: en
confidence: low
related:
  - kb.ai-design-workflow.how-it-works
  - kb.ai-design-workflow.prompt-tips
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user explicitly wants to start the consultation flow"
      handoff: design.create  # tool=consultation is internal — route at the converse layer
source_of_truth:
  - "../../../custyle-brand/product/consultation-agent.md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Help me come up with a design

> Status: **stub**. Body TODO.

## Quick answer

TODO — Frame: yes, the Crew can guide you. Mention "I'll ask a few targeted questions — your interests, the vibe you want, who it's for — and we'll get to something specific."

## Details

TODO — Set expectation: one question at a time, with options provided, never an interrogation. End state: a specific direction you can confirm and turn into designs.

## When to defer

TODO — When the user is ready to commit: route to the consultation flow itself (Converse Domain `tool=consultation`).

## Sources

TODO
