---
id: kb.ai-design-workflow.describe-vs-upload
intent_primary: "Should I describe my design or upload one?"
intent_aliases:
  - "What's the difference between Describe & Create and Upload & Go?"
  - "Which creation mode should I use?"
  - "Can I do both at once?"
  - "Words or image — which works better?"
category: ai-design-workflow
audience: customer
language: en
confidence: medium
related:
  - kb.ai-design-workflow.how-it-works
  - kb.ai-design-workflow.upload-rules
  - kb.ai-design-workflow.prompt-tips
  - kb.product-capability.what-can-i-make
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: false
source_of_truth:
  - "../../../custyle-brand/product/definition.md"
  - "~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Describe vs. Upload

## Quick answer

Two ways in. **Describe & Create** — type what's in your head and the Crew builds the design from scratch. **Upload & Go** — drop an image (a photo, a sketch, a reference) and the Crew works it into something merch-ready. Both end at the same place: a real product, ready to order. You can also mix them.

## Details

When to **describe**:

- The thing in your head doesn't exist as an image yet — a vibe, a memory, a meme, a feeling.
- You want the Crew to make creative choices for you.
- You're playing with a direction and want to iterate.

When to **upload**:

- You already have the artwork (your own illustration, a photo of your pet, a logo).
- You have a reference you want to start from — even if it's not the final look.
- You want a faithful translation of an existing image onto merch.

Mixing them (most common path):

- **Upload + describe.** Drop a reference photo and say "make it look more like a Studio Ghibli still" — the Crew uses both.
- **Describe + reference.** Type your idea and add a mood-board image as inspiration.

In every mode, the Crew handles design choices that you didn't make explicitly — placement, scale, fabric-specific tweaks, manufacturing technique. You don't have to think about those unless you want to.

## When to defer

- Specific upload requirements (formats, sizes) → [Upload rules](upload-rules.md).
- "Why did the Crew interpret my prompt that way?" → describe what's off and iterate ([Iteration](iteration.md)).
- "Can I provide a 3D model?" → not yet supported; human teammate.

## Editorial notes (review before promoting to high)

- The two mode names "Describe & Create" / "Upload & Go" are **canonical** per `custyle-brand/product/definition.md` §"Two Creation Modes."
- "**You can mix them**" — implicit capability in the design pipeline. Verify the live UI supports image+text together (it should — the Crew uses both signals).
- The "**Upload + describe**" / "**Describe + reference**" examples are illustrative, not from source.
- "Studio Ghibli still" as an example — chosen for voice, OK as inspiration reference; not naming a specific copyrighted work to recreate (per content policy).
- "**3D model not yet supported**" — speculative; verify against actual upload constraints in `back/`.

## Sources

- `custyle-brand/product/definition.md` — "Two Creation Modes" table (canonical naming)
- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — describe vs upload mentioned across Q1, Q5
