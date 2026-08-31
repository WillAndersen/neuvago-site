# Neuvago SEO Measurement Plan — P2.6

_Last updated: 2026-08-31_

## Purpose

This plan turns the Neuvago VNS authority cluster into a measurable SEO system.

The goal is not to produce more content blindly. The goal is to measure whether the existing cluster is being discovered, indexed, understood, and matched to the right search intent before deciding what to build next.

## Scope

This plan covers the public website and SEO authority layer:

- Learn
- Research
- Conditions
- Product
- How it works
- App as commercial/routine support

It does not cover admin, CMS, logged-in web, session playback, or app feature work.

## Primary goal

Make Neuvago increasingly visible for the category around:

- vagus nerve stimulation
- non-invasive vagus nerve stimulation
- implanted vs non-invasive VNS
- vagus nerve stimulator
- transcutaneous vagus nerve stimulation
- auricular vagus nerve stimulation
- tVNS / taVNS
- VNS safety and tolerability
- autonomic regulation
- nervous system regulation for stress and sleep

## Measurement stages

### Stage 1 — Indexation readiness, days 0–14

Primary questions:

- Are the target URLs in the sitemap?
- Can Google fetch them?
- Are they indexed?
- Are canonical URLs correct?
- Are pages internally linked?
- Are titles/descriptions distinct enough?

Primary actions:

- Submit or resubmit sitemap in Google Search Console.
- Inspect priority URLs with URL Inspection.
- Confirm no unexpected `noindex`, redirect, canonical, or blocked crawl issue.
- Do not judge ranking performance yet.

### Stage 2 — Early query matching, days 14–45

Primary questions:

- Which pages are receiving impressions?
- Which queries are triggering each page?
- Are the correct pages ranking for the correct intent?
- Are pages getting impressions but no clicks?
- Are commercial pages receiving any category-intent visibility?

Primary actions:

- Export Search Console page/query data every week.
- Sort by impressions first, not clicks.
- Identify query-page mismatches.
- Improve titles, intros, internal links, and comparison sections before adding new pages.

### Stage 3 — Optimization, days 45–90

Primary questions:

- Which pages are in positions 8–20 and can be lifted?
- Which pages have impressions but weak CTR?
- Which query families lack a strong landing page?
- Which authority pages send meaningful next-step traffic to Product, How it works, or App?

Primary actions:

- Update on-page title/meta/H1 only where data supports it.
- Add or adjust internal links based on query-page mismatch.
- Strengthen snippets for pages with impressions but low CTR.
- Create new content only when a real query gap is visible.

### Stage 4 — Content expansion, 90+ days

Primary questions:

- What topics have proven demand?
- Which pages are almost ranking?
- Where are users searching for a page that does not yet exist?
- Which category terms are still undercovered?

Primary actions:

- Build new pages based on Search Console evidence.
- Prioritize pages that support both authority and commercial intent.
- Avoid diagnosis-heavy conditions unless claims, evidence, and disclaimers are very clear.

## Core KPIs

| KPI | Why it matters | Where to check | Healthy early signal |
|---|---|---|---|
| Indexed target URLs | Pages must be indexed before ranking | Search Console URL Inspection / Pages | Priority pages appear as indexed |
| Sitemap discovered URLs | Confirms Google can see the cluster | Search Console Sitemaps | Sitemap processed without errors |
| Impressions by page | Shows whether Google is testing the content | Performance → Pages | Learn/Research pages begin getting impressions |
| Queries by page | Shows query-page fit | Performance → Page filter → Queries | Queries match page intent |
| CTR | Shows snippet/title fit | Performance | Improves after title/meta refinements |
| Average position | Shows ranking opportunity | Performance | Pages in 8–20 become optimization targets |
| Commercial path clicks | Shows authority-to-product flow | Analytics / event tracking | Authority pages send users to Product/How-it-works/App |
| Non-brand share | Shows category authority growth | Performance queries | More impressions from non-brand VNS terms |

