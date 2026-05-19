---
id: kb.ai-design-workflow.regeneration-limits
intent_primary: "Are there limits on how many designs I can generate?"
intent_aliases:
  - "Can I generate as many variations as I want?"
  - "Is there a cap on AI generations?"
  - "Are AI generations free?"
  - "Do I pay per design?"
category: ai-design-workflow
audience: customer
language: en
confidence: medium
related:
  - kb.ai-design-workflow.iteration
  - kb.ordering.place-order
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

# Limits on generations

## Quick answer

The standard policy is unlimited regenerations before you order — iterate as much as you want until the design feels right. Designing is free; only ordering costs anything. Heavy-use accounts may have a fairness threshold to prevent abuse, but normal exploring (dozens of variants) is well within range.

## Details

The economics:

- **Designing is free.** No per-generation charge for normal use.
- **Iterating is free.** Asking the Crew to change colors, redo composition, try variants — all included before you order.
- **Ordering is what costs.** A physical piece has a real price; designing doesn't.

Why we don't cap iterations per design:

- The brand stance is that iteration is the point — "unlimited regenerations" per ks-faq Q "What if I'm not satisfied with my merch?".
- A user who designs ten variants and orders one of them has the same business outcome as one who designs one and orders one. We'd rather you find what you love.

When fairness thresholds kick in:

- **Heavy automated / abusive use** — if usage looks like a script, a fairness throttle may apply.
- **No public limit number** — the threshold is generous enough that genuine exploration won't hit it. If you do, we'll tell you.

If your account has any specific quota (Pro membership tier or similar), it's shown in your account view — not in this entry.

## When to defer

- "What's my account's specific generation quota?" → Account view, or human teammate.
- "I think I'm being throttled" → human teammate, can check.

## Editorial notes (review before promoting to high)

- "**Unlimited regenerations before order**" — **direct lift from ks-faq** Q "What if I'm not satisfied with my merch?".
- "**Fairness threshold for abuse**" — assumed reasonable; **verify whether Custyle actually has rate-limiting on the design pipeline.** If yes, the threshold and the user-facing UX when it kicks in should be documented. If no, this paragraph should be removed (don't promise enforcement that doesn't exist).
- "**Pro membership tier**" — ks-faq mentions Pro membership ($19.9/mo) and AI credits. **Verify the relationship**: do free users get unlimited iterations? Do Pro users get something extra? AI credits are mentioned as a Kickstarter reward — are they part of normal billing?
- The "**economics**" framing (free design / free iteration / pay for order) — voice-aligned with brand positioning, but verify the AI-credits piece doesn't contradict.

## Sources

- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — "What if I'm not satisfied?", Pro membership pricing
- Verify against actual billing / rate-limit implementation in `back/`
