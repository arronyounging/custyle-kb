---
id: kb.shipping.delivery-failure
intent_primary: "Delivery was attempted but failed"
intent_aliases:
  - "Carrier couldn't deliver"
  - "Returned to sender"
  - "Held at customs"
  - "Missed delivery attempt"
category: shipping
audience: customer
language: en
confidence: medium
related:
  - kb.shipping.lost-package
  - kb.shipping.customs-and-duties
  - kb.shipping.address-change
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
  defer_to_api:
    - condition: "specific failed-delivery event needing resolution"
      handoff: converse.handoff_human
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Delivery failed

## Quick answer

Three usual causes: nobody available to receive (carrier needs a signature or buzzer access), customs hold (the package is waiting on import paperwork or duty payment), or address problem (typo, missing unit, unrecognized). Tracking will tell you which one. Each has a different fix path — for missed attempts, schedule re-delivery with the carrier; for customs, pay or clarify; for address, see if it can be redirected.

## Details

By cause:

**Missed delivery attempt.**
- Carrier left a note or sent a notification. Schedule a re-delivery or arrange pickup directly with the carrier (USPS / FedEx / DHL portal).
- Usually two or three attempts before the package returns to sender.

**Held at customs.**
- Customs may need you to confirm duty payment or provide a tax/ID number (varies by country).
- Follow the carrier's contact prompt. We can't pay duties on your behalf retroactively.
- If the package stays in customs too long, it's destroyed or returned.

**Address problem.**
- Common: typo, missing apt/unit, format mismatch.
- If the carrier is still in possession, sometimes a redirect is possible — see [Address change](address-change.md).
- If it returns to sender, we can re-ship to a corrected address (usually with a re-shipment charge unless the typo was our error).

**Returned to sender.**
- Once a package returns to our facility, we'll reach out for next steps: re-ship, refund, or rebuild.
- Re-shipping requires a corrected, deliverable address.

## When to defer

- "Help me retrieve a package stuck at customs" → human teammate; we can advocate but can't pay duties on your behalf.
- "Re-ship a returned package" → human teammate, coordinates the re-ship logistics.
- Specific carrier interactions (rescheduling, pickup) → user handles these directly via the carrier; we can advise but not act on their behalf.

## Editorial notes (review before promoting to high)

- "**Two or three attempts before return**" — varies by carrier and region (USPS often 1-2, UPS often 3). Verify the most common Custyle routes.
- "**Re-shipping requires corrected address**" + "**typically with re-shipment charge unless our error**" — reasonable policy; verify against support workflow.
- "**Carrier portals for re-delivery**" — direct user to the carrier's site, which is correct, but verify support can help users find the right link.
- The customs-stuck path — "destroyed or returned if it sits too long" — is the actual customs reality but verify how Custyle handles the recovery / refund in that case.

## Sources

- Inferred from standard carrier behavior + custom-merch fulfillment practice
- Verify against ops + carrier integration