## Priority target pages

Use this as the initial VNS cluster monitoring set.

| Role | URL |
|---|---|
| Vagus nerve foundation | `/learn/vagus-nerve` |
| VNS pillar | `/learn/vagus-nerve-stimulation` |
| Non-invasive VNS | `/learn/non-invasive-vagus-nerve-stimulation` |
| Implanted vs non-invasive VNS | `/learn/implanted-vs-non-invasive-vagus-nerve-stimulation` |
| Auricular VNS | `/learn/auricular-vagus-nerve-stimulation` |
| VNS sensation and comfort | `/learn/what-does-vagus-nerve-stimulation-feel-like` |
| Transcutaneous VNS | `/learn/transcutaneous-vagus-nerve-stimulation` |
| Nervous system foundation | `/learn/nervous-system-regulation` |
| VNS research overview | `/research/topics/vagus-nerve-stimulation` |
| tVNS research | `/research/topics/transcutaneous-vagus-nerve-stimulation` |
| Safety and tolerability | `/research/topics/safety-and-tolerability` |
| Autonomic regulation | `/research/topics/autonomic-regulation` |
| HRV research | `/research/topics/heart-rate-variability` |
| Stress condition | `/conditions/stress` |
| Sleep condition | `/conditions/sleep` |
| Product commercial page | `/product` |
| Practical explanation | `/how-it-works` |
| App/routine support | `/app` |

If a page does not exist in the current repo, skip it until that route is present and deployed.

## Query buckets to monitor

### Category intent

- vagus nerve stimulation
- VNS
- non-invasive vagus nerve stimulation
- implanted vs non-invasive VNS
- vagus nerve stimulation device
- vagus nerve stimulator

### Method intent

- transcutaneous vagus nerve stimulation
- tVNS
- taVNS
- auricular vagus nerve stimulation
- ear vagus nerve stimulation
- auricular branch vagus nerve stimulation

### Safety intent

- vagus nerve stimulation side effects
- VNS safety
- tVNS side effects
- non-invasive vagus nerve stimulation safety
- vagus nerve stimulator contraindications

### Evidence intent

- does vagus nerve stimulation work
- vagus nerve stimulation research
- tVNS research
- vagus nerve stimulation evidence
- autonomic regulation research

### Condition intent

- vagus nerve stimulation for stress
- nervous system regulation for stress
- vagus nerve stimulation for sleep
- HRV and nervous system regulation
- autonomic regulation and stress

### Commercial support intent

- non-invasive vagus nerve stimulator
- app guided vagus nerve stimulation
- vagus nerve stimulation device with app
- how to use a vagus nerve stimulator
- ear vagus nerve stimulator
- what does vagus nerve stimulation feel like
- vagus nerve stimulation sensation

## Wave 2C.1A pilot measurement

Monitor `/learn/what-does-vagus-nerve-stimulation-feel-like` as a customer-intent Learn page. The route should own sensation, comfort and intensity questions without taking branded Product intent or safety-evidence intent from their preferred pages.

Expected next-step events:

- `neuvago_how_it_works_click` from `hero-actions` and `final-cta`;
- `neuvago_product_click` from `hero-actions` and `final-cta`;
- `neuvago_buyer_guide_click` from `related-guides`.

Review query-page fit against `/product`, `/learn/auricular-vagus-nerve-stimulation` and `/research/topics/safety-and-tolerability`. Do not interpret a click as proof of product efficacy, and do not add personal data to the event contract.

## Wave 2C.1B pilot measurement

Monitor `/no/kunnskap/trott-men-far-ikke-slappet-av` as a Norwegian recognition-intent page. The route should own the exact everyday query without taking broad sleep-pathway intent from `/no/tilstander/sovn` or turning a lived experience into a diagnosis.

