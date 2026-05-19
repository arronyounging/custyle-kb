---
id: kb.account-and-data.email-preferences
intent_primary: "How do I unsubscribe from emails?"
intent_aliases:
  - "Stop sending me emails"
  - "Manage email notifications"
  - "I keep getting promo emails"
  - "Opt out of marketing"
category: account-and-data
audience: customer
language: en
confidence: medium
related:
  - kb.account-and-data.update-profile
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Email preferences

## Quick answer

Two ways: click the unsubscribe link in any email we've sent you, or open Account → Notifications and toggle the categories you want. Transactional emails (order confirmations, shipping updates, password resets) you can't fully turn off — those are tied to actions you took. Promotional and product-news emails are always opt-out.

## Details

What you can turn off:

- **Promotional emails.** Sales, launches, partner promos.
- **Product newsletters.** New features, the gallery, creator spotlights.
- **Community / social.** Mentions, comments on your shared designs (if you've shared any).

What stays on regardless:

- **Order updates** — confirmations, shipping, delivery, refunds. These are tied to actions you took and we send them to keep you informed.
- **Account-security emails** — password resets, login from a new device, suspicious-activity alerts.
- **Legally required notices** — policy changes, account closure confirmations.

If you want zero email from Custyle, the path is to delete your account — see [Delete account](delete-account.md). Order-update emails will only fire if you have open orders.

Two practical things:

- **Unsubscribe link works one-tap.** No login required. The link in the email is enough.
- **Switching categories.** From Account → Notifications, you can toggle each category independently. Off ≠ delete; you can switch back on later.

## When to defer

- "I still get emails after unsubscribing" → human teammate; check the actual mailing-list state.
- "Resubscribe me" → tell user the toggle is in Account → Notifications.

## Editorial notes (review before promoting to high)

- "**Account → Notifications**" — assumed UI path; verify actual label.
- "**Three categories**" (promotional / product newsletter / community) — assumed standard; verify the actual category set in the email system (Sendgrid, Customer.io, etc.).
- "**Unsubscribe link works one-tap, no login**" — universal standard (CAN-SPAM, GDPR); verify implementation.
- "**Security alerts**" — assumed but **verify** whether security emails are actually generated and what triggers them.
- The "**three things that stay on**" list — verify the actual transactional / mandatory email set matches.

## Sources

- Standard email-preference center patterns
- Verify against `back/src/email/**` + mailing-platform configuration
