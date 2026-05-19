# What's Next

Phase 1 (content fill) is complete — 64 entries at `confidence: medium`. This document is the roadmap for promoting them to `confidence: high` and shipping the KB into the Custyle Converse Domain.

## Phase 2: Medium → High

Every entry has an `## Editorial notes (review before promoting to high)` section listing claims that aren't direct lifts from canonical source material. To promote an entry:

1. Walk each editorial-notes bullet.
2. For each bullet: verify against the relevant source (`back/src/`, ops policy, support workflow, published legal doc).
3. Either: update the body to reflect the verified truth, or delete the line if it can't be supported.
4. When the editorial-notes section is empty (every bullet resolved), delete the section and bump `confidence: medium` → `confidence: high`.

Recommended order (highest user impact, easiest to verify first):

| Priority | Category | Rationale |
|---|---|---|
| **P0** | `policies/*` | Legal exposure. ToS / Privacy / IP / Content all need verification against actual published policy docs. |
| **P0** | `ordering/modify-cancel` + `shipping/lead-time` | Defines actual customer commitments — wrong here = real friction. |
| **P1** | `account-and-data/*` | GDPR / CCPA exposure. Verify against actual auth + data flow. |
| **P1** | `after-sales/*` | Promises about refunds, replacements, warranty need ops sign-off. |
| **P2** | `product-info/*` | Material / care / size claims — verify against supplier + product catalog. |
| **P3** | `about-custyle/*`, `ai-design-workflow/*`, `product-capability/*` | Brand-voice + capability — lower legal risk, easier to iterate later. |

## Phase 3: Converse Domain Integration

See [`INTEGRATION.md`](INTEGRATION.md). Seven implementation milestones (M1–M7) live in `custyle-platform`. M1 is complete (`PlatformKnowledgeRepository`). Remaining:

- **M2** — Selector input plumbing (inject `PlatformKnowledgeRepository` into `ConverseContextSelectorInputBuilder`).
- **M3** — Selector schema + decision plumbing (`platform_qa` intent, `selectedKnowledgeIds`).
- **M4** — Hydrator + boundary merge.
- **M5** — Answer LLM prompt update.
- **M6** — `defer_to_api` → `suggestedActions` wiring.
- **M7** — End-to-end regression against `eval/golden-questions.yaml` + `eval/boundary-tests.yaml`.

## Phase 4: Coverage gaps + reverse-loop

Once Converse is live and serving real users, [`scripts/extract-coverage-gaps.ts`](scripts/extract-coverage-gaps.ts) (currently a design stub) becomes the priority. It mines runtime logs for "asked but not well-answered" patterns and feeds [`eval/coverage-gaps.md`](eval/coverage-gaps.md) weekly.

This is what turns the KB from a static document into a self-improving asset.

## Phase 5: Multilingual

Schema already supports `(id, language)` composite uniqueness. Phase 5 ships `zh` translations of the P0 entries (about-custyle, what-can-i-make, returns, shipping/regions, payment-methods) as siblings — same `id`, different `language`, file path `<slug>.zh.md`.

Per [`schema/style-guide.md`](schema/style-guide.md) §Multilingual posture: translators preserve voice, not literal wording.

## Maintenance cadence

- **Per-entry**: `review_cadence_days: 90` by default. CI flags stale entries automatically.
- **Per-category**: monthly skim against current product state.
- **Post-incident**: any customer complaint that traces back to a KB misstatement triggers an immediate review of the affected entry + a coverage-gaps backlog item.

## Owner

[`@arronyounging`](https://github.com/arronyounging) (single-person review in Phase 0–1; expand owner field per entry as the team grows).