The primary CTA, `Se kveldsrutinen`, now points to the published routine page `/no/kunnskap/kveldsrutine-for-nedtrapping`. This editorial pathway is not assigned a new commercial analytics event; it should be evaluated as an internal content progression from recognition to practical routine.

Expected tracked next-step event:

- `neuvago_how_it_works_click` from `hero-actions` to `/no/slik-fungerer-det`.

Review query-page fit against `/no/tilstander/sovn`, `/no/tilstander/stress`, `/no/kunnskap/hvordan-roe-ned-nervesystemet` and the English counterpart `/learn/why-you-feel-tired-but-cant-relax`. Do not interpret a routine click as proof of sleep benefit, and do not add personal data, symptoms or free-text content to the event contract.

## Wave 2C.1C pilot measurement

Monitor `/no/kunnskap/kveldsrutine-for-nedtrapping` as the owner of actionable Norwegian evening-routine intent. Keep query ownership distinct from the tired-but-wired recognition page and the broader sleep pathway.

Untracked editorial pathways:

- hero anchor `Se hvordan en Neuvago-økt passer inn` to `#neuvago-i-rutinen`;
- secondary hero CTA to `/no/tilstander/sovn`;
- internal bridge from `/no/kunnskap/trott-men-far-ikke-slappet-av`;
- video playback, captions and transcript interaction in this wave.

Expected tracked product-bridge events:

- `neuvago_how_it_works_click` from `routine-product-bridge` to `/no/slik-fungerer-det`;
- `neuvago_product_click` from `routine-product-bridge` to `/no/produkt`.

Treat these events as navigation signals, not proof of sleep benefit, treatment response or target engagement. Keep the existing seven non-personal parameters only; do not add symptoms, sleep diary content, free text, account identifiers or health data.

## Wave 2C.1D pilot measurement

Monitor `/no/kunnskap/overstimulert` as the owner of ordinary-language Norwegian recognition intent around `overstimulert nervesystem`. Keep query ownership distinct from the broader calming guide and the stress condition pathway.

Untracked editorial pathway:

- `Lær hvordan du kan roe ned` from `hero-actions` to `/no/kunnskap/hvordan-roe-ned-nervesystemet`.

Expected tracked next-step event:

- `neuvago_how_it_works_click` from `hero-actions` to `/no/slik-fungerer-det`.

Treat the event as navigation to product mechanics, not evidence that Neuvago treats overstimulation or a related condition. Keep the existing seven non-personal parameters only; do not add symptom selections, checklist answers, free text, account identifiers or health data.

## Wave 2C.1E pilot measurement

Monitor `/no/kunnskap/fastlast-i-stress` as the Norwegian owner of lived-experience intent around `fastlåst i stress`. Keep query ownership distinct from the broader calming guide, the stress condition pathway and the English counterpart.

Untracked editorial pathway:

- `Slik kan kroppen skifte gir` from `hero-actions` to `#fra-aktivering-til-tilbakevending`.

Expected tracked next-step events:

- `neuvago_how_it_works_click` from `hero-actions` to `/no/slik-fungerer-det`.
- `neuvago_how_it_works_click` from `stuck-stress-product-bridge` to `/no/slik-fungerer-det`.
- `neuvago_product_click` from `stuck-stress-product-bridge` to `/no/produkt`.

Treat these events as navigation signals, not evidence of a nervous-system reset, cortisol reduction, trauma release, treatment response or target engagement. Keep the existing seven non-personal parameters only; do not add timeline interactions, observations, symptom descriptions, free text, account identifiers or health data.

## Wave 2C.1F pilot measurement

Monitor `/no/kunnskap/restitusjon-og-regulering` as the Norwegian owner of everyday recovery-capacity intent around `restitusjon nervesystemet`. Keep query ownership distinct from the broad regulation pillar, the stress and sleep pathways, the HRV guide and the English counterpart.

Untracked editorial pathways:

