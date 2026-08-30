# Wave 2C.1E – Stuck-in-stress source and claims lock

**Status:** Locked pilot source/claims contract<br>
**Locked:** 2026-08-30<br>
**Baseline:** `6a8f6696d970cd01cc6078cfb07150687b9c177e`<br>
**Route:** `/no/kunnskap/fastlast-i-stress`

## Page job

Own the Norwegian recognition query `fastlåst i stress` with a practical, non-diagnostic, ordinary-language description of why a person may still feel activated after the most obvious pressure has passed.

The page must:

- localize the intent of `/learn/why-your-body-feels-stuck-in-stress` without copying over stronger causal language;
- describe persistent activation as a pattern with several possible contributors;
- distinguish a finished event from ongoing worry, pain, sleep loss, practical demands or environmental load;
- put non-device actions before any product bridge;
- include an activation-to-recovery state-shift diagram rendered through the existing timeline block;
- provide alternatives when breath focus, stillness or meditation adds discomfort;
- explain when fastlege, legevakt or emergency help should be considered;
- introduce Neuvago only as a late, optional general-wellness step.

## Claims boundary

Allowed framing:

- a person can describe feeling tense, wired, restless, watchful or unable to switch into a calmer activity;
- a transition out of stress may take time when demands, worry, poor sleep, pain or under-recovery remain;
- reducing one concrete demand can be a practical first step;
- recovery can be gradual and does not require an immediate feeling of complete calm;
- worry and rumination are discussed only as possible general contributors;
- persistent or severe symptoms may need professional assessment.

Not allowed:

- presenting `fastlåst i stress` as a medical diagnosis;
- claiming that a stress response must be “completed” or that the nervous system is literally stuck;
- claiming that the page can identify high cortisol, low vagal tone, abnormal HRV, autonomic dysfunction or brain changes in an individual;
- promising a nervous-system reset, trauma release, cortisol reduction or guaranteed recovery;
- claiming that Neuvago treats chronic stress, anxiety, PTSD, burnout, insomnia or another medical condition;
- using general VNS or stress research as direct proof of a Neuvago outcome;
- delaying urgent or appropriate healthcare.

## Product boundary

Neuvago is described as an external, ear-based general wellness product. Practical and non-device actions come first. Product use must stay within current intended use and supplied instructions. Stop if use feels uncomfortable or adds load.

The tracked navigation pathways are:

- `Slik fungerer Neuvago` → `/no/slik-fungerer-det` → `neuvago_how_it_works_click`
- `Utforsk Neuvago-enheten` → `/no/produkt` → `neuvago_product_click`

The primary editorial CTA is intentionally not assigned a commercial conversion event:

- `Slik kan kroppen skifte gir` → `#fra-aktivering-til-tilbakevending`

The existing seven-parameter, no-personal-data analytics contract remains unchanged. Timeline interactions, observations, source links and any self-reflection must not be collected as analytics payload.

## Source hierarchy

1. **Helsenorge / Helsedirektoratet – Langvarig stress**
   Used for compound stressors, ordinary symptoms, small pauses, practical changes and the threshold for discussing persistent stress with a GP.

2. **World Health Organization – Doing What Matters in Times of Stress**
   Used for short evidence-informed skills such as grounding, unhooking, making room for feelings and acting on values. It is not presented as a substitute for treatment.

3. **World Health Organization – Stress**
   Used for general stress-management context, routine, social support and the boundary between self-help and professional care.

4. **Brosschot, Gerin and Thayer (2006) – perseverative cognition review**
   Used for general context that worry and rumination may prolong stress-related affect and physiological activation. It is not used to identify the cause of one reader’s symptoms.

5. **Brosschot, Verkuil and Thayer (2010) – markers of chronic stress review**
   Used for cautious context around prolonged activation before and after stressors. Subjective activation is not treated as a clinical biomarker.

6. **Guidi et al. (2021) – allostatic-load systematic review**
   Used to explain that allostatic load is a research model of cumulative burden across systems, not a diagnosis or home test.

7. **McEwen and Gianaros (2011) – stress and allostasis review**
   Used for broad adaptation and stress-load context. It is not used to claim brain damage or structural change in an individual.

## Bilingual relationship

The Norwegian route has:

- `englishEquivalent: "/learn/why-your-body-feels-stuck-in-stress"`

The English counterpart receives:

- reciprocal `nb-NO` hreflang;
- one visible link labelled `Les denne siden på norsk`.

The two pages own the same broad intent but are not treated as literal line-by-line translations.

## Visual and asset policy

The unique asset is an HTML/CSS activation-to-recovery state-shift diagram rendered through the existing timeline block.

Wave 2C.1E adds no AI-generated:

- ear anatomy;
- earpiece or electrode placement;
- contact diagram;
- medical instruction image.

## Technical lock

Expected repository scope:

- 6 modified tracked files;
- 2 new files;
- 8 files total;
- 1 new registry-generated public URL;
- 0 new physical `page.tsx` routes;
- 0 direct sitemap source changes;
- 0 robots changes;
- 0 package or dependency changes;
- 0 analytics-contract changes.

The package may install and audit the files, but it must not stage, commit or push.
