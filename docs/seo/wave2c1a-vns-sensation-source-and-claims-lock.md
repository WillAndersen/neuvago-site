# Wave 2C.1A — VNS sensation source and claims lock

**Status:** Pilot source/claims lock<br>
**Locked:** 2026-08-27<br>
**Baseline:** `56995db45a43043606b51c4d63b5fa147f8807dd`<br>
**Route:** `/learn/what-does-vagus-nerve-stimulation-feel-like`<br>
**Wave ID:** `EN-007`

## Page job

Own the consumer question about what non-invasive auricular VNS feels like while preventing confusion with implanted VNS and preventing sensation from being presented as proof of target engagement or benefit.

## Binding claim boundary

Allowed:

- local outer-ear sensations such as light tingling, prickling, tapping or pulsing;
- adjustable intensity and gradual adjustment;
- product-specific mode descriptions already present in `src/content/product-v2.ts`;
- comfort and stop-use guidance grounded in the current NVG-001 working manual;
- the statement that sensation depends on device, protocol, contact and individual sensitivity;
- the statement that sensation alone does not prove selective target engagement or benefit.

Blocked:

- sensation proves that the vagus nerve is selectively engaged;
- stronger stimulation is better or more effective;
- a specific sensation predicts sleep, stress, recovery or clinical benefit;
- general taVNS research proves a Neuvago-specific outcome;
- treatment, diagnosis, cure or prevention language;
- publication of AI-generated ear anatomy, earpiece-placement or electrode-contact imagery as a final asset.

## Product-specific source lock

The page renders the current mode names, stimulation-pattern descriptions and sensation descriptions directly from `productV2Content.modes`. It does not duplicate or render the older benefit-oriented `intendedUse` strings.

Current working manual source reviewed:

- `Neuvago_Device_User_Manual_NVG-001_Revised.pdf`
- Model `NVG-001`
- Working revision dated 2026-07-02

Manual-derived boundaries used on the page:

- secure, balanced and comfortable earpiece contact;
- set intensity slowly;
- use the lowest comfortable level;
- stronger intensity is not necessarily better;
- stop when the feeling becomes unpleasant or the user feels unwell;
- persistent discomfort requires stopping and following support guidance.

The working manual is not treated as an immutable final IFU. The supplied/final instructions take precedence, and the route must be reviewed for drift whenever product instructions or mode content materially change.

## Primary research sources

1. Farmer AD et al. *International Consensus Based Review and Recommendations for Minimum Reporting Standards in Research on Transcutaneous Vagus Nerve Stimulation (Version 2020).* Frontiers in Human Neuroscience. 2021. PMID `33854421`; PMCID `PMC8040977`; DOI `10.3389/fnhum.2020.568051`.
2. Badran BW et al. *Laboratory Administration of Transcutaneous Auricular Vagus Nerve Stimulation (taVNS): Technique, Targeting, and Considerations.* Journal of Visualized Experiments. 2019. PMID `30663712`; PMCID `PMC6867597`; DOI `10.3791/58984`.
3. Kim AY et al. *Safety of transcutaneous auricular vagus nerve stimulation (taVNS): a systematic review and meta-analysis.* Scientific Reports. 2022. PMID `36543841`; PMCID `PMC9772204`; DOI `10.1038/s41598-022-25864-1`.
4. Redgrave J et al. *Safety and tolerability of Transcutaneous Vagus Nerve stimulation in humans; a systematic review.* Brain Stimulation. 2018. PMID `30217648`; DOI `10.1016/j.brs.2018.08.010`.

These sources support method/protocol context and safety-reporting boundaries. They do not become direct efficacy claims for Neuvago.

## Locked conversion architecture

Primary CTA:

- `See how Neuvago works` → `/how-it-works` → `neuvago_how_it_works_click`

Secondary CTA:

- `Explore the product` → `/product` → `neuvago_product_click`

Decision-support link:

- buyer guide → `/learn/how-to-choose-a-vagus-nerve-stimulation-device` → `neuvago_buyer_guide_click`

All events use the existing seven non-personal parameters. No new analytics vendor, cookie, storage key or personal parameter is introduced.

## Required internal links

- `/how-it-works`
- `/product`
- `/learn/how-to-choose-a-vagus-nerve-stimulation-device`
- `/research/topics/safety-and-tolerability`
- `/learn/auricular-vagus-nerve-stimulation`
- `/glossary/stimulation-intensity`
- `/glossary/electrode`
- `/glossary/target-engagement`
- `/legal/intended-use`

## Unique asset decision

The unique asset is an HTML/CSS sensation-and-comfort scale plus a stop-use decision flow. It is intentionally abstract and text-led. It is not an anatomical or instructional ear-placement illustration.

## Acceptance criteria

- final mode wording is imported from `productV2Content`;
- sensation, comfort, intensity, effect and target engagement are separated;
- no diagnosis or efficacy inference from sensation;
- comfort and stop-use language remains subordinate to supplied instructions;
- author, source reviewer, publication date and modified date are visible;
- primary sources are visible with descriptive anchor text;
- all required internal links are present;
- How It Works, Product and buyer-guide events are verified at runtime;
- route appears in Learn hub, sitemap, `llms.txt`, measurement plan and cluster audit;
- desktop and mobile browser QA pass without overflow, clipping or runtime errors.
