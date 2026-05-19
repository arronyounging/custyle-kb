---
id: kb.after-sales.review-and-feedback
intent_primary: "How do I leave a review or feedback?"
intent_aliases:
  - "Where can I rate my order?"
  - "How do I share feedback about Custyle?"
  - "Where do I post my photo of my order?"
  - "Public gallery — how do I share?"
category: after-sales
audience: customer
language: en
confidence: medium
related:
  - kb.about-custyle.contact-us
  - kb.account-and-data.find-my-orders
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

# Reviews and feedback

## Quick answer

Three ways to share. Rate your specific order — there's a link in the post-delivery email and in Account → Orders. Share your finished piece to the public gallery (opt-in, your photo, your design). Send open-ended feedback — anything from "loved this" to "X feature broke" — through chat or email; it reaches the team.

## Details

**Per-order reviews:**
- Post-delivery, we email a review link.
- Same access from Account → Orders → the specific order.
- Reviews can include a photo, a rating, and a short comment.

**Public gallery:**
- Custyle has a community gallery where users share what they've made.
- Sharing is **opt-in** — designs and orders are private unless you publish them.
- See your design page for the "share to gallery" option.

**Open-ended feedback:**
- "I love how the Crew handled this" or "the export quality dropped after the update" — both useful.
- Send through chat (just talk to us) or email (contact page).
- The product team reads it; we can't always reply individually but it shapes what we build.

What we do with feedback:

- Patterns drive product priorities. If five people in a week say the same thing, it climbs the roadmap.
- Specific user pain points get individual replies when we can.
- Reviews help other users decide; they're public on product pages (with your name only if you opt in).

## When to defer

- "Take my review down" → human teammate.
- "I sent feedback weeks ago and haven't heard back" → human teammate; some feedback gets a reply, not all does.
- "Can I review someone else's design in the gallery?" → community-feature question; depends on gallery implementation.

## Editorial notes (review before promoting to high)

- "**Public gallery, opt-in**" — direct from ks-faq Q "Is my data safe?" ("designs are private unless you choose to publish them to the gallery") + Q "Is the product actually built?" ("Product gallery with social features").
- "**Post-delivery email review link**" — assumed standard; verify the actual review-email implementation.
- "**Reviews with photo + rating + comment**" — assumed format; verify against actual review UI.
- "**Patterns drive roadmap**" — voice-honest; verify whether feedback is actually triaged in a way that supports this claim. Don't promise something we don't do.
- "**Reviews visible with name only if opt-in**" — assumed privacy default; verify.

## Sources

- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — gallery + privacy stance
- Verify against `back/src/review/**` + `front/modules/gallery/**`
