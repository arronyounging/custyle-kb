# Coverage Gaps

Questions users actually ask that the KB **does not yet answer well**. Add to this file as you find them — don't lose them.

## Format

```
- [ ] <question text> — <source> — <suggested target entry id or "needs category">
```

## Known gaps (Phase 0)

> The list is intentionally empty at Phase 0 — populate from real customer transcripts once the chat surface is live, and from Notion / TG message history during the content fill-in batch.

### Sources to mine

When backfilling, mine these for real user phrasings:
- `~/Desktop/Custyle/Custyle 录屏` — user-session recordings
- `~/Desktop/Custyle/Custyle 截图` — screenshots
- `~/Desktop/Custyle/Custyle 测试集` — internal test cases
- Discord / Telegram channels once live
- Existing SEO articles' FAQ sections in `~/Desktop/Custyle/SEO/`

## Triage rules

When a gap is identified:

1. **Open `_TOC.md` for the relevant category** and add a planned entry row.
2. **Create a stub** with full frontmatter + `confidence: low` + body TODO.
3. **Add to `golden-questions.yaml`** so future regression catches it.
4. **Check this row off** when the stub exists. (The content fill is tracked at the entry level, not here.)

## Categories that don't yet exist

If a gap doesn't fit any P0 category, it goes in **Phase 1 backlog** below — not a new category until reviewed.

### Phase 1 backlog

- (none yet)
