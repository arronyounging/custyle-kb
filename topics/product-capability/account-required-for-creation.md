---
id: kb.product-capability.account-required-for-creation
intent_primary: "Do I need an account to create a design?"
intent_aliases:
  - "Can I try Custyle without signing up?"
  - "Is signup required?"
  - "Can I design without an account?"
  - "Free trial?"
category: product-capability
audience: prospect
language: en
confidence: medium
related:
  - kb.ordering.place-order
  - kb.account-and-data.signup-login
  - kb.account-and-data.find-my-designs
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

# Do I need an account to create a design?

## Quick answer

Try first — you can land on the site, describe a design, and see what the Crew builds without signing up. You only need a free account when you want to save the design across sessions, place an order, or get email updates. Signup is free and quick.

## Details

What works without an account:

- Describe a design and watch the Crew build it.
- Iterate ("make it warmer," "try it in green") within the same session.
- See the preview, the technique recommendation, the try-on.

What requires an account:

- **Saving the design.** Designs from anonymous sessions disappear when you close the tab. See [Find my designs](../account-and-data/find-my-designs.md) for persistence rules.
- **Ordering.** Checkout needs an account so we can fulfill, send tracking, and provide a receipt.
- **Email confirmations / updates.** No account = no email tied to your activity.

Why this design:

- The brand position is "intent is the new interface" — the lower we set the barrier to "try," the better. Forcing signup before you can see anything would betray that.
- The barrier rises only where it has to (commerce, persistence).

Signing up is free. Email + password. See [Sign up / log in](../account-and-data/signup-login.md).

## When to defer

- "Can I get an anonymous order without an account?" → checkout requires account; if user pushes, explain it's a fulfillment + tracking necessity, not a marketing gate.
- "If I signed up partway through designing, does my anonymous work transfer?" → typically yes; verify per `signup-login.md` editorial notes.

## Editorial notes (review before promoting to high)

- "**Try without account, save / order needs account**" — direct alignment with brand positioning ("intent is the new interface") + ks-faq Q "Do I need to create an account?" ("free account required to use the platform").
- ks-faq says "a free account is required to use the platform" — this is **slightly stricter** than the framing I used (try first, account at save). **Verify against actual platform auth gating.** If signup is required at design step (not just at order), this entry needs to be rewritten.
- "**Anonymous design transfers on signup**" — assumed UX best practice; verify implementation.

## Sources

- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — "Do I need to create an account?"
- `custyle-brand/identity/positioning.md` — brand stance on low barriers
- Verify against actual platform auth gating
