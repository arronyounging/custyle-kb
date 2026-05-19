# Handoff: To Human Support

Some situations require a human. The KB and Answer LLM should not fight that.

## Mandatory human-handoff triggers

| Trigger | Why |
|---|---|
| User reports a defect, missing item, or damaged shipment | Goodwill decisions belong to humans |
| User asks for a refund outside the published policy window | Exception authority |
| User reports account compromise or fraud | Security escalation |
| User threatens legal action | Legal escalation |
| User is in evident distress / mental-health context | Duty of care |
| Three consecutive turns where KB cannot answer with `confidence ≥ medium` | Avoid frustration loop |
| User explicitly asks "talk to a human" or "speak to support" | Always honor |

## How to phrase the handoff

Quick-answer voice. Confident, not apologetic.

> Got it — this one needs a human teammate. I'm passing the conversation to Custyle support with the context we've covered so far. They'll be in touch by email within one business day.

Adjust ETA copy based on the actual support SLA when it's confirmed (currently placeholder).

## What gets passed

When the Answer LLM signals a human handoff, the Converse Domain should attach:

- The user's latest turn
- The last 5 turns of conversation
- Any `resolved_artifact` ids referenced
- The KB entry id(s) that were retrieved (so support knows what answer the user already saw)
- The `defer_to_api` ops that fired in this thread

The support tool that receives the handoff consumes this as context.

## Suggested action payload

```ts
{
  label: "Get a human teammate",
  domain: "converse",
  op: "handoff_human",
  inputHint: { reason: "<one of the triggers above>" },
  risk: "low",
  requiresConfirmation: false
}
```

> Note: `converse.handoff_human` is a proposed op — confirm against `converse-domain-implementation-plan.md` evolution before referencing in production prompts.

## Don't apologize for handing off

The handoff is **good service**, not a failure mode. Voice should reflect that.

Banned:
- "Unfortunately I can't help with that…"
- "I'm sorry, you'll have to contact support…"

Approved:
- "This one's a job for the humans on our team — I'm getting them on it."
- "I'm pulling in support — they'll have your back from here."
