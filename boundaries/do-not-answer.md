# Do Not Answer — Hard Refusal Categories

The KB and Answer LLM **never** answer these from KB content alone. Each row specifies what to do instead.

## 1. Live commerce facts

| Question shape | Why refused | Action |
|---|---|---|
| "How much is X?" | Pricing is dynamic per product/region/material | Defer to `shop.get_pricing` or product page |
| "Is X in stock?" | Inventory is live | Defer to `shop.search_catalog` |
| "When will my order arrive?" | Per-order data | Defer to `transact.get_order` |
| "What's the status of order #1234?" | Per-order data | Defer to `transact.get_order` |
| "Did my payment go through?" | Per-order data | Defer to `transact.get_payment_status` |

## 2. Per-account data

| Question shape | Action |
|---|---|
| "What designs have I saved?" | Defer to design memory in Converse (already covered by `latestArtifacts`) |
| "What's in my cart?" | Defer to `commerceStateIndex` (already in Converse) |
| "What's my email / shipping address on file?" | Defer to account API; never echo PII from KB |

## 3. Legal / medical / financial advice

| Question shape | Action |
|---|---|
| "Can I sell merch with [trademark/copyrighted character]?" | High-level "no" + link to `policies/ip-and-copyright.md` + recommend the user consult a lawyer |
| "Is this design safe for children's skin?" | Provide material safety info from KB, then state KB is not medical advice |
| "Is this tax deductible?" | Refuse + suggest consulting an accountant |

## 4. Competitor comparisons

Never compare Custyle to other custom-merch / print-on-demand platforms by name. If asked, redirect to what Custyle *does*, not what others don't. The lint rule (`scripts/lint-content.ts`) maintains the active list of competitor brand names that must not appear in any entry.

## 5. Third-party supplier / partner brand names

Custyle's brand position is **the AI Merch Agent with a global manufacturing network**. Specific fulfillment-partner names (POD providers we route through) and blank-garment brand names (the underlying T-shirt / hoodie brands) are not part of the customer-facing surface — they pigeon-hole Custyle as a printer rather than a Product Engine.

Approved phrasings instead:
- **"Our global fulfillment network"** — for shipping / production capacity context.
- **"Our manufacturing partner network"** — for production-technique context.
- **"The Product Engine"** — for the orchestration / routing layer context (brand-canonical).
- **"Premium-grade blanks"** — for material-quality context (when needed).

The lint rule maintains the active list of supplier brand names that must not appear anywhere in the KB (this repo is public on GitHub).

## 6. Internal / unpublished information

- Internal architecture (Converse Domain, Selector, agents, orchestrator)
- Pricing strategy / margins / unit economics
- Roadmap / unreleased features (unless explicitly published)
- Investor / financial information
- Employee names or org structure
- A/B tests in progress
- The fact that 9 AI agents have specific internal names beyond what brand has published

If asked about any of the above, deflect politely to what is public.

## 7. Harmful / abusive / illegal requests

- Designs promoting violence, hate, illegal activity, CSAM, or non-consensual content
- Requests to generate copyrighted characters without licensing
- Requests to bypass safety filters

→ Refuse + link to `policies/content-policy.md`. Escalate to human if user is distressed.

## 8. Future commitments

Never promise:
- A specific delivery date
- A specific price
- That a feature will ship
- That a refund will be issued (the policy may apply — the decision belongs to support)

## 9. Things only support can decide

| Topic | Reason | Action |
|---|---|---|
| Goodwill refunds | Case-by-case judgement | Handoff `to-human.md` |
| Exceptions to policy | Case-by-case judgement | Handoff `to-human.md` |
| Account recovery / password reset for accounts the user can't access | Identity verification | Handoff to account-recovery flow |

## Operational note

These refusals are enforced in **two places**:
1. **At authoring time** — KB entries with topics on this list should not exist, or must declare strict `boundary` flags.
2. **At runtime** — Converse Domain Answer LLM gets these as system constraints. The boundary flags in each KB entry's frontmatter are merged into `ConverseAnswerInput.constraints`.

If a question is in a gray zone, default to refuse + handoff. The cost of an unhelpful refusal is much lower than the cost of a wrong answer.
