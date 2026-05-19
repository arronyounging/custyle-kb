---
id: kb.ai-design-workflow.consultation-intro
intent_primary: "I don't know what to design — can you help?"
intent_aliases:
  - "Help me come up with a design"
  - "I need design ideas"
  - "Can you ask me questions to help me figure out a design?"
  - "I want to make something but I'm not sure what"
  - "Chat with Vibbi"
category: ai-design-workflow
audience: customer
language: en
confidence: medium
related:
  - kb.ai-design-workflow.how-it-works
  - kb.ai-design-workflow.prompt-tips
  - kb.about-custyle.meet-the-crew
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user wants to start the consultation conversation now"
      handoff: design.create
source_of_truth:
  - "../../../custyle-brand/product/consultation-agent.md"
  - "../../../custyle-brand/voice/messaging.md"
  - "~/Desktop/Custyle/vibbi-prototype/PRODUCT_DOC.md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Help me come up with a design

## Quick answer

Not sure what you want to make? Chat with Vibbi. In two or three turns, she'll riff with you on directions and land on a creative brief specific enough to design from. Pia reads what you're drawn to between the lines. You always pick the direction — Vibbi never just guesses. One chat away from your next favorite thing.

## Details

When to use the consultation path:

- You have a vague vibe but no concrete image yet ("something for my dad's birthday," "a vibe for autumn").
- You're stuck between two directions and want a creative partner.
- You want to explore before committing.

What to expect in a session:

- **Two to three turns**, not a long survey. Each turn from Vibbi has three beats: she reflects what you said, adds a creative angle you didn't ask for, and gives you two specific directions to pick between.
- **Pia is reading taste in the background.** As you talk, she's picking up references, color leanings, mood — so when Vibbi forks a choice, the options are already shaped to you.
- **You decide what gets built.** Consultation never auto-starts a design. End of conversation: "Here's the direction. Want me to build it?"

If you'd rather skip the chat and just jump in, the quick-create path is always open — just describe or upload directly.

## When to defer

- "Yes, start designing with this direction" → handoff `design.create` with the consultation brief.
- "Let me change my mind about the direction first" → stay in consultation, more turns.
- "Skip the chat, just design" → quick-create path (`design.create` directly with the user's prompt).

## Editorial notes (review before promoting to high)

- "**Two to three turns**" — direct from `vibbi-prototype/PRODUCT_DOC.md` §1.2: "2-3 turn creative dialogue."
- The three-beat rhythm — direct from PRODUCT_DOC.md §3.1 "Mirror-Spark-Fork." I avoided naming it that way because that's internal nomenclature. The customer-facing wording paraphrases the behavior.
- "**Pia reads what you're drawn to**" — `voice/crew.md` Pia role: "Picks up your taste, references, and unspoken preferences." Direct alignment.
- "**Vibbi never just guesses**" — per `converse-domain-implementation-plan.md` §4.4: "Consultation ... not auto-trigger Design." Customer-friendly phrasing.
- "**One chat away from your next favorite thing**" — canonical tagline from `messaging.md`.
- "**Quick-create path always open**" — dual-track design per PRODUCT_DOC.md §2.1. Confirm this is implemented in the live UI before customer answers reference it.
- I did **not** mention "consultation_form" artifact or the Converse Domain `tool=consultation` op — those are internal. The customer just talks to "Vibbi."

## Sources

- `~/Desktop/Custyle/vibbi-prototype/PRODUCT_DOC.md` — dual-track design, Mirror-Spark-Fork model, conversation_brief schema
- `custyle-brand/product/consultation-agent.md` — product-side specification
- `custyle-brand/voice/messaging.md` — canonical tagline "One chat away from your next favorite thing"
- `custyle-brand/voice/crew.md` — Vibbi (Design Lead) + Pia (Preference Reader) roles
