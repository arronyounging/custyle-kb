# Coverage Gaps

Questions users actually ask that the KB **does not yet answer well**. Add to this file as you find them — don't lose them.

## Format

```
- [ ] <question text> — <source> — <suggested target entry id or "needs category">
```

## How this gets populated

Two channels:

1. **Authoring-time discovery** — When a writer encounters a question while writing an entry that doesn't fit anywhere, add it here immediately.
2. **Runtime extraction** — [`scripts/extract-coverage-gaps.ts`](../scripts/extract-coverage-gaps.ts) mines Converse logs weekly (design stub; not yet implemented).

## Triage rules

When a gap is identified:

1. **Open `_TOC.md` for the relevant category** and add a planned entry row.
2. **Create a stub** with full frontmatter + `confidence: low` + body TODO.
3. **Add to `golden-questions.yaml`** so future regression catches it.
4. **Check this row off** when the stub exists. (Content fill is tracked at the entry level.)

If a gap doesn't fit any existing category, it goes in **Phase 1 backlog** below — not a new category until reviewed.

---

## Known gaps (2026-05-19 review)

Identified by the skeleton-survey pass — questions that surfaced repeatedly in `ks-faq.md`, `vibbi-prototype/PRODUCT_DOC.md`, and `bp-chapters-1-6.md` but are not cleanly answered by existing stubs.

- [x] "Why did the AI pick DTF instead of DTG for my design?" — print technique selection logic — **resolved**: stub `kb.ai-design-workflow.print-technique-recommendation` created
- [ ] "Before I order, will the colors on the final print be adjusted from what I see in the preview?" — color matching expectation, pre-production — extend `kb.product-info.color-accuracy` Details (no new stub)
- [ ] "Can a design I saved earlier be turned directly into an order without re-creating it?" — design library → order workflow — extend `kb.account-and-data.find-my-designs` + `kb.ordering.place-order` Details (no new stub)

---

## Phase 1 backlog

Gaps that need owner triage before becoming stubs.

- [ ] (none yet — will be auto-populated by `extract-coverage-gaps.ts` once it lands)

---

## Sources to mine during content fill-in

When backfilling Quick answers and Details for the existing P0 stubs, these documents are the authoritative material:

| Source | Best for |
|---|---|
| `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` | 36 customer-facing Q&A — already voice-edited. Lift from here liberally for `ordering/`, `shipping/`, `after-sales/`. |
| `~/Desktop/Custyle/商品/供应链/一对半面料选型分析.md` | Material × technique compatibility matrix → `product-info/material-and-fabric` + `print-techniques-overview` + `print-technique-recommendation` |
| `~/Desktop/Custyle/商品/颜色名称和色值列表.markdown` | 100+ official color names + hex → `product-info/color-accuracy` |
| `~/Desktop/Custyle/BP-10B/phase3-writing/chapters/bp-chapters-1-6.md` | Leo story + Crew workflow (Ch 2-3) → `ai-design-workflow/how-it-works` + `about-custyle/*` |
| `~/Desktop/Custyle/vibbi-prototype/PRODUCT_DOC.md` | Consultation dual-track flow → `ai-design-workflow/consultation-intro` + `prompt-tips` |
| `~/Desktop/Custyle/seo-articles/ai-custom-merchandise-market-2026.md` | POD vs AI Merch Agent positioning → `product-capability/what-can-i-make` |
| `~/Desktop/Custyle/custyle-brand/identity/` | Brand voice (story, positioning, naming) → `about-custyle/*` |
| `~/Desktop/Custyle/custyle-brand/voice/crew.md` | Canonical Crew agent names → `about-custyle/meet-the-crew` |
| `~/Desktop/Custyle/商品/Printful/` | Fulfillment specifics (lead time, regions, methods) → `shipping/*` |
| `~/Desktop/Custyle/custyle-platform/back/src/` | Behavior verification — when policy text and code disagree, code wins; either fix policy or KB. |

### Notion exports

Searched 2026-05-19: **none found**. If Notion exports arrive later, mine them through this same triage process.