- `Bygg en roligere rutine` from `hero-actions` to `#bygg-en-roligere-rutine`;
- the recovery map, HRV/vagal-tone links, `/no/app` and the reciprocal language link.

Expected tracked next-step events:

- `neuvago_product_click` from `hero-actions` to `/no/produkt`;
- `neuvago_how_it_works_click` from `recovery-product-bridge` to `/no/slik-fungerer-det`;
- `neuvago_product_click` from `recovery-product-bridge` to `/no/produkt`.

Treat these events as navigation signals, not proof of recovery, HRV normalization, increased vagal tone, treatment response or target engagement. Keep the existing seven non-personal parameters only; do not add recovery scores, HRV values, routine answers, symptom descriptions, free text, account identifiers or health data.

## Wave 2C.2A pilot measurement

Monitor `/learn/implanted-vs-non-invasive-vagus-nerve-stimulation` as the English owner of direct implanted-versus-non-invasive comparison intent. Keep query ownership distinct from the broad VNS pillar, the non-invasive VNS guide, product selection intent, and the safety research topic.

Untracked editorial pathways:

- `Compare the categories` from `hero-actions` to `#comparison-table`;
- the hero link to `/learn/non-invasive-vagus-nerve-stimulation`;
- category, evidence, safety, legal and primary-source links.

Expected tracked next-step events:

- `neuvago_how_it_works_click` from `comparison-product-bridge` to `/how-it-works`;
- `neuvago_product_click` from `comparison-product-bridge` to `/product`;
- the existing buyer-guide classifier may record `/learn/how-to-choose-a-vagus-nerve-stimulation-device` from `related-guides`.

Treat these events as navigation signals, not evidence that one VNS method is superior, that implanted evidence transfers to Neuvago, or that the product has a clinical effect. Keep the existing seven non-personal parameters only; do not add medical history, suitability answers, implanted-device status, symptoms, free text, account identifiers or health data.

## Wave 2C.2B pilot measurement

Monitor `/no/kunnskap/pause-i-arbeidsdagen` as the Norwegian owner of concrete workday-pause intent around `hvordan roe ned på jobb`. Keep ownership distinct from the broad stress pathway, the general calming guide and the recovery guide.

Untracked editorial pathways:
- `Prøv femminutterspausen` from `hero-actions` to `#fem-minutters-pause`;
- the hero link to `/no/app`;
- the timeline, video playback, captions, transcript, stress links and primary-source links.

Expected tracked next-step events:
- `neuvago_how_it_works_click` from `workday-product-bridge` to `/no/slik-fungerer-det`;
- `neuvago_product_click` from `workday-product-bridge` to `/no/produkt`.

Treat these events as navigation signals, not proof of stress reduction, cortisol change, HRV normalization, treatment response, improved performance or target engagement. Keep the existing seven non-personal parameters only; do not add workplace details, stress descriptions, symptoms, free text, email, account identifiers, user identifiers or health data.

## Weekly workflow

1. Open Google Search Console.
2. Set Search type to Web.
3. Use the last 28 days and compare to the previous 28 days once enough data exists.
4. Review Pages first.
5. Filter to one target page.
6. Review Queries for that page.
7. Log the top query families in `seo-vns-cluster-query-map.csv` or the weekly review template.
8. Decide one of four actions:
   - no action
   - title/meta refinement
   - internal linking adjustment
   - content update/new section
   - new page candidate

## Decision rules

### Rule 1 — Impressions but weak CTR

If a page receives impressions but CTR is weak, do not immediately create a new page.

First adjust:

- title
- meta description
- first screen clarity
- H1/subtitle
- comparison or answer block near the top

### Rule 2 — Impressions on the wrong page

If Google shows the wrong Neuvago page for a query, improve internal linking and page intent separation.

Example:

- Query: `tVNS safety`
- Ranking page: `/learn/non-invasive-vagus-nerve-stimulation`
- Preferred page: `/research/topics/safety-and-tolerability`

