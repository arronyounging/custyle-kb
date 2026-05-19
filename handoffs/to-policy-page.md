# Handoff: To Policy Page

When a user asks about ToS, Privacy, IP, content policy, or any other legally-binding document, the KB should **link** to the canonical document — never paraphrase it.

## Why

- Paraphrasing legal text changes its meaning.
- Customers who need the policy need the **exact** text.
- Legal documents are versioned by date — KB summaries drift.

## Pattern

KB entry under `topics/policies/` holds a **plain-language overview** plus a prominent link to the canonical doc. The Answer LLM is constrained so it returns the overview + link, never an authoritative legal claim.

```markdown
## Quick answer

Custyle protects your designs as your own intellectual property. You retain rights to anything you create. We don't claim ownership of user designs.

**Full Terms:** https://custyle.ai/legal/terms
**IP & Copyright Policy:** https://custyle.ai/legal/ip

## Details

Plain-language explanation of the user-facing implications. Stops short of legal advice.

## When to defer

- User asks "Is my design legally mine?" (specific advice) → handoff to human + link to legal policy
- User asks about a copyright complaint they received → handoff to human; do not interpret
```

## Frontmatter conventions for `topics/policies/`

```yaml
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true           # don't pull general legal trivia
  forbid_production_claims: true
```

`source_of_truth` should include the URL of the published legal doc.

## What never goes in a policies entry

- Specific legal advice for a user's situation
- Claims about jurisdiction or enforceability
- Interpretation of a user's contract with a third party
- Suggestions to circumvent any policy
