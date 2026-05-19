---
id: kb.shipping.lost-package
intent_primary: "My package never arrived"
intent_aliases:
  - "Where's my missing order?"
  - "Tracking says delivered but I didn't get it"
  - "I think my package is lost"
  - "Order disappeared in transit"
category: shipping
audience: customer
language: en
confidence: medium
related:
  - kb.shipping.tracking
  - kb.shipping.delivery-failure
  - kb.after-sales.defects
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "user reports a specific lost shipment"
      handoff: converse.handoff_human
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Lost package

## Quick answer

Three quick checks first: tracking status, neighbors / building / shared mailroom, and your shipping address. If those don't surface it, wait a couple of business days past expected delivery (some carriers mis-scan, packages turn up). Still nothing? Tell support — we'll file a claim and either send a replacement or refund.

## Details

The path, in order:

1. **Check tracking.** Sometimes "delivered" is premature — the carrier scanned the next stop. Try the carrier's site (not just the email link).
2. **Look around the delivery address.** Front porch, side gate, mailroom, neighbor's door. Carriers occasionally leave packages somewhere not obvious.
3. **Confirm the shipping address you gave.** A digit-off zip or missing apt number explains a lot of "missing" packages — it actually went to the wrong place.
4. **Wait 2–3 business days past expected delivery.** Carriers regularly resolve mis-scans within this window.
5. **File with us.** If steps 1–4 don't find it, tell support. Include your order ID and any tracking details you've seen. We'll file the carrier claim and follow up with you on the resolution.

What we'll typically do once a claim opens:

- File with the carrier (we have the relationship; you shouldn't have to chase them).
- Decide between a replacement (we re-produce the design and re-ship) and a refund (back to original payment).
- Keep you in the loop on which.

Goodwill case-by-case — claim outcomes vary with the carrier's investigation result and the order specifics.

## When to defer

- "Order #X is lost" (any time after 2 business days past expected) → human teammate, claim process.
- "Tracking says delivered, I don't have it, less than 2 business days late" → suggest the three checks above; if user insists, escalate.
- "I want both a replacement AND a refund" → human teammate decides; not a self-serve outcome.

## Editorial notes (review before promoting to high)

- "**Wait 2-3 business days past expected**" — common-sense window, not from source. Some platforms have stricter SLAs (e.g., must wait 7 days). Verify the actual policy window.
- "**File the carrier claim ourselves**" — strong promise; verify the actual support workflow handles this rather than asking the customer to file with carrier.
- "**Replacement vs. refund choice**" — implied by ks-faq "we'll replace it at no cost" framing for defects, but lost-package isn't a defect. Verify the actual lost-package resolution policy — some platforms only replace, some only refund, some let the customer pick.
- "**Goodwill case-by-case**" — voice-honest acknowledgment that not every claim is approved 100% — verify this matches support's actual posture.

## Sources

- Inferred from standard custom-merch lost-package handling
- Verify against ops policy + carrier claim workflow
