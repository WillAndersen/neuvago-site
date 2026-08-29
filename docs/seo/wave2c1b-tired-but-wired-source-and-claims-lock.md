# Wave 2C.1B – «Trøtt, men får ikke slappet av» source and claims lock

**Status:** Pilot source/claims lock<br>
**Locked:** 2026-08-29<br>
**Source baseline:** `41cc930f25f5b85fb429c5eee4371adb63ff5709`<br>
**Route:** `/no/kunnskap/trott-men-far-ikke-slappet-av`

## Git integration lock

The source copy and patch anchors are locked to the Wave 2C.1A commit above. Installation may run on a newer `main` only when local `main` and `origin/main` match and the current commit is a descendant of the source baseline. Existing newer changes are preserved through a canonical three-way merge. Any conflict stops before repository files are written.

## Page job

**Recognition, not diagnosis.**

Own the Norwegian recognition query `trøtt men får ikke slappet av` without turning a common lived experience into a diagnosis, a single physiological explanation or a product-treatment claim.

The page must:

- distinguish tiredness, sleepiness, activation and difficulty downshifting;
- keep multiple possible contributors open;
- put non-device strategies before the product bridge;
- include a practical tired-but-wired recognition checklist;
- explain when symptoms or daytime sleepiness should be assessed;
- connect late and optionally to Neuvago as a general-wellness routine.

## Locked conversion pathway

The Wave 2C.0 batch specified `Se kveldsrutinen` as the primary CTA. The separate page `/no/kunnskap/kveldsrutine-for-nedtrapping` belongs to the next publication unit and is not published in Wave 2C.1B.

To avoid a broken or prematurely published route, the primary CTA is temporarily locked to the in-page section:

- label: `Se kveldsrutinen`
- destination: `#kort-kveldssekvens`

The secondary CTA is:

- label: `Slik fungerer Neuvago`
- destination: `/no/slik-fungerer-det`
- tracked event: `neuvago_how_it_works_click`

When the future evening-routine page is later published, the primary CTA may be migrated from the in-page anchor to the final route after a separate route, claims, internal-link and event review.

## Claims boundary

Allowed framing:

- the phrase describes an experience and search intent;
- tiredness and sleepiness overlap but are not identical;
- worry, sleep loss, irregular schedules, long-term load, pain, substances, medicines and health conditions may contribute;
- activation or hyperarousal may be relevant research context for some insomnia populations;
- a short routine may support a calmer transition without guaranteeing sleep;
- Neuvago may be described as an optional general-wellness routine.

Blocked framing:

- diagnosing insomnia, autonomic dysfunction, high cortisol or “adrenal fatigue” from the experience;
- presenting one body sensation as proof of a specific mechanism;
- promising that Neuvago treats insomnia, normalizes cortisol, HRV, vagal tone or sleep architecture;
- implying that stronger stimulation is better;
- replacing medical assessment, CBT-I or other indicated care with a product routine.

## Source basis

### Norwegian official guidance

1. Helsenorge / Helsedirektoratet – `Søvn og søvnproblemer`
   - https://www.helsenorge.no/sovnproblemer/
   - Used for the Norwegian public-health pathway, self-help context and referral boundaries.

2. Nasjonalt senter for søvnmedisin (SOVno), Helse Bergen – `Insomni`
   - https://www.helse-bergen.no/nasjonal-kompetansetjeneste-for-sovnsykdommer-sovno/sovn-og-sovnsykdommer/insomni/
   - Used for chronic-insomnia framing, assessment and non-medication treatment context.

3. Nasjonalt senter for søvnmedisin (SOVno), Helse Bergen – `Søvndagbok SOVno`
   - https://www.helse-bergen.no/nasjonal-kompetansetjeneste-for-sovnsykdommer-sovno/sovndagbok-sovno
   - Used for the one-to-two-week sleep-diary recommendation.

4. Helsenorge / Helsedirektoratet – `Langvarig stress`
   - https://www.helsenorge.no/psykisk-helse/langvarig-stress/
   - Used for the relationship between prolonged load, sleep, concentration, mood and bodily symptoms without making stress the only explanation.

### Peer-reviewed context

5. Neu D, Linkowski P, Le Bon O. `Clinical complaints of daytime sleepiness and fatigue...`
   - PMID: 20514923
   - https://pubmed.ncbi.nlm.nih.gov/20514923/
   - Used to distinguish sleepiness from fatigue while acknowledging overlap.

6. Riemann D et al. `The hyperarousal model of insomnia: a review of the concept and its evidence`
   - PMID: 19481481
   - DOI: 10.1016/j.smrv.2009.04.002
   - https://pubmed.ncbi.nlm.nih.gov/19481481/
   - Used only as research context for possible insomnia-maintenance mechanisms, not as an individual diagnosis.

7. Edinger JD et al. `Behavioral and psychological treatments for chronic insomnia disorder in adults: an American Academy of Sleep Medicine clinical practice guideline`
   - PMID: 33164742
   - DOI: 10.5664/jcsm.8986
   - https://pubmed.ncbi.nlm.nih.gov/33164742/
   - Used for the boundary that multicomponent CBT-I is recommended for chronic insomnia and sleep-hygiene advice alone is not equivalent treatment.

## Internal-link lock

Required:

- `/no/tilstander/sovn`
- `/no/tilstander/stress`
- `/no/kunnskap/hvordan-roe-ned-nervesystemet`
- `/no/kunnskap/regulering-av-nervesystemet`
- `/no/kunnskap/det-autonome-nervesystemet`
- `/no/slik-fungerer-det`
- `/no/juridisk/tiltenkt-bruk`
- `/learn/why-you-feel-tired-but-cant-relax`

The English counterpart must link visibly back to the Norwegian page and expose `nb-NO` in metadata alternates.

## Asset decision

The unique resource is implemented as a structured, text-based recognition checklist and short evening sequence inside the article shell.

Wave 2C.1B publishes no AI-generated ear anatomy, earpiece-placement, electrode-contact or other ear-based instructional image. Any future ear-based asset must use the real Neuvago unit and the established manual-production policy.

## Acceptance lock

- one published registry article;
- one generated Norwegian knowledge path;
- one H1 and valid Norwegian metadata;
- exact primary query and reciprocal English counterpart;
- non-device strategies before the product bridge;
- no unpublished 2C.1C route link;
- primary in-page CTA and tracked secondary How It Works CTA;
- source, author, reviewer and dates visible;
- desktop and mobile visual QA;
- no horizontal overflow;
- gtag, dataLayer fallback and QA-event checks for the secondary CTA;
- no personal data in analytics parameters;
- no staging, commit or push by the installation/audit package.
