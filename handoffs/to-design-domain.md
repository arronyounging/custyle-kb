# Handoff: To Design Domain

The Converse Domain answers questions. The **Design Domain** creates things. Some user questions belong on the creation side — this is when KB answers should explicitly invite that handoff.

## Decision rule

If the user's question is **answerable** in principle without creating anything, answer from KB.
If the user's question is really a **request to start creating**, suggest the design handoff.

| User says | Belongs to | KB action |
|---|---|---|
| "Can I customize a hoodie?" | Converse / KB | Answer yes; describe capability |
| "Make me a hoodie design" | Design | Suggest `design.create` |
| "Will it look good in red?" | Converse (if artifact exists) | Critique using artifact |
| "Try this in red" | Design | Suggest `design.edit` |
| "Help me think of a design idea" | Converse (consultation) | Route to `consultation` tool |
| "What can you do?" | Converse / KB | Answer from `product-capability/` |

## How to express in an entry

Body section:

```markdown
## Suggested next step

If you'd like to **start creating** right now, just describe what you have in mind — I can route you to the design flow.
```

In the Answer LLM output:

```ts
{
  label: "Start designing",
  domain: "design",
  op: "create",
  inputHint: { useLatestConsultationForm: false },
  risk: "low",
  requiresConfirmation: false
}
```

## The consultation route

If the user is exploring ("I don't know what I want yet"), route to `converse.reply + tool=consultation` rather than `design.create`. The consultation tool gathers preferences first and produces a `consultation_form` artifact that can later be consumed by `design.create + useLatestConsultationForm=true`.

| User signal | Route |
|---|---|
| "Make me X" (clear intent) | `design.create` |
| "I want to make something but don't know what" | `converse.reply + tool=consultation` |
| "What styles do you support?" | `kb.product-capability.*` answer first |

## Don't auto-execute

Per Converse Domain V1 §10, **suggested actions are never auto-executed**. The KB-derived suggestion is a CTA; the user (or the next turn) decides whether to take it.
