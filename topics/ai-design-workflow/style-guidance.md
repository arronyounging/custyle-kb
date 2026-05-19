---
id: kb.ai-design-workflow.style-guidance
intent_primary: "What styles can the AI work in?"
intent_aliases:
  - "Can the AI do anime / cyberpunk / minimalist / vintage?"
  - "Does the AI follow style guidelines?"
  - "Can the Crew do retro / Y2K / brutalist?"
  - "What aesthetics work?"
category: ai-design-workflow
audience: customer
language: en
confidence: medium
related:
  - kb.ai-design-workflow.prompt-tips
  - kb.ai-design-workflow.how-it-works
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
source_of_truth:
  - "../../../custyle-brand/voice/messaging.md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# What styles can the Crew work in?

## Quick answer

A wide range. Minimalist, photoreal, illustration, retro / vintage, anime-inspired, manga, vaporwave, Y2K, cyberpunk, brutalist, art deco, mid-century, hand-drawn — the Crew handles most named aesthetics. Mixing styles works ("minimalist meets vaporwave"). Just name the aesthetic in your prompt; you don't have to do anything technical.

## Details

The Crew's underlying models are broad — they've absorbed a huge amount of visual culture. Practical implication: most aesthetic terms you can name, the Crew can interpret. Some clusters that land particularly well:

- **Type-driven.** Bold typography, hand-lettered, minimalist text-only, slogan tees.
- **Illustration.** Hand-drawn, line-art, comic / manga / anime-inspired, sticker style, character art.
- **Photoreal.** Photo-style portraits, photo-real product mockups, surreal photo composites.
- **Retro.** Y2K, 80s synthwave, 70s warm-grain, mid-century, art deco, vintage poster, pulp.
- **Graphic / poster.** Brutalist, swiss / international style, Bauhaus, modern minimalist.
- **Subculture.** Streetwear graphic, skate aesthetic, punk DIY, gorpcore, normcore.

Style mixing is fine — even encouraged for distinctive results:

- "Vintage anime poster style" — pulls from both.
- "Minimalist but with hand-drawn texture" — works.
- "Cyberpunk meets art deco" — works.

What's harder:

- **Very specific named artists' or studios' styles.** "In the exact style of [specific living artist]" can run into the content / IP filter. "Inspired by [public art movement]" is the safer route.
- **Highly technical visual conventions** (UML diagrams, scientific schematics, etc.) — designable but the Crew is tuned for visual / fashion design more than information design.

## When to defer

- "Will the AI do [specific named artist]'s style?" → content / IP filter may refuse if rights are active. See [Copyright and safety](copyright-and-safety.md).
- "I want a completely original style nobody's made before" → tell the Crew what you want and iterate — that's how new styles emerge.

## Editorial notes (review before promoting to high)

- The style-cluster list is **standard visual-design taxonomy**, not from a Custyle source. Voice-aligned (Gen-Z aesthetic vocabulary) per `voice/tone.md`.
- "**Most named aesthetics work**" — true of broad-trained models like Gemini / Imagen. Verify against actual Crew output on edge cases.
- "**Style mixing works well**" — common LLM behavior; verify Custyle's pipeline actually composes styles cleanly rather than dropping one.
- "**Named-artist style runs into IP filter**" — flagged consistent with `copyright-and-safety.md`; verify the actual filter behavior.

## Sources

- `custyle-brand/voice/messaging.md` — capability messaging
- Industry-standard visual-design taxonomy
- Verify against actual Crew output capability across these clusters
