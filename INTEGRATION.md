# Integration Plan — KB ↔ Converse Domain

> **Status**: Approved (2026-05-19)
> **Target**: First end-to-end KB-grounded answer in production
> **Owner**: arronyounging

This is the load-bearing document that connects the KB (this repo) to the Converse Domain (custyle-platform). Without this integration the KB cannot be consumed at runtime.

The reference for Converse Domain V1 is [`custyle-platform/docs/converse-domain-implementation-plan.md`](../Custyle%20Dev/custyle-platform/docs/converse-domain-implementation-plan.md). This document extends it.

---

## 1. The minimal hypothesis

The Converse Domain V1 main chain is **Selector → Hydrate → Answer**, with these context sources today:

```
availableCapabilities | resolvedArtifacts | currentWorkspace
| recentTurnsIndex | latestArtifactsIndex | commerceStateIndex
```

This integration adds **one new context source** — `platformKnowledgeIndex` — backed by this KB. Everything else stays the same.

Iron rule: the KB is **just another context source**, not a parallel system. The Selector decides if it's needed; the Hydrator pulls it; the Answer LLM treats it like any other grounded input.

---

## 2. Schema extensions (Converse-side)

### 2.1 `ConverseContextSelectorInput`

```ts
interface ConverseContextSelectorInput {
  // ... existing fields ...

  platformKnowledgeIndex?: Array<{
    id: string;              // kb.<category>.<slug>
    intent_primary: string;
    intent_aliases?: string[];
    category: string;
    summary: string;         // = Quick answer text
  }>;
}
```

The index is **compressed metadata only** — full bodies are NOT in the Selector input. The Selector picks ids from this list; the Hydrator pulls the bodies.

### 2.2 `ConverseContextSelectorDecision`

```ts
interface ConverseContextSelectorDecision {
  intent:
    | "capability"
    | "general_chat"
    | "style_advice"
    | "design_critique"
    | "artifact_compare"
    | "context_recall"
    | "explain_artifact"
    | "clarification"
    | "commerce_fact_handoff"
    | "platform_qa";                          // ← new

  selectedContext: {
    // ... existing fields ...
    selectedKnowledgeIds?: string[];          // ← new
  };

  // ... existing fields ...
}
```

`platform_qa` is the canonical intent for KB-grounded questions. The Selector may also use `selectedKnowledgeIds` under other intents (e.g., `capability` answers that benefit from a KB entry) — the field is decoupled from the intent enum.

**Hard constraint:** `selectedKnowledgeIds` must be a subset of the ids present in `platformKnowledgeIndex`. The Selector cannot invent ids — same rule as for artifact ids today.

### 2.3 `ConverseAnswerInput`

```ts
interface ConverseAnswerInput {
  // ... existing fields ...

  selectedKnowledge?: Array<{
    id: string;
    intent_primary: string;
    category: string;
    body_chunks: Array<{
      section: string;       // "Quick answer" | "Details" | "When to defer" | ...
      text: string;
    }>;
    boundary: {
      forbid_commerce_facts: boolean;
      forbid_external_facts: boolean;
      forbid_production_claims: boolean;
      defer_to_api?: Array<{ condition: string; handoff: string }>;
    };
  }>;

  constraints: {
    doNotInventCommerceFacts: boolean;
    doNotClaimArtifactCreated: boolean;
    doNotFetchExternalFacts: boolean;
    answerFromProvidedContextOnly: boolean;
    answerFromProvidedKnowledgeOnly?: boolean;   // ← new
  };
}
```

`answerFromProvidedKnowledgeOnly: true` is set whenever `selectedKnowledge` is non-empty. The Answer LLM may quote / paraphrase `Quick answer` text, but **must not** introduce facts not present in either `selectedKnowledge` or other provided context.

---

## 3. The KB index produced by this repo

The script [`scripts/export-for-rag.ts`](scripts/export-for-rag.ts) produces `kb-index.json`. Schema (Phase 0):

```ts
interface KbIndex {
  version: string;            // "0.1"
  generated_at: string;       // ISO timestamp
  entries: Array<{
    id: string;
    intent_primary: string;
    intent_aliases: string[];
    category: string;
    summary: string;          // = Quick answer
    boundary: {
      forbid_commerce_facts: boolean;
      forbid_external_facts: boolean;
      forbid_production_claims: boolean;
      defer_to_api?: Array<{ condition: string; handoff: string }>;
    };
    body_chunks: Array<{ section: string; text: string }>;
    related: string[];
  }>;
}
```

