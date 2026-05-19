# Safety Flags

Frontmatter `boundary` flags map **1:1** to Converse Domain `ConverseAnswerInput.constraints`. This file is the spec.

## The three flags

### `forbid_commerce_facts: boolean`

| Value | Behavior |
|---|---|
| `true` | Answer LLM must not state prices, inventory counts, ETAs, order/payment statuses derived from this entry. Even if the entry contains an example price, treat it as illustrative — never quote as a current fact. |
| `false` | Entry contains general policy that does *not* expose live data (e.g., "we ship to 30+ countries" is policy; "$12 to Germany" is a live fact). |

**Maps to:** `ConverseAnswerInput.constraints.doNotInventCommerceFacts` (already in Converse V1).

### `forbid_external_facts: boolean`

| Value | Behavior |
|---|---|
| `true` | Answer LLM must answer only from this entry's body + provided context. No web knowledge, no training-data trivia, no extrapolation. |
| `false` | Entry is explicitly meant to invite general-knowledge contextualization (rare — usually for `about-custyle/` brand pieces). |

**Maps to:** `ConverseAnswerInput.constraints.doNotFetchExternalFacts` (already in Converse V1).

### `forbid_production_claims: boolean`

| Value | Behavior |
|---|---|
| `true` | Answer LLM must not claim a design was generated, saved, added to cart, ordered, shipped, or fulfilled — unless that fact comes from a non-KB context source (artifacts, workspace, commerce state). |
| `false` | Entry is explicitly process-illustrative (e.g., a how-it-works walkthrough where claiming "Custyle creates X for you" is the point). |

**Maps to:** `ConverseAnswerInput.constraints.doNotClaimArtifactCreated` (already in Converse V1).

## The defer_to_api block

When a KB entry covers a policy area that has both a static side (KB) and a dynamic side (API), declare specific deferral triggers:

```yaml
boundary:
  forbid_commerce_facts: false
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "specific order arrival date"
      handoff: transact.get_order
    - condition: "live shipping cost for this cart"
      handoff: transact.estimate_shipping
```

**Maps to:** Converse Domain `suggestedActions[]` with `requiresConfirmation: false` and the listed `domain.op` — or, depending on Converse implementation phase, a direct router hint to switch to that domain.

`handoff` strings must match Custyle Orchestrator op pattern: `^(transact|shop|design|inspire)\.[a-z_]+$`.

## Default for new entries

Maximum safety. Every new stub starts with:

```yaml
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
```

Loosen only with explicit justification in the entry body under a `## Why this boundary is open` section.

## How the merge happens (runtime preview)

```ts
// In ConverseSelectedContextHydrator (future change)
function mergeKbBoundary(
  base: ConverseAnswerInput["constraints"],
  kbEntries: KbEntry[]
): ConverseAnswerInput["constraints"] {
  // Be the most restrictive across all retrieved entries.
  return kbEntries.reduce((acc, entry) => ({
    doNotInventCommerceFacts: acc.doNotInventCommerceFacts || entry.boundary.forbid_commerce_facts,
    doNotFetchExternalFacts: acc.doNotFetchExternalFacts || entry.boundary.forbid_external_facts,
    doNotClaimArtifactCreated: acc.doNotClaimArtifactCreated || entry.boundary.forbid_production_claims,
    answerFromProvidedContextOnly: true, // always true when KB-grounded
  }), base);
}
```

**Iron rule:** when multiple KB entries are retrieved for one answer, the **most restrictive** boundary wins.
