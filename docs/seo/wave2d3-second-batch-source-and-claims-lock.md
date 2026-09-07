# Wave 2D.3 second-batch source and claims lock

Reviewed: 2026-09-06

This repository document records the implementation boundary established by the approved Wave 2D.3.1 V3 contract evidence:

```text
neuvago-wave2d31-second-batch-source-claims-pagejob-language-scope-contract-v3-20260906-191422.zip
SHA-256: 52cfb47e465318c5d4758a272bc99998cd8c5142a37068072f8f3969469e03d6
```

The contract is a targeted editorial source review, not a systematic review, meta-analysis, clinical guideline, external medical-specialist approval, or product-specific proof for Neuvago.

## Locked second-batch totals

- 50 reviewed sources across 23 source classes.
- 30 resolved source/claims gaps.
- 60 required statements, 40 qualified areas and 80 prohibited claim families.
- Five bilingual page pairs and ten actions.
- Seven new routes and three hardening actions.
- Seventeen union-scope paths: nine modified, eight new and zero conditional.
- No C2–C5 hard-gated action is included.

## Wave 2D.3.2A — bilingual VNS buyer-guide hardening

Existing routes:

- Norwegian: `/no/kunnskap/hvordan-velge-vagusnervestimulator`
- English: `/learn/how-to-choose-a-vagus-nerve-stimulation-device`

Page job: help readers compare device categories, current intended use, product-specific evidence, safety information, controls, app and account requirements, privacy, support and date-stamped ownership costs. The pages are neutral evaluation frameworks, not rankings or product verdicts.

The pair must not own best-device rankings, competitor verdicts, checkout intent, product-specific treatment efficacy or individual medical suitability.

### Required structure

Both languages use the same ten section jobs:

1. `short-answer`
2. `identify-device-category`
3. `read-intended-use-and-label`
4. `separate-method-from-product-evidence`
5. `placement-contact-and-protocol`
6. `safety-contraindications-and-stop-rules`
7. `controls-app-support-and-privacy`
8. `price-subscription-warranty-and-returns`
9. `twelve-point-evaluation-checklist`
10. `sources-and-review-date`

Each language contains six direct answers and the same fourteen reader-visible source records. `Article` and `BreadcrumbList` are required. `QAPage`, `Product`, `Review`, `AggregateRating`, `HowTo` and `MedicalWebPage` remain rejected. The existing protected decision-guide structured-data chain already emitted one `FAQPage` and one `ItemList` per buyer-guide route at the locked baseline; Wave 2D.3.2A preserves those two inherited types only when they remain singular and align exactly with the visible six direct answers and twelve checklist items. No new schema family is introduced, and no rich-result eligibility is asserted.

### Buyer-guide claim boundary

Required statements include:

- distinguish implanted, cervical non-invasive, auricular/transcutaneous and generic electrical-stimulation categories;
- read current intended use and labeling before benefit claims;
- separate method-level research from evidence for the named device;
- treat regulatory status as device-, indication-, jurisdiction- and version-specific;
- require transparent placement, contact and protocol information;
- take contraindications, precautions and stop rules from current applicable instructions;
- reject sensation, comfort or intensity as proof of target engagement or benefit;
- compare app access, data handling, account requirements, privacy, support and total cost;
- date-stamp price, shipping, subscription, returns and warranty facts;
- finish with a checklist and sources rather than a winner.

Rejected claims include universal winners, unsupported competitor rankings, CE or FDA status as proof of every benefit, evidence transfer from another device to Neuvago, stronger-is-better language, tingling as efficacy proof, personal suitability advice, universal protocols, undated commercial comparisons and direct checkout calls to action.

### Fourteen reader-visible sources

- S001 — Regulation (EU) 2017/745 on medical devices.
- S002 — FDA Overview of Device Regulation.
- S003 — FDA Device Labeling.
- S004 — FDA Medical Device Databases.
- S005 — FDA General Wellness: Policy for Low Risk Devices.
- S006 — FTC Health Products Compliance Guidance.
- S007 — 21 CFR Part 801 — Labeling.
- S008 — FDA PMA P970003 — VNS Therapy System.
- S011 — FDA Premarket Approval database.
- S012 — international consensus recommendations for minimum reporting standards in transcutaneous VNS research.
- S047 — FDA MAUDE database.
- S048 — FDA Medical Device Recalls database.
- S049 — FDA 510(k) Premarket Notification database.
- S050 — Regulation (EU) 2016/679 — General Data Protection Regulation.

Database records must be matched to the exact manufacturer, model, version, jurisdiction and intended use. A database entry is a verification input, not a comparative product verdict.

## Wave 2D.3.2A runtime recovery

The English Learn hub had zero buyer-guide links at baseline, and `src/app/(en)/learn/page.tsx` is outside the exact 2D.3.2A subwave scope. The link is therefore not introduced by this subwave. It is a mandatory carry-forward to 2D.3.2B, where the English hub is already an allowed modified path. The Norwegian knowledge hub continues to expose the buyer guide through its existing delivery chain.

## Wave 2D.3.2A repository scope

```text
M  src/content/decision-guides/how-to-choose-vns-device.ts
M  src/app/sitemap.ts
M  public/llms.txt
M  scripts/seo-vns-cluster-audit.mjs
M  docs/seo-vns-cluster-target-queries.md
M  docs/seo-measurement-plan.md
A  docs/seo/wave2d3-second-batch-source-and-claims-lock.md
```

The two buyer-guide routes already exist. Therefore Wave 2D.3.2A preserves:

```text
Sitemap URLs:       208 → 208
Static pages:       240 → 240
VNS SEO routes:      23 → 23
New public routes:    0
```

It also closes the pre-existing exact `llms.txt` coverage gap for `/no/kunnskap/vagusnervestimulering` without changing that route.

## Commercial, privacy and analytics boundary

A single late and neutral link to the relevant Neuvago product-information route is allowed in each language after the evaluation criteria and evidence limits. No checkout link, price winner, affiliate score, health input, personal recommendation, new analytics event, new analytics parameter or tracked language/source interaction is added.

Current price, delivery, app, subscription, returns, warranty, support and privacy facts must be checked on live official pages at the time of comparison.

## V3 FINAL1 explicit amendment and review boundary — 2026-09-07

The original 2D.3.1/V2 runtime prohibition of FAQPage and ItemList was not met; the V2 audit remains a failed 129/5 run. This local recovery explicitly admits only the inherited instances on the two named buyer-guide routes: one FAQPage with six direct answers, and one ItemList with twelve checklist items. It is not a general schema allowance.

All questions, answers, list titles, descriptions and list positions must match the visible DOM and the frozen content payload in order. Unicode NFC and whitespace may be normalized; wording, punctuation and case cannot be ignored. Counts alone do not satisfy this gate. Invalid JSON-LD, invisible/missing content and additional inherited instances remain blocking.

The English Learn-hub link remains OPEN and mandatory in 2D.3.2B. No hub file is modified here. This schema exception is explicitly reviewed again before LOCK COMMIT and is not inherited automatically by later waves. The five original contract registers remain immutable historical evidence; this section records the limited superseding A-runtime rule without changing the source/claims or repository scope.