**Stubs (`confidence: low`) are excluded** — they would mislead the Answer LLM. Only `medium` and `high` confidence entries ship.

---

## 4. Distribution: how `kb-index.json` reaches the platform

Three options considered. Recommendation: **option B** (build-time bundling).

| Option | How | Pros | Cons |
|---|---|---|---|
| **A. Live fetch at runtime** | back/ fetches `kb-index.json` from GitHub Raw / R2 on each request (cached) | KB updates without redeploy | Latency, dependency on external resource, no atomic version with code |
| **B. Build-time bundle** ✓ | KB repo publishes to npm or git-submodule; `pnpm install` pulls the index; back/ reads it from disk | Atomic versioning, zero runtime dep, easy local dev | KB updates require a back/ redeploy |
| **C. DB upload** | A scheduled job parses the repo into Postgres rows | Queryable, supports pgvector later | Extra moving part, harder local dev |

**Phase 0 path**: Option B via git submodule or a published `@custyle/kb` npm package (decide during implementation — submodule is simpler, npm is cleaner).

`back/` reads `kb-index.json` once at boot, holds it in memory, and exposes it via a `PlatformKnowledgeRepository` service.

---

## 5. Implementation milestones (custyle-platform side)

Each milestone is one PR. Order matters — earlier PRs unlock later ones.

### M1 — `PlatformKnowledgeRepository`

**Path**: `back/src/agent-orchestrator/platform-knowledge/`

- `platform-knowledge.repository.ts` — loads `kb-index.json` at boot, exposes `getIndex()` and `getEntriesByIds(ids: string[])`
- `platform-knowledge.module.ts` — Nest module
- Smoke test: `pnpm test platform-knowledge.repository.spec.ts`

**Acceptance**: `getEntriesByIds(["kb.shipping.regions-and-rates"])` returns the entry, including `boundary` and `body_chunks`.

### M2 — Selector input plumbing

Modify `back/src/agent-orchestrator/domains/converse/converse-selector-input.builder.ts`:

- Inject `PlatformKnowledgeRepository`
- Add `platformKnowledgeIndex` field, populated from the repo's index (compressed — id / intent / category / summary only)

**Acceptance**: `ConverseSelectorInputBuilder` test verifies the field is populated with the current KB count.

### M3 — Selector schema + decision plumbing

Modify `back/src/agent-orchestrator/domains/converse/converse-context-selector.ts`:

- Add `platform_qa` to intent enum + Zod schema
- Add `selectedKnowledgeIds` to `selectedContext`
- Update Selector prompt to include the new candidate list and tell the model: "When the user asks a general platform / policy / how-things-work question, select the matching KB entry ids and set intent=platform_qa."
- Validate output: `selectedKnowledgeIds ⊆ platformKnowledgeIndex.map(e => e.id)`. Reject hallucinated ids.

**Acceptance**:
- "What's your return policy?" → `intent=platform_qa, selectedKnowledgeIds=[kb.after-sales.returns]`
- "When will my order arrive?" → `intent=commerce_fact_handoff` (unchanged)
- "What's your return policy for order #1234?" → `intent=platform_qa` with KB entry + a `defer_to_api` annotation downstream

### M4 — Hydrator + boundary merge

Modify `back/src/agent-orchestrator/domains/converse/converse-selected-context.hydrator.ts`:

- Add `selectedKnowledge` to hydrated output
- Merge `boundary` flags using **most-restrictive wins** (see [`boundaries/safety-flags.md`](boundaries/safety-flags.md) §"How the merge happens")

```ts
function mergeKbBoundary(
  base: ConverseAnswerInput["constraints"],
  entries: KbEntry[]
): ConverseAnswerInput["constraints"] {
  return entries.reduce((acc, e) => ({
    doNotInventCommerceFacts: acc.doNotInventCommerceFacts || e.boundary.forbid_commerce_facts,
    doNotFetchExternalFacts:  acc.doNotFetchExternalFacts  || e.boundary.forbid_external_facts,
    doNotClaimArtifactCreated: acc.doNotClaimArtifactCreated || e.boundary.forbid_production_claims,
    answerFromProvidedContextOnly: true,
    answerFromProvidedKnowledgeOnly: true,
  }), base);
}
```

