# Changelog

All notable changes to the Custyle KB.

## [Unreleased]

### Added
- Phase 0 skeleton: 5 P0 categories with stub entries
- Schema (frontmatter JSON Schema, intent catalog, style guide)
- Boundaries (do-not-answer, safety-flags mapping)
- Handoffs (commerce API, design domain, human, policy page)
- Eval scaffolding (golden questions, boundary tests, coverage gaps)
- Validation scripts + CI workflow
- **INTEGRATION.md** — the load-bearing ADR for KB ↔ Converse Domain wiring (M1–M7 milestones, schema extensions, acceptance for "integration is live")
- New P0 category **`account-and-data`** with 8 stubs (signup-login, password-reset, find-my-designs, find-my-orders, delete-account, data-privacy, email-preferences, update-profile)
- New P0 category **`product-info`** with 7 stubs (size-chart, material-and-fabric, care-instructions, color-accuracy, fit-and-cut, print-techniques-overview, durability-and-wash-life)
- `ordering/reorder` and `ordering/gift-and-recipient` promoted to P0
- Golden questions extended with 13 new cases covering the new categories

### Changed (P1 review fixes — 2026-05-19)
- Consolidated duplicate `upload-rules` (kept `kb.ai-design-workflow.upload-rules`; removed `kb.product-capability.upload-rules`)
- Validator uniqueness key changed to composite `(id, language)` to support multilingual sibling entries
- Tightened `boundary` flags on shipping + after-sales: `forbid_commerce_facts: true` is now uniform (any specific number/ETA defers to API)
- Two new P0 categories materialized as stubs: `policies/` (terms-summary, privacy-policy, ip-and-copyright, content-policy) and `about-custyle/` (what-is-custyle, meet-the-crew, safety-stance, contact-us)
- New stub `kb.ai-design-workflow.print-technique-recommendation` covering "why did the AI pick this technique?" — surfaced from `ks-faq.md` + supplier docs survey
- Backfilled `source_of_truth` on 14 existing stubs with discovered authoritative files (ks-faq, 一对半面料选型分析, 颜色色值, bp-chapters, vibbi-prototype, Printful integration)
- `eval/coverage-gaps.md` overhauled with: identified gaps, source-mining table, and Notion-search result (none found)

### Added (P1 review fixes)
- `scripts/extract-coverage-gaps.ts` — design stub for runtime gap-extraction pipeline (per `INTEGRATION.md` §7)
