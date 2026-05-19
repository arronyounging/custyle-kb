---
id: kb.product-capability.languages-supported
intent_primary: "What languages does Custyle support?"
intent_aliases:
  - "Can I describe my design in [language]?"
  - "Do you support Chinese / Spanish / French?"
  - "Is the website translated?"
  - "Can I prompt in non-English?"
category: product-capability
audience: prospect
language: en
confidence: medium
related: []
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
source_of_truth:
  - "~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Languages

## Quick answer

The interface is English at the moment, with multilingual support on the roadmap. You can usually **describe your design in any major language** — the underlying AI handles multilingual prompts well. So if you're more comfortable in Spanish, French, Japanese, or Chinese, write the prompt there and the Crew will work with it. Support / help is in English today.

## Details

Two different language questions:

- **Interface (the website itself).** Currently English. Multi-language interface is on the roadmap — see ks-faq's stretch goals.
- **Prompts (what you type to design with).** The Crew's language model handles dozens of languages. A prompt in any major language usually works as well as one in English.
- **Support.** Customer service is in English at the moment. Multi-language support will follow the interface roll-out.

A few practical notes:

- **Mixed-language prompts** are fine ("a cute neko cat, anime style, with the word '友達' on a hoodie").
- **Right-to-left scripts** (Arabic, Hebrew) and other writing systems work in prompts; rendering them as part of the design output may have constraints depending on technique and font availability.
- **Very rare or niche languages** may produce weaker results — fewer training examples means the Crew has less to work with.

If your language isn't supported in the interface yet, your browser's built-in translate usually handles the navigation well.

## When to defer

- "When will [my language] be added to the interface?" → roadmap question; no fixed timeline. Human teammate if pressed.
- "Translate my design's text accurately into [language]?" → the Crew translates intent but always double-check rendered text — fonts and scripts vary.

## Editorial notes (review before promoting to high)

- "**Interface is English; multilingual on roadmap**" — direct lift from ks-faq stretch goals ("multi-language support").
- "**Crew handles dozens of languages in prompts**" — true of the underlying LLMs (Gemini, Claude per ks-faq). Verify the actual prompt pipeline doesn't restrict to English.
- "**Mixed-language prompts work**" — assumed; verify with actual prompt behavior.
- "**RTL scripts have rendering constraints**" — true for many design tools; verify with Custyle's actual font / technique support.
- "**Support is English-only**" — verify against actual support staffing.

## Sources

- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — multi-language is a stretch goal
- Verify against `custyle-platform/front` i18n state + back/ prompt pipeline