**Acceptance**: Hydrator test passes a mixed set of entries with different flags; output is the strictest combination.

### M5 — Answer LLM prompt update

Modify `back/src/agent-orchestrator/domains/converse/converse-answer-client.ts`:

- Include `selectedKnowledge[].body_chunks` in the answer prompt
- Add system-level rule: "When `answerFromProvidedKnowledgeOnly` is true, you MUST ground your reply in `selectedKnowledge`. If the user asks a follow-up not covered there, say so and suggest the appropriate handoff."
- Surface `defer_to_api` triggers as `suggestedActions[]` when the user question hits the listed condition

**Acceptance**: A user asking "Do you ship to Germany?" gets an answer derived from the KB's Quick answer; the Answer's `grounding` field cites `kb.shipping.regions-and-rates`.

### M6 — `defer_to_api` → `suggestedActions`

In the Answer LLM output normalization:

- For each retrieved KB entry's `defer_to_api[]`, emit a `suggestedAction` if the entry's condition matches the user query.
- The mapping is the model's job, not a regex — Selector provides the candidates, Answer chooses.

**Acceptance**: "When will order #1234 arrive?" produces a Selector decision routing to `kb.shipping.tracking` AND a `suggestedAction` pointing at `transact.get_order`.

### M7 — End-to-end regression

Add to `back/src/agent-orchestrator/domains/converse-domain.service.spec.ts`:

- Replay every entry in [`eval/golden-questions.yaml`](eval/golden-questions.yaml) marked with `expected_kb_ids[]`
- Assert the Selector retrieves the expected ids
- Assert the Answer text contains `must_contain[]` and avoids `must_not_contain[]`
- Replay every entry in [`eval/boundary-tests.yaml`](eval/boundary-tests.yaml)
- Assert refusal / handoff behavior

This is the single gate that says "KB integration is live."

---

## 6. Versioning contract

The KB's `kb-index.json` declares `version: "0.1"`. Breaking schema changes bump the major. The Converse Domain `PlatformKnowledgeRepository` reads `version`, refuses to load on incompatible major version, fails the back/ boot with a clear error.

This protects against "KB shipped a breaking schema change; back/ silently degraded."

---

## 7. Observability hooks (Phase 1 — not blocking M1-M7)

Once the integration is live, instrument:

- `selector.platformKnowledgeIds.length` — distribution per turn
- `selector.platform_qa` rate — what fraction of turns become KB questions
- `kb.entry.retrieval_count{id}` — per-entry retrieval frequency → feeds content prioritization
- `kb.entry.miss_signal` — turns where Selector picked no KB id but Answer LLM hedged → seeds [`eval/coverage-gaps.md`](eval/coverage-gaps.md)
- `kb.entry.staleness` — exported by `validate.ts`; alert if any active entry is past `review_cadence_days`

Connect to the existing custyle-platform observability stack — not a new stack.

---

## 8. Out of scope (deliberately)

The following are tempting but **not** part of this integration:

- **Vector retrieval / pgvector / embeddings** — the Selector is an LLM; it picks ids from a candidate list. No vector store needed until the catalog exceeds Selector-prompt budget (~100 entries). Until then, the candidate list is the index itself.
- **A dedicated `converse.platform_qa` external op** — Per Converse V1 §11, intents are promoted to ops only when stable + frequent + UI-differentiated. `platform_qa` stays internal to `converse.reply` for now.
- **Multilingual at runtime** — Phase 0 is English-only. Multilingual is a separate cross-cutting effort.
- **Real-time KB hot-reload** — Option A in §4 is rejected for Phase 0.
- **User-personalized KB ranking** — a single global ranking is fine until evidence demands otherwise.

---

## 9. Acceptance for "KB integration is live"

When all of these hold:

- [ ] M1-M7 PRs merged in custyle-platform
- [ ] `kb-index.json` distributed via the chosen mechanism (npm or submodule)
- [ ] `pnpm test` in custyle-platform passes the new golden + boundary suites
- [ ] At least one Phase-1 P0 KB entry promoted to `confidence: medium` (so the index actually ships entries, not just stubs)
- [ ] Observability hooks shipping at least `selector.platform_qa` rate

Until then, the KB is correct but inert.
