---
id: kb.account-and-data.signup-login
intent_primary: "How do I sign up or log in?"
intent_aliases:
  - "How do I create an account?"
  - "How do I log in?"
  - "Can I sign in with Google / Apple?"
  - "Do I need an account?"
  - "Sign up free?"
category: account-and-data
audience: customer
language: en
confidence: medium
related:
  - kb.account-and-data.password-reset
  - kb.product-capability.account-required-for-creation
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

# Sign up / log in

## Quick answer

Sign up free with email — the account is required to save designs, place orders, and track shipments. You can browse and start designing without one; we'll ask you to sign in when you go to save or order. Standard email + password works; OAuth sign-in (Google, Apple) may be available depending on what's enabled at the time.

## Details

Two stages:

**Try first.** You can land on the site, describe a design, and watch the Crew build something — no account required. The output is yours to preview.

**Save / order: account required.** To keep designs across sessions, place an order, or get email updates, you'll sign up. Sign-up is free.

What signup collects:

- Email (required — used for confirmations, password reset, order updates).
- Password — encrypted server-side. We don't store it readable.
- Optional profile bits (display name, etc.) you can add later.

Logging in on a new device or browser: same credentials work. If you've forgotten the password, see [Password reset](password-reset.md).

## When to defer

- "I can't access my account and don't remember the email" → human teammate; identity-verification handoff.
- "My OAuth sign-in is failing" → human teammate; depends on the provider's side.
- "Delete my account" → [Delete account](delete-account.md).

## Editorial notes (review before promoting to high)

- "**Free account, email required**" — direct from ks-faq Q "Do I need to create an account?" ("a free account is required to use the platform").
- "**Try without account**" — assumed soft-gate (most modern apps support preview without login). **Verify against actual platform auth gating** — if the front-end forces login before any design, this entry is misleading.
- "**OAuth (Google, Apple)**" — assumed standard; **verify against `back/src/auth/**` whether these are actually configured**. If only email signup is supported today, soften to "we may add OAuth options."
- "**Password encrypted server-side**" — universally true for any reasonable auth system using bcrypt/argon2; verify.
- "**Optional profile bits**" — assumed; verify what's actually optional vs. required.

## Sources

- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — "Do I need to create an account?"
- Verify against `back/src/auth/**` for OAuth + signup specifics
