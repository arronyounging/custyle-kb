# Account & Data — Planned Entries

Signup, login, password, finding your stuff, account deletion, and data privacy.

This category lives in the support-frequency hotspot for any e-commerce product. It's also where GDPR/CCPA-relevant questions land — high-stakes voice and legal posture.

| Priority | ID | Status | Owner |
|---|---|---|---|
| P0 | `kb.account-and-data.signup-login` | stub | arronyounging |
| P0 | `kb.account-and-data.password-reset` | stub | arronyounging |
| P0 | `kb.account-and-data.find-my-designs` | stub | arronyounging |
| P0 | `kb.account-and-data.find-my-orders` | stub | arronyounging |
| P0 | `kb.account-and-data.delete-account` | stub | arronyounging |
| P0 | `kb.account-and-data.data-privacy` | stub | arronyounging |
| P1 | `kb.account-and-data.email-preferences` | stub | arronyounging |
| P1 | `kb.account-and-data.update-profile` | stub | arronyounging |

## Notes for writers

- **Data-privacy posture** must align with the published Privacy Policy and GDPR/CCPA stance. Don't paraphrase legal text — link the canonical doc and summarize at policy level.
- Deletion: distinguish "delete my account" (full-wipe) from "delete my designs" (subset). Verify what is actually supported.
- "Find my designs / orders" overlaps with Converse memory (`latestArtifacts` / `commerceStateIndex`) — KB answers the **how**, Converse answers the **what** at runtime.
- Login problems that involve a specific account → human handoff (per [`handoffs/to-human.md`](../../handoffs/to-human.md)).
- All entries default to `forbid_external_facts: true` — never make claims about laws/regulations beyond what's in our published policy.
