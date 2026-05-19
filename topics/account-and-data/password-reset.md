---
id: kb.account-and-data.password-reset
intent_primary: "I forgot my password"
intent_aliases:
  - "How do I reset my password?"
  - "Can't log in"
  - "Password reset email not arriving"
  - "Recover my account"
category: account-and-data
audience: customer
language: en
confidence: medium
related:
  - kb.account-and-data.signup-login
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Password reset

## Quick answer

Click "Forgot password?" on the login screen, enter the email you used to sign up, and we'll email a reset link. The link expires after a short window. Reset email not arriving? Check spam first, then try again — the email is often filtered by stricter inboxes.

## Details

Quick troubleshooting:

- **Check the spam / promotions folder.** Reset emails sometimes route there, especially in Gmail tabs.
- **Confirm the email address.** A typo in the signup email means the reset won't reach you. If you've forgotten which email you used, that's a different path (see below).
- **Wait a minute and retry.** Some mail providers throttle automated emails briefly.
- **Try a different browser / incognito.** Reset link errors are sometimes browser cache issues.

If you can no longer access the email account you signed up with — that's an identity-verification case. Talk to support; we'll work through it.

Security notes:

- Passwords are stored hashed, not in plain text. We can't tell you what your old password was — we can only reset it.
- Reset links are single-use and time-limited. If you click an expired link, start over.

## When to defer

- "I don't have access to the email I signed up with" → human teammate; identity-verification flow.
- "I keep getting reset emails I didn't request" → security concern, human teammate.
- "Password reset works but I still can't log in" → human teammate; possible account state issue.

## Editorial notes (review before promoting to high)

- "**Short expiry window**" — kept vague intentionally. The actual duration (15 min, 1 hour, 24 hours) varies by implementation. **Verify exact window in `back/src/auth/**`** before quoting hours.
- "**Single-use, time-limited reset link**" — universal standard, safe to claim. Verify the actual token handling.
- "**Hashed passwords, can't tell you the old one**" — true and worth stating for security trust. Standard.
- "**Email throttling, browser cache issues**" — standard customer-service hints; verify these match Custyle's actual support troubleshooting tree.

## Sources

- Standard password-reset patterns for any auth system
- Verify against `back/src/auth/**` reset-flow implementation
