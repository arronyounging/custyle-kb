---
id: kb.account-and-data.update-profile
intent_primary: "How do I update my profile?"
intent_aliases:
  - "Change my email"
  - "Update my name"
  - "Change my shipping address on file"
  - "Change my display name"
  - "Update password"
category: account-and-data
audience: customer
language: en
confidence: medium
related:
  - kb.shipping.address-change
  - kb.account-and-data.password-reset
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Update your profile

## Quick answer

Account → Settings handles the standard profile changes — display name, default shipping address, notification preferences, password. Email changes need a verification step: we send a confirmation link to the new address before the switch goes through. Some changes affect orders already in flight — those need a separate path.

## Details

What you can change self-serve:

- **Display name** — free text, immediate.
- **Default shipping address** — for future orders. Doesn't affect already-placed orders (those need [Address change](../shipping/address-change.md)).
- **Password** — change from settings or via [Password reset](password-reset.md).
- **Notification preferences** — see [Email preferences](email-preferences.md).
- **Profile picture** — if your account uses one.

What needs verification:

- **Email** — we send a confirmation link to the new address. Until you click it, the old address stays active.

What needs a separate flow:

- **Shipping address on an existing order** — see [Address change](../shipping/address-change.md). The default address change only applies to future orders.
- **Payment method** — payment details are stored with Stripe, not us. Change them at the next checkout or through Stripe's customer portal if enabled.

## When to defer

- "Change email but I can't access either the old or new mailbox" → human teammate, identity verification needed.
- "Update payment method on a recurring subscription" → that's a billing-side change; human teammate if no self-serve.

## Editorial notes (review before promoting to high)

- "**Account → Settings**" — assumed UI path; verify.
- "**Email change requires confirmation link**" — security best practice; **verify the actual implementation** in `back/src/auth/**`.
- "**Profile picture support**" — assumed; verify whether profile pictures are actually a thing.
- "**Stripe customer portal**" — only relevant if a recurring subscription exists. Verify whether Custyle has any recurring-payment users (e.g., Pro membership from ks-faq) and whether the customer portal is enabled.
- The self-serve / verified / separate-flow trichotomy is sensible structure but verify the actual UI categorization matches.

## Sources

- Inferred from standard profile-management UI patterns
- Verify against `back/src/auth/**` + `front/modules/account/**`
