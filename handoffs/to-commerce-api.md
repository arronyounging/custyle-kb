# Handoff: To Commerce APIs

When a user question contains a **live commerce fact** that this KB cannot answer, the Answer LLM defers to the Custyle Orchestrator commerce APIs.

## Decision rule

KB answers **static policy** about how Custyle works. Commerce APIs answer **live state** about a specific product, cart, order, or user.

| If the user asks about… | Source | Handoff op |
|---|---|---|
| Price of a specific product | Live | `shop.get_pricing` (proposed; verify in `custyle-platform`) |
| Current stock / availability | Live | `shop.search_catalog` |
| ETA for a specific order | Live | `transact.get_order` |
| Status of a specific order | Live | `transact.get_order` |
| Cart contents / total | Live | already in Converse memory (`commerceStateIndex`) |
| Shipping cost for a cart | Live | `transact.estimate_shipping` |
| Payment / refund status | Live | `transact.get_payment_status` |
| Tracking number | Live | `transact.get_order` |

| If the user asks about… | Source | Where in KB |
|---|---|---|
| Where do you ship in general? | Static | `kb.shipping.regions-and-rates` |
| How long does production take? | Static | `kb.shipping.lead-time` |
| Can I cancel? | Static | `kb.ordering.modify-cancel` |
| What's your return policy? | Static | `kb.after-sales.returns` |

## How to express deferral in an entry

In frontmatter:

```yaml
boundary:
  forbid_commerce_facts: false        # policy is fine
  defer_to_api:
    - condition: "specific order arrival date"
      handoff: transact.get_order
    - condition: "live shipping cost for this cart"
      handoff: transact.estimate_shipping
```

In the entry body:

```markdown
## When to defer

- User asks for a **specific** order's arrival date → handoff `transact.get_order`
- User asks for current shipping cost for **their cart** → handoff `transact.estimate_shipping`
```

## How the Answer LLM signals the handoff

Per Converse Domain V1 schema, return a `suggestedAction`:

```ts
{
  label: "Check your order status",
  domain: "transact",
  op: "get_order",
  inputHint: { source: "user_query" },
  risk: "low",
  requiresConfirmation: false
}
```

The Answer LLM should also write a brief acknowledging sentence (Quick-answer-style) that the user's question requires live data and the next step is being taken.

## Op naming convention

`<domain>.<op>` where `domain ∈ {transact, shop, design, inspire}` and `op` is snake_case. The handoff string must validate against Converse `SuggestedAction` schema (see `converse-domain-implementation-plan.md` §6).

## Op verification

Op names in this file are the **target** specification. Before Phase 1 of KB-Converse integration, verify each listed op exists in `back/src/agent-orchestrator/domains/*` and matches the input schema. Update this file in sync.
