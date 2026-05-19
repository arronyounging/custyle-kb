---
id: kb.ai-design-workflow.upload-rules
intent_primary: "Can I upload my own design?"
intent_aliases:
  - "Do you accept custom artwork?"
  - "What image formats can I upload?"
  - "What are the upload requirements?"
  - "Max file size for uploads?"
  - "What resolution should my image be?"
  - "What's the color space requirement?"
category: ai-design-workflow
audience: customer
language: en
confidence: medium
related:
  - kb.ai-design-workflow.describe-vs-upload
  - kb.ai-design-workflow.copyright-and-safety
  - kb.product-capability.what-can-i-make
  - kb.policies.ip-and-copyright
boundary:
  forbid_commerce_facts: true
  forbid_external_facts: true
  forbid_production_claims: true
source_of_truth: []
last_verified: 2026-05-19
owner: arronyounging
review_cadence_days: 90
---

# Uploading your own design

## Quick answer

Yes — upload PNG, JPG, or SVG (typical formats). Higher resolution prints better; aim for at least 2× the size you want it to land at. sRGB color space is the safest bet. Once uploaded, the Crew works it into a print-ready file. You're responsible for the IP — only upload work you own or are licensed to use.

## Details

Practical upload guidance:

- **Formats:** PNG, JPG, SVG are the common ones. WebP and other modern formats are usually supported too.
- **Resolution.** The bigger the source, the better the print. For a chest-sized print on a tee (roughly 30×30 cm), aim for at least 2400 px on the longer side. Smaller works but loses detail.
- **Color space.** sRGB is the safest default. Other spaces (Adobe RGB, ProPhoto) may shift colors at the conversion stage — see [Color accuracy](../product-info/color-accuracy.md).
- **Transparent backgrounds.** PNGs with transparency are fine and often the right choice — the Crew renders them onto the product without a visible background box.
- **Max file size.** Stay under a sensible limit (10–25 MB typically). Very large files take longer to upload; the Crew downscales internally.

What happens after upload:

- The image goes through a content-safety check (no off-policy content).
- If you've also described the design (mixed mode), the Crew uses both signals.
- Ink (the artwork agent) refines for print: cleaning edges, adjusting contrast, sizing for placement.

IP reminder: you're responsible for what you upload. Don't upload copyrighted work you don't own — see [IP & copyright](../policies/ip-and-copyright.md).

## When to defer

- "Specific file rejected on upload" → human teammate; could be content-filter, format mismatch, or corrupt file.
- "Will my [niche format, e.g., AI / PSD] upload work?" → check at upload; if not, export to PNG/JPG/SVG first.
- "I have rights to this third-party design, can I prove it?" → human teammate for IP claims.

## Editorial notes (review before promoting to high)

- **Formats (PNG/JPG/SVG/WebP)** — **assumed standard**; verify against `back/src/uploads/**` actual MIME allow-list.
- "**2400 px on longer side for chest print**" — typical industry recommendation; verify Custyle's actual minimum-resolution policy.
- "**Max file size 10-25 MB**" — assumed reasonable; verify actual limit.
- "**sRGB safest**" — universal print recommendation, safe.
- "**Crew downscales internally**" — assumed; verify whether very large uploads are accepted or rejected at the gate.
- "**Mixed mode uses both signals**" — same flag as in `describe-vs-upload.md` — verify the live UI supports image+text together.

## Sources

- Industry-standard upload requirements for custom print
- Verify against `back/src/uploads/**` actual implementation
