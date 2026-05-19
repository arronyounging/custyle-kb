---
id: kb.account-and-data.find-my-designs
intent_primary: "Where are my saved designs?"
intent_aliases:
  - "How do I find designs I made before?"
  - "Are my designs saved?"
  - "Did I lose my design?"
  - "Where's my design history?"
category: account-and-data
audience: customer
language: en
confidence: medium
related:
  - kb.ai-design-workflow.iteration
  - kb.account-and-data.signup-login
  - kb.ordering.reorder
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user wants the actual list / status of their designs"
      handoff: design.list_my_designs
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Where are my saved designs?

## Quick answer

Designs you created while signed in are saved to your account — find them in Account → My Designs. Designs you created without signing in only live in that session; if you closed the tab, they're gone. To not lose anything in the future, sign in (or sign up) before you start creating.

## Details

How design persistence works:

- **Signed in?** Every design the Crew builds gets saved to your account. You can come back to it, iterate further, or order from it.
- **Not signed in?** The design lives in the current session. If you close the tab or the browser, it's lost — no way to retrieve.
- **Just signed up while in the middle of designing?** The active session can typically be tied to the new account; tell us if anything doesn't carry over.

What "saved" means:

- The prompt(s) you gave.
- The final design and its variants.
- The product form / technique pairing the Crew picked.
- Order history if you ordered from it.

You don't need to manually save — saving is automatic for signed-in sessions.

## When to defer

- "Show me my design list" → handoff `design.list_my_designs`.
- "I designed something while logged out and now can't find it" → tell the user it's not recoverable; offer to help re-create from their description.
- "Delete a specific design from my account" → human teammate, or self-serve from Account → My Designs (verify).

## Editorial notes (review before promoting to high)

- "**Saved-when-signed-in / session-only-when-logged-out**" — assumed standard pattern. **Verify against `back/src/design/**`** — some platforms persist anonymous sessions via fingerprint or cookie; if Custyle does this, the entry needs to be updated.
- "**Active session ties to new account on signup**" — common pattern but verify the actual signup flow. If a user designs anonymously then signs up mid-session, does the design carry over?
- "**My Designs page name**" — assumed; verify the actual UI label.
- "**No manual save needed**" — assumed; verify against UI.
- The "what gets saved" list (prompt, design, variants, product/technique) — verify against the actual persistence schema.

## Sources

- Inferred from standard design-platform persistence patterns
- Verify against `back/src/design/**` + `front/modules/design/**`
