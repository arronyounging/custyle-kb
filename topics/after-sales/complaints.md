---
id: kb.after-sales.complaints
intent_primary: "I want to file a complaint"
intent_aliases:
  - "I'm unhappy with my experience"
  - "Where do I escalate?"
  - "How do I report an issue?"
  - "This was bad — who do I tell?"
category: after-sales
audience: customer
language: en
confidence: medium
related:
  - kb.after-sales.defects
  - kb.after-sales.refunds
  - kb.about-custyle.contact-us
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "any complaint at any severity"
      handoff: converse.handoff_human
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Filing a complaint

## Quick answer

Tell us what went wrong — a human teammate handles all complaints directly. Include your order ID (if relevant) and a clear description; photos help if it's a product issue. We confirm receipt within one business day and follow up with next steps. No automated bounce-around — your message reaches a person.

## Details

How to file:

- **Through chat** (right here) — ask for support and we'll route you to a human teammate with all the context.
- **Through email** — the support email on our contact page. Include order ID + a clear description.

What helps speed it up:

- **Order ID** (if relevant) — find it in Account → Orders or your confirmation email.
- **A specific description** — not "it's bad," but "the print is cracked along the chest seam" or "the package arrived three weeks late."
- **Photos** for physical issues. Well-lit, showing the actual problem.

What to expect:

- **Acknowledgment within one business day.** Even if we can't resolve it yet, you'll know it reached a person.
- **A clear next step.** Either a resolution, a request for more info, or an honest timeline if it needs deeper investigation.
- **No script-runaround.** The teammate handling your complaint has authority to act, not just relay messages.

## When to defer

- Any complaint → human teammate, no exceptions.
- "Who do I escalate to if support doesn't resolve it?" → ask the teammate handling your case; they'll route to a manager. Verify path against actual ops.

## Editorial notes (review before promoting to high)

- "**Acknowledgment within one business day**" — **verify the actual SLA** with ops; this is the most prominent commitment in the entry. If ops can't sustain a 1-business-day acknowledgment, soften ("typically within a business day").
- "**Teammate has authority to act, not just relay**" — voice-honest claim of empowered support; **verify with ops** whether front-line support actually has decision authority or has to escalate everything.
- "**No automated bounce-around**" — claim of personal service; verify the actual support stack (if there's a ticket system that auto-routes, the language might need to acknowledge that).
- "**Support email on contact page**" — placeholder; once contact-us.md is fleshed out, this entry should cross-link to the canonical contact email/URL.

## Sources

- Inferred from customer-service best practice + brand voice ("confident, not apologetic")
- Verify against actual support SLA and workflow
