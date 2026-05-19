---
id: kb.policies.content-policy
intent_primary: "What kinds of designs aren't allowed?"
intent_aliases:
  - "Why was my design rejected?"
  - "Content rules"
  - "Acceptable use"
  - "What can't the Crew make?"
  - "What does the content filter block?"
category: policies
audience: customer
language: en
confidence: medium
related:
  - kb.ai-design-workflow.copyright-and-safety
  - kb.policies.ip-and-copyright
  - kb.product-capability.limitations
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

# Content policy — summary

## Quick answer

The Crew won't create or print: hate and discriminatory content, anything sexually explicit, content involving minors inappropriately, content that depicts or promotes illegal activity, and copyrighted IP you don't own. The content filter checks both your prompts and your uploads. If a borderline case gets blocked and you think it shouldn't, you can appeal.

## Details

What's blocked, in plain language:

| Category | Examples |
|---|---|
| **Hate & discrimination** | Slurs, hate symbols, content targeting groups for harm |
| **Sexually explicit / NSFW** | Adult content, sexualized depictions |
| **Children + inappropriate context** | Any sexualized or harmful depiction of minors — zero tolerance |
| **Illegal activity** | Promotion of weapons in regulated contexts, drug trafficking, etc. |
| **Copyrighted IP without rights** | Disney, Marvel, anime IP with active rightsholders, branded logos, etc. — see [IP & copyright](ip-and-copyright.md). |

The content filter works in two places:

- **Before generation.** If your prompt asks for something in these categories, the Crew refuses and tells you why.
- **At upload.** Reference images go through the same check before they enter the design pipeline.

Borderline calls get a human review when the system isn't sure — political imagery, parody, dark humor, edgy aesthetics. Appeals are handled by a person, not the filter.

We're not in the business of judging taste — but we are firm on the categories above. They protect users, creators, and us.

## When to defer

- "My design was rejected and I disagree" → human teammate, content appeals.
- "Is [specific edge case] allowed?" → human teammate, content team makes the call.
- "Where's the legal version of this policy?" → link to the published Content Policy when available; until then, human teammate.

## Editorial notes (review before promoting to high)

- The five-category list maps directly to ks-faq "Can I create anything I want?" — verbatim: copyrighted characters, hate speech, explicit/adult, trademark violations. I added **"children inappropriately"** as an explicit category because it's industry-standard zero-tolerance (CSAM); ks-faq doesn't enumerate it separately but it's implicitly under "explicit/adult." Verify the policy doc lists it explicitly.
- "**NSFW scoring system**" mentioned in ks-faq — I described it as a "content filter" rather than naming the scoring system specifically.
- "**Appeals are handled by a person, not the filter**" — reasonable customer-service stance but **unverified**. Confirm the actual appeals workflow exists before promoting.
- "**Pre-generation refusal**" + "**Upload check**" — two filter points are implied by the system having both prompt and image entry. Verify against `back/` content-filter implementation.
- "We're firm on the categories above. They protect users, creators, and us." — my framing for voice; not from source but voice-aligned (confident, not preachy).
- Specific illegal-activity examples (weapons, drug trafficking) are conservative guesses; verify against published policy.

## Sources

- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — "Can I create anything I want?"
- (canonical Content Policy URL — TODO when published)
