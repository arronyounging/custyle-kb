---
id: kb.about-custyle.meet-the-crew
intent_primary: "Who is the Crew?"
intent_aliases:
  - "Who are the AI agents?"
  - "Tell me about Vibbi"
  - "What does each AI agent do?"
  - "How many AI agents are there?"
category: about-custyle
audience: customer
language: en
confidence: medium
related:
  - kb.about-custyle.what-is-custyle
  - kb.ai-design-workflow.how-it-works
  - kb.ai-design-workflow.consultation-intro
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: false
source_of_truth:
  - "../../../custyle-brand/voice/crew.md"
  - "~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Meet the Crew

## Quick answer

Meet the Crew — nine specialized AI agents that collaborate on every order. Vibbi orchestrates. Pia reads your taste. Nova sharpens the concept. Ink draws. Bolt picks how to build it. Grid lays it out. Axis matches the product form. Moxy shows the try-on. Lumi sets the scene. A creative team, not a tech stack.

## Details

Each agent has a clear job:

| Crew member | What they do |
|---|---|
| **Vibbi** | Design Lead. Captain of the Crew. Keeps the creative direction tight from start to finish. |
| **Pia** | Reads your taste, references, and unspoken preferences fast. |
| **Nova** | Turns a loose prompt into a sharper creative direction. |
| **Ink** | Draws the artwork — visual language and details that make it feel intentional. |
| **Bolt** | The production brain. Picks the right process, material, and technique for each design. |
| **Grid** | Layout: composition, hierarchy, spacing, placement. |
| **Axis** | Matches the design to the right product form. |
| **Moxy** | Shows you the try-on — how the idea lands on a real body. |
| **Lumi** | Builds the mood and scene around the final product. |

You'll see Vibbi often — she shows up across the site as your guide. The rest of the Crew works behind the design panel and shows up at the right moment.

## When to defer

- "What model / LLM does each Crew member run on?" → not part of customer KB. If asked, redirect to "the Crew is what you talk to; the engineering is behind the scenes."
- "Who designed the Crew characters?" → human teammate (brand/IP).
- Questions about the Crew's personality voice / tone → see `custyle-brand/voice/crew.md` (internal reference).

## Editorial notes (review before promoting to high)

- All nine names + role descriptions are lifted **directly** from `custyle-brand/voice/crew.md` (canonical, V3.3 brand spec). High confidence on names and roles.
- The pipeline order (Vibbi → Pia → Nova → Ink → Bolt → Grid → Axis → Moxy → Lumi) is per `crew.md` §Pipeline Order. ks-faq Q5 confirms the same order. Aligned.
- "You'll see Vibbi often — she shows up across the site as your guide" — per `crew.md` UI element ("floating orb persists as a narrator/guide"). Confirm whether this is implemented in the live UI before claiming.
- I used she/her for Vibbi based on `crew.md` voice tone ("she" implied by "reliable captain"). Verify if a neutral pronoun is preferred — brand doc doesn't lock gender explicitly.
- Did **not** disclose the AI tech stack (Gemini, Claude, Imagen, LangGraph from ks-faq Q7). Per brand guardrail "never make AI the protagonist" + the Crew is the user-facing layer.

## Sources

- `custyle-brand/voice/crew.md` — canonical roster, roles, pipeline order, voice tones
- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — Q5 (publicly disclosed Crew lineup)
