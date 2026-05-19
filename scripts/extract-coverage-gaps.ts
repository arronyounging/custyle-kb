#!/usr/bin/env tsx
/**
 * extract-coverage-gaps — design stub.
 *
 * NOT IMPLEMENTED YET. This file defines the contract and stays
 * version-controlled until the integration is wired up.
 *
 * Purpose
 * -------
 * Mine Custyle Converse Domain runtime logs for "the user asked something
 * we couldn't answer well" signals and turn them into structured rows
 * appended to ../eval/coverage-gaps.md.
 *
 * Trigger criteria for a "gap" (any one suffices)
 * -----------------------------------------------
 * 1. Selector intent = platform_qa  AND  selectedKnowledgeIds = []
 *    → user asked a platform question but Selector found no KB entry.
 *
 * 2. Selector intent = platform_qa  AND  Answer.grounding = []
 *    → entry retrieved but Answer LLM did not actually ground on it
 *      (signal that retrieval was bad, or that the retrieved entry was
 *      a near-miss).
 *
 * 3. Selector intent = clarification / general_chat
 *    AND Answer contains hedging markers ("I'm not sure", "you may want
 *    to check", "I'd recommend reaching out") above a threshold count
 *    → Answer LLM punted; KB likely missing an entry.
 *
 * 4. User explicitly escalated to human within 1 turn of a platform_qa
 *    answer → KB answer didn't resolve.
 *
 * Input contract
 * --------------
 *   --since <ISO date>          look at turns since this timestamp
 *   --source <s3:// | file>     where to read Converse logs from
 *   --threshold <int>           minimum gap occurrence count to surface
 *
 * Output
 * ------
 * Append rows to ../eval/coverage-gaps.md under "Phase 1 backlog":
 *
 *   - [ ] "<user phrasing>" — <count> occurrences — suggested: <kb.id or "new">
 *
 * with deduplication against existing rows (don't re-add what's already
 * tracked).
 *
 * Pipeline (planned, see INTEGRATION.md §7 Observability hooks)
 * -------------------------------------------------------------
 *   Converse log → query → gap-candidate JSON → llm-cluster → dedup → md PR
 *
 * The dedup step compares clustered user phrasings (semantically) against
 * the existing coverage-gaps.md rows AND against every entry's
 * intent_primary + intent_aliases to avoid filing rediscovery of existing
 * coverage.
 *
 * Cadence
 * -------
 * Run weekly. The output is a draft PR, not an autocommit. A human
 * (owner: arronyounging during Phase 0) reviews and lands.
 */

throw new Error(
  "scripts/extract-coverage-gaps.ts is a design stub — not implemented. " +
    "See file header for the planned contract.",
);
