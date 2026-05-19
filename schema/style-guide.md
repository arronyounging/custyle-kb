# Custyle KB Style Guide

> Voice is set in stone by `custyle-brand/voice/`. This guide adapts it for KB entries.

## Voice in one paragraph

Custyle is the AI Merch Agent. Confident, calm, capable. We don't apologize for being an AI — we lead with it. We talk to creators, not customers. We are helpful but not servile. Plain English. No corporate-speak. No emoji in answers.

## The Quick Answer block

The most important 80 words in every entry. Written so the Answer LLM can return it **verbatim**.

Rules:
- **≤ 80 words.** Hard cap.
- **Lead with the answer.** No "Great question!" or "Sure, let me explain."
- **Active voice.** "We ship to 30+ countries." not "Shipping is available to 30+ countries."
- **Second person where natural.** "You can cancel within 2 hours." not "Customers may cancel."
- **No hedging.** If you're hedging in Quick answer, the entry isn't ready — push the nuance into Details.
- **No live data.** Never quote a specific price, ETA, or count. Speak about policy/logic, not state.
- **No legal paraphrase.** Don't summarize ToS — link it.

## The Details block

Everything that didn't fit in Quick answer:
- Edge cases (refund on partially-shipped order, etc.)
- Examples ("For a custom-printed hoodie shipping to Germany, …")
- Step-by-step flows when relevant
- What the user should expect *after* this answer (next screen, email confirmation, etc.)

Length: as long as it needs to be. But every paragraph must earn its place.

## The When-to-defer block

Explicit triggers for handoff. Format:

```markdown
## When to defer
- User asks **specific** order delivery date → handoff `transact.get_order`
- User asks current shipping cost for their cart → handoff `transact.estimate_shipping`
- User asks about a region not in our policy table → handoff to human
```

## The Sources block

Every entry must end with sources. Format:

```markdown
## Sources
- `custyle-brand/operations/channels.md#shipping`
- `custyle-platform/back/src/.../shipping.module.ts` (referenced for behavior verification, 2026-05-19)
- https://custyle.ai/help/shipping  (public help page, when published)
```

## Word choices

| Use | Don't use |
|---|---|
| "merch" | "products" (when speaking about the user's creation) |
| "create" | "generate" (the user creates; the AI helps) |
| "the Crew" | "agents", "bots" (when referring to the 9 named AI agents) |
| "AI Merch Agent" | "AI customization platform" |
| "you" | "users", "customers", "the customer" |
| "we" | "Custyle", "Custyle.ai" (third-person about ourselves is awkward in support) |

## Banned phrases

- "I'm just an AI" — never. We *are* the AI Merch Agent; that's the value prop.
- "Please understand that…" — patronizing.
- "Unfortunately…" — leads with negative framing.
- "As mentioned earlier…" — KB entries are read in isolation.
- "Our team will…" — be specific: who, how, when.
- "Reach out to support" — specify: chat, email address, hours.

## Formatting

- Use `##` for sections inside an entry. Never `#` (the title is implied by the entry's purpose).
- Use bullet lists for ≥ 3 items. For 2 items, prose is usually cleaner.
- Use tables for comparison and reference data — not for narrative.
- Backticks for handoff names (`transact.get_order`), URLs, code-like identifiers.
- No bold for emphasis in customer-facing copy. Bold is for table headers and metadata.

## Multilingual posture

Phase 0 is English-only. When `zh` ships, entries are translated as **siblings** (same `id`, different `language`), not as multi-language files. The translator must preserve voice, not literal wording.
