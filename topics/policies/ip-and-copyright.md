---
id: kb.policies.ip-and-copyright
intent_primary: "Who owns my designs?"
intent_aliases:
  - "What about copyright on my creations?"
  - "Can I sell merch with a copyrighted character?"
  - "IP rights for AI-generated designs"
  - "Can I make merch with Mickey Mouse?"
  - "Whose intellectual property is my design?"
category: policies
audience: customer
language: en
confidence: medium
related:
  - kb.policies.content-policy
  - kb.policies.terms-summary
  - kb.ai-design-workflow.copyright-and-safety
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "specific legal question about a user's design"
      handoff: converse.handoff_human
source_of_truth:
  - "~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md"
  - "../../../custyle-brand/identity/positioning.md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# IP & copyright — summary

## Quick answer

Two clauses. **You own what you create on Custyle** — your designs are yours to wear, gift, share, or sell. **Don't upload or prompt for IP you don't have rights to** — no copyrighted characters, no third-party logos, no protected trademarks. For full terms, see the IP Policy on our legal page.

## Details

The plain-language version:

- **Your originals are yours.** A design you generate or upload that doesn't infringe anyone else's IP is yours — license, royalty, downstream use, all of it.
- **Don't bring other people's IP.** Disney characters, anime characters with active rightsholders, sports team logos, branded mascots, copyrighted illustrations — all of these are off limits unless you have a license. The Crew refuses these prompts, and uploads that match them get flagged.
- **Inspired-by is different from copy.** A design "in the style of" a public movement (vaporwave, art deco, Studio Ghibli aesthetic) is generally fine as long as you're not reproducing specific protected characters or works. Borderline cases get a human review.
- **If someone files a complaint** about a design you sold or shared — the IP Policy lays out how that's handled (DMCA-style process).

We're not a law firm and this isn't legal advice. If you have a specific question about whether *your* design is in the clear, talk to a lawyer.

## When to defer

- "Is my [specific] design legally safe?" → human teammate. We don't give per-design legal opinions.
- "Someone is selling my design without permission" → human teammate, IP complaint path.
- "Can I trademark a design I made on Custyle?" → outside our scope; consult a lawyer.

## Editorial notes (review before promoting to high)

- "**You own what you create on Custyle**" — implied by ks-faq + brand positioning ("your taste, made real") but **not explicitly stated as ownership policy in any source I've found**. This is the **single most important claim to verify against the actual Terms of Service** before promoting to high. If the ToS reserves any rights to Custyle, this entry needs to be amended.
- "**No copyrighted characters / logos / trademarks**" — direct from ks-faq "Can I create anything I want?".
- "**The Crew refuses these prompts**" — implicit in the NSFW scoring system mentioned in ks-faq; verify the actual content-filter implementation.
- "**Inspired-by is different from copy**" — my framing, **not in source**. Reasonable industry standard but the actual content filter may be more or less permissive. Verify.
- "**DMCA-style process**" — standard for US-hosted services but not verified for Custyle. Confirm with legal.
- No canonical legal-page URL referenced yet — the "see the IP Policy on our legal page" is a placeholder until the actual URL is published.

## Sources

- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — "Can I create anything I want?"
- `custyle-brand/identity/positioning.md` — "you bring the vibe, we make it real" (implicit ownership framing)
- (canonical IP Policy URL — TODO when published)