Action:

- Add contextual links from the Learn page to the Safety page.
- Add clearer safety language to the preferred landing page.
- Avoid duplicating safety content across all pages.

### Rule 3 — Position 8–20 means optimization first

If a page ranks in positions 8–20 for a high-priority query, optimize the existing page before creating a new one.

Potential actions:

- Add a clearer short-answer block.
- Improve title and H1 specificity.
- Add comparison table.
- Add 2–3 high-quality internal links from related pages.
- Strengthen evidence and limitations sections.

### Rule 4 — Position 30+ with relevant impressions may indicate content gap

If relevant queries appear but the best page ranks very low, evaluate whether the page is too broad or whether a new page is needed.

Example new-page candidates later:

- `/learn/vagus-nerve-stimulator`
- `/learn/taVNS`
- `/research/topics/auricular-vagus-nerve-stimulation`
- `/learn/vagus-nerve-stimulation-side-effects`

Do not build these until Search Console supports the need.

### Rule 5 — Medical-risk topics require extra caution

Do not prioritize new pages around migraine, tinnitus, depression, epilepsy, or anxiety without a dedicated claims and evidence review.

If these terms appear in Search Console, route users toward balanced research/trust pages rather than aggressive condition claims.

## Monthly review agenda

Use this once per month.

1. Which VNS pages are indexed?
2. Which pages received the most impressions?
3. Which queries are Google testing?
4. Which page/query pairs are mismatched?
5. Which pages have impressions but low CTR?
6. Which pages are in positions 8–20?
7. Which authority pages send traffic to product/how-it-works/app?
8. Which new content candidate has the strongest evidence?
9. What should be paused?
10. What one improvement should be shipped next?

## Recommended next actions after 30–45 days of data

Prioritize in this order:

1. Snippet/title refinements for pages with impressions but low CTR.
2. Internal link improvements for page-query mismatches.
3. Safety/contraindication expansions if safety terms appear.
4. Product/how-it-works commercial-intent refinements if device/stimulator terms appear.
5. New page only if a query family has impressions and no suitable existing landing page.

## Wave 2C.0A — organic conversion event taxonomy

The public English and Norwegian route groups mount a provider-neutral client
bridge. The bridge does not inject a new analytics vendor, create cookies or
send personal data on its own. If an externally configured `window.gtag` is
available, the bridge sends the event through it. Otherwise it pushes a custom
event object to `window.dataLayer` and dispatches the browser event
`neuvago:conversion` for future integration and QA.

| Event | Trigger | Primary use |
|---|---|---|
| `neuvago_how_it_works_click` | Internal click to the English or Norwegian How It Works page | Measure movement from education and customer-intent pages into product mechanics |
| `neuvago_product_click` | Internal click to `/product`, `/no/produkt` or the Norwegian redirect path | Measure qualified product discovery |
| `neuvago_buyer_guide_click` | Internal click to either VNS buyer guide | Measure decision-support engagement |
| `neuvago_buyer_checklist_download` | Click to either locked buyer-checklist PDF | Measure high-intent resource use |
| `neuvago_launch_access_click` | Click to `/shop` whose visible label refers to launch access or the waitlist | Measure prelaunch commercial intent |
| `neuvago_shop_click` | Other click to `/shop` | Preserve measurement when commerce wording changes |
| `neuvago_launch_signup_submit` | Email-form submit attempt on `/shop` | Measure launch-list form intent; successful API completion should be added as a separate event when the form is next revised |

Each event carries only non-personal page context:

- `conversion_target`
- `source_path`
- `destination_path`
- `source_locale`
- `source_page_group`
- `source_section`
- `link_text`

Do not add email addresses, account IDs, health information, free-text form
content or other personal data to these event parameters. Acquisition source,
medium and campaign should continue to come from the configured analytics
provider rather than being inferred by the site code.
