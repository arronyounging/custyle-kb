# Intent Catalog

The canonical vocabulary of **what users ask Custyle**. This is the bridge between this KB and the Converse Domain selector.

## How this maps to Converse

Converse Domain `ConverseContextSelectorDecision.intent` currently has these values:

```
capability | general_chat | style_advice | design_critique | artifact_compare
| context_recall | explain_artifact | clarification | commerce_fact_handoff
```

This KB introduces **one new logical intent**: `platform_qa` — questions about Custyle the platform that need a knowledge-grounded answer (not artifact-grounded, not commerce-fact).

> A future Converse Domain change will add `platform_qa` to the selector enum and route to KB-hydrated answers.
> Until then, KB content can still be consumed via `capability` / `clarification` / `general_chat` intents with knowledge injection.

## Intent groups in this KB

KB entries are organized by **functional category** (where the user expects to find the answer in their mental model), not by selector intent. The mapping below shows which selector intent a category typically maps to.

| KB category | Typical selector intent | Notes |
|---|---|---|
| `product-capability` | `capability` / `platform_qa` | "What can I do here?" |
| `ai-design-workflow` | `platform_qa` / `clarification` | "How does the AI work?" |
| `catalog-and-pricing` | `platform_qa` | Static pricing logic only — actual prices defer to API |
| `ordering` | `platform_qa` / `commerce_fact_handoff` | Process is KB; specific order is API |
| `production` | `platform_qa` | Techniques/lead-time policy. Specific ETA defers |
| `shipping` | `platform_qa` / `commerce_fact_handoff` | Regions/policy is KB; this-order-tracking is API |
| `after-sales` | `platform_qa` | Returns/refund policy |
| `account-and-data` | `platform_qa` | Login flow, privacy stance |
| `policies` | `platform_qa` | Summarized; link to actual doc |
| `about-custyle` | `general_chat` / `platform_qa` | Brand story, the Crew |

## Boundary signal cheatsheet

For each entry, the `boundary` flags determine what the Answer LLM can do:

| Flag | When true, Answer LLM must NOT |
|---|---|
| `forbid_commerce_facts` | State prices, inventory, ETAs, order/payment status |
| `forbid_external_facts` | Cite anything outside provided context (no web, no training-data trivia) |
| `forbid_production_claims` | Claim a design/order was created, saved, added-to-cart, or fulfilled |

`defer_to_api[]` lists explicit triggers that escalate to the Custyle commerce/design APIs at runtime — these short-circuit the answer and route to a domain handoff.

## Don't invent new intents

If a user question doesn't fit any existing category, add it to [`eval/coverage-gaps.md`](../eval/coverage-gaps.md) first. Categories are only added with `arronyounging` approval.
