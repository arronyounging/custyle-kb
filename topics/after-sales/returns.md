---
id: kb.after-sales.returns
intent_primary: "What's your return policy?"
intent_aliases:
  - "Can I return a custom item?"
  - "Do you accept returns?"
  - "How do I send something back?"
  - "Can I return if I just don't like it?"
category: after-sales
audience: customer
language: en
confidence: medium
related:
  - kb.after-sales.refunds
  - kb.after-sales.defects
  - kb.after-sales.product-not-as-expected
  - kb.ai-design-workflow.iteration
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "specific return request for an existing order"
      handoff: converse.handoff_human
source_of_truth:
  - "~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md"
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# What's your return policy?

## Quick answer

Custom merch is made just for you, one piece at a time, so we don't take returns for buyer's remorse — there's no shelf to put it back on. Two exceptions: anything that arrives with a defect or quality issue we replace free, and if a design isn't landing right, iterate with the Crew **before** ordering — re-generations are unlimited.

## Details

Three cases, three different paths:

| Case | Path |
|---|---|
| The product arrived with a defect, wrong item, or damage | Replacement at no cost — see [Defects](defects.md). |
| The print looks different from the on-screen preview | Some variance is expected — see [Product not as expected](product-not-as-expected.md). Outside tolerance, treat as a defect. |
| You changed your mind / it doesn't fit your vibe | Not returnable. Iterate the design before ordering next time — and tell us what didn't work so the Crew can learn. |

A couple of practical notes:

- **Photo evidence** of the issue (well-lit, clearly shows the problem) speeds up resolution on any defect or damage claim.
- **Wrong size shipped** is a defect on our side — handled free. **Wrong size ordered** is a buyer choice and not returnable; we recommend checking the per-product size chart before ordering (see [Size chart](../product-info/size-chart.md)).
- **Bulk orders** may have different terms — covered case by case.

## When to defer

- Any specific return / replacement request → handoff to a human teammate. We process these case by case.
- Defect claim → see [Defects](defects.md) for the evidence checklist before handoff.

## Editorial notes (review before promoting to high)

ks-faq's source policy is essentially **two clauses**: "(a) defects → free replacement, (b) design dissatisfaction → unlimited regen before order." The three-case taxonomy below was structured by me; verify the policy actually matches.

- "**Buyer's remorse on custom merch is not returnable**" — implied by ks-faq's framing ("custom") but never stated as a "we don't accept returns" line. The legal policy doc (when published) should state this clearly; if it's softer there, this entry should soften too.
- "**Preview-vs-print variance is expected; outside tolerance → defect**" — invented framing, not in source. Industry-standard but the **tolerance threshold** is undefined. Need ops/QA to specify "what counts as outside tolerance."
- "**Wrong size shipped (defect, free)** vs **Wrong size ordered (buyer choice, not returnable)**" — my distinction, not in source. Some platforms allow size-exchange even when buyer ordered the wrong size. Verify.
- "**Bulk orders may have different terms**" — speculative. If bulk isn't supported yet (per `kb.ordering.bulk-orders` stub), this clause is premature. Delete or defer until bulk policy exists.
- "**Photo evidence speeds up resolution**" — common-sense, not in source. Safe but should be confirmed as the documented intake requirement.

## Sources

- `~/Desktop/Custyle/launch-strategy/kickstarter/ks-faq.md` — "What if I'm not satisfied with my merch?" (2026-05)
