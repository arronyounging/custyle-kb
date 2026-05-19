---
id: kb.ai-design-workflow.copyright-and-safety
intent_primary: "Can the AI generate copyrighted characters?"
intent_aliases:
  - "Why did my design get rejected?"
  - "Can I make merch with Mickey Mouse / Pikachu / Marvel?"
  - "Is there a content filter?"
  - "Why did the Crew refuse my prompt?"
category: ai-design-workflow
audience: customer
language: en
confidence: medium
related:
  - kb.product-capability.limitations
  - kb.policies.content-policy
  - kb.policies.ip-and-copyright
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

# What the Crew won't make

## Quick answer

The Crew refuses two big buckets: copyrighted characters and logos you don't own (Disney, Marvel, anime IP with active rightsholders, branded mascots), and content that crosses safety lines (hate, sexual, illegal, harmful to minors). Inspired-by is fine — copy is not. If a prompt or upload gets blocked and you think it shouldn't, you can appeal.

## Details

Two reasons your prompt or upload might be refused:

**1. IP you don't own.** Specific copyrighted characters, branded mascots, trademarked logos. The line: a piece "in the style of" a public movement (vaporwave, art deco, manga aesthetics in general) is generally fine. A piece reproducing a specific protected character or work isn't.

**2. Content policy violations.** Hate / discriminatory content, explicit / sexual content, anything involving minors inappropriately, content depicting or promoting illegal activity. See [Content policy](../policies/content-policy.md) for the full list.

When the Crew refuses, you'll get a short explanation. If the refusal feels wrong (a parody that's clearly transformative, an aesthetic that's general not specific), you can appeal — a person reviews these, not the filter.

What works instead:

- **Make your own.** A design "in the style of" rather than "of" the protected thing.
- **Use what you license.** If you legitimately have rights, upload the file and we'll work with it.
- **Describe the energy.** "Cyberpunk samurai vibes" is fine; "Cyberpunk 2077 protagonist" isn't.

## When to defer

- "My design was refused and I think it's fine" → human teammate, content appeals.
- "Is X specific design legally OK?" → human teammate; we don't give per-design legal opinions. Cross-link [IP & copyright](../policies/ip-and-copyright.md).
- "What model decided to refuse my prompt?" → not customer-facing; the answer is "the Crew" + appeal path.

## Editorial notes (review before promoting to high)

- "**Two big buckets**" framing — combines ks-faq Q "Can I create anything I want?" (IP + content categories).
- "**Inspired-by is fine, copy is not**" — my framing, **not in source**. Industry-standard interpretation but the actual content-filter sensitivity may differ. Verify with someone who's run prompts through the filter.
- "**Appeals reviewed by a person, not the filter**" — assumed and stated in `content-policy.md` (same editorial concern there). Verify the appeals workflow exists.
- "**Cyberpunk 2077 protagonist**" example as a no-go — verify the filter would actually block named-game-character prompts (almost certainly yes, but confirm).
- The "what works instead" guidance is **inferred best practice**, not from source. Verify with users / content team.

## Sources

- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — "Can I create anything I want?"
- Cross-links to canonical policies (IP, Content)
