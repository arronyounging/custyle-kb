---
id: kb.about-custyle.safety-stance
intent_primary: "How do you keep this safe?"
intent_aliases:
  - "Is the AI safe?"
  - "What about my data and privacy?"
  - "Do you moderate content?"
  - "How does Custyle handle harmful content?"
category: about-custyle
audience: customer
language: en
confidence: medium
related:
  - kb.policies.content-policy
  - kb.policies.privacy-policy
  - kb.account-and-data.data-privacy
  - kb.ai-design-workflow.copyright-and-safety
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
source_of_truth:
  - "../../../custyle-brand/identity/positioning.md"
  - "~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Custyle's safety stance

## Quick answer

Three layers. **Content** — the Crew refuses hate, illegal, sexually explicit, and copyrighted material; both prompts and uploads are filtered. **Data** — we don't sell your personal data, and your designs are private unless you publish them. **Creation** — borderline calls (parody, edgy aesthetics) go to a human review rather than the filter's snap decision.

## Details

Three layers of safety:

**1. Content safety.**
- Pre-generation filter on prompts. If you ask the Crew for something off-policy, it refuses with a short explanation.
- Upload check on reference images. Same standard.
- Borderline cases trigger a human review, not a hard refusal — for things like parody, political imagery, edgy aesthetics that aren't clearly off-limits.
- Full content-policy list: see [Content policy](../policies/content-policy.md).

**2. Data safety.**
- Encrypted connections (HTTPS) for everything.
- Stripe handles payment data — we never see your card number.
- We don't sell personal data.
- Your designs are private to your account unless you choose to publish to the public gallery.
- Standard data-subject rights (access, delete, export) — see [Data privacy](../account-and-data/data-privacy.md).

**3. Production safety.**
- The Crew's manufacturing routing (Bolt) selects techniques and materials based on safety as well as quality — no high-VOC inks for kids' clothing, for example.
- Quality-scoring system on every design before production (per ks-faq's 6-dimension AI analysis).
- Defects caught at QC don't ship.

We don't claim perfection. Filters miss edge cases sometimes; quality is monitored continuously rather than presumed.

## When to defer

- "Specific filter decision was wrong" → [Content policy](../policies/content-policy.md) appeal path.
- "Are you certified [SOC 2 / ISO 27001]?" → human teammate or trust page if published.
- "Tell me exactly how your content filter works" → not public-facing detail; the principle is the answer.

## Editorial notes (review before promoting to high)

- The three-layer framing (content / data / production) is **my synthesis**, voice-aligned with brand. Verify ops considers safety in these three dimensions.
- "**Borderline cases go to human review**" — same flag from `content-policy.md` and `copyright-and-safety.md`: **verify the actual appeals workflow exists**.
- "**6-dimension AI quality analysis**" — direct from ks-faq "Quality scoring system."
- "**No high-VOC inks for kids' clothing**" — speculative; verify with ops whether material safety is actually a routing input.
- "**Filters miss edge cases sometimes**" — voice-honest. On-brand.

## Sources

- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — content filter + quality scoring + data privacy
- `custyle-brand/identity/positioning.md` — Custyle's stance on responsible creation
- Cross-links to policy / privacy / safety entries
