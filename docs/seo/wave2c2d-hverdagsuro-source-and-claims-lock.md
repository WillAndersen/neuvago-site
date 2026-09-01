# WAVE 2C.2D.1 — SOURCE AND CLAIMS LOCK

## Status

This file is the canonical source-and-claims contract for the planned NO-025 page:

- **Page ID:** NO-025
- **Title:** Hverdagsuro og et nervesystem som ikke roer seg
- **Route:** `/no/tilstander/hverdagsuro`
- **Primary query:** `uro i kroppen nervesystemet`
- **Page job:** condition / lived experience
- **Publication gate:** C1
- **Source baseline:** `e0619c0d3969157700dadfc073289449846fe2ca`

Wave 2C.2D.1 does not publish the page and does not modify the repository. It locks the evidence roles, claim boundaries and review requirements that Wave 2C.2D.2 must satisfy.

This lock does **not** claim that a physician or an external medical specialist has reviewed the future page. The existing Neuvago editorial source-review architecture must be used, and the final 2D.2 payload must pass source and claims validation before publication.

## 1. Page-level editorial boundary

“Hverdagsuro” is ordinary-language lived-experience wording. It may describe a sense of bodily activation, restlessness, difficulty settling, shifting attention or irritability. It is not one diagnosis, does not automatically mean anxiety or panic disorder, and does not by itself prove autonomic or vagal dysfunction.

The page must:

1. begin with recognition and context rather than a medical label;
2. keep several possible contributors open;
3. separate hverdagsuro from stress, anxiety, overstimulation and broad dysregulation language;
4. offer low-risk non-device support before any Neuvago bridge;
5. include clear professional-assessment and urgent-help boundaries;
6. position Neuvago only as an optional wellness-routine context.

The page must not diagnose, score, triage, treat, prevent, cure or promise disease relief.

## 2. Source hierarchy

### Tier A — reader-visible authoritative context

The final page must include visible source cards for all eight source IDs below:

- `SRC-A-HN-ADULT` — normality and help threshold;
- `SRC-A-HN-ANXIETY` — ordinary unease versus anxiety-disorder boundary;
- `SRC-A-HN-STRESS` — stress and multifactor context;
- `SRC-A-HN-URGENT` — fastlege / 116 117 / 113 hierarchy;
- `SRC-A-WHO-STRESS` — general non-device stress-management context;
- `SRC-A-FDA-CAFFEINE` — caffeine sensitivity as one possible contributor;
- `SRC-C-NEUVAGO-INTENDED` — product intended-use boundary;
- `SRC-C-NEUVAGO-SAFETY` — modality- and product-specific safety context.

These sources may be paraphrased narrowly for the uses recorded in `source-register.json`. They do not support an individualized diagnosis or a Neuvago efficacy claim.

### Tier B — internal boundary sources

The following sources are internal editorial and claims checks. They do not have to appear as reader-visible source cards:

- `SRC-B-NLM-AGITATION`;
- `SRC-B-NICE-CG113`;
- `SRC-B-EU-MDR-A7`.

The MedlinePlus agitation source must never make “agitation” a synonym for ordinary hverdagsuro. It is used only to keep medical, substance- and medication-related possibilities open when symptoms are sudden, severe, unusual or accompanied by other concerning changes.

The NICE guideline is a diagnostic/treatment boundary, not a self-assessment tool.

EU MDR Article 7 is an internal advertising and claim-control boundary. It does not by itself certify the final page as compliant.

### Tier C — Neuvago-specific context

Neuvago sources define product communication boundaries and late pathways:

- `SRC-C-NEUVAGO-INTENDED`;
- `SRC-C-NEUVAGO-SAFETY`;
- `SRC-C-NEUVAGO-CAUTION`;
- `SRC-C-NEUVAGO-BUYER`.

General VNS or stress research must not be transferred automatically into a product-specific Neuvago benefit.

## 3. Required article meanings and exact audit markers

Wave 2C.2D.2 must preserve all of these meanings and include the exact audit markers shown:

1. `Hverdagsuro er en beskrivelse – ikke en diagnose`
2. `Uro betyr ikke automatisk angst eller panikklidelse`
3. `Behold flere forklaringer åpne før du konkluderer`
4. `Uro alene beviser ikke vagal eller autonom dysfunksjon`
5. `Fire spørsmål gir mer informasjon enn en symptomscore`
6. `Start med støtte som ikke krever en diagnose`
7. `Når uro bør vurderes av helsepersonell`
8. `Legevakt og akutt hjelp`
9. `Neuvago kan eventuelt inngå som et valgfritt steg i en bredere velværerutine`
10. `Sterkere stimulering er ikke nødvendigvis bedre`
11. `Generell informasjon. Ikke medisinsk rådgivning, diagnose eller behandling.`

The article may use additional wording, but it must not weaken or contradict these meanings.

## 4. Multifactor context

The page may invite the reader to consider context such as:

- sleep and recovery;
- current stress and accumulated load;
- pain, illness or a new physical change;
- medicines, substances or recent changes;
- caffeine and alcohol;
- work, relationships, finances and life events;
- mental-health context;
- environmental, digital, sensory or social load.

These are possible contributors or contextual questions, not a causal verdict. The page must not tell the reader to change or stop prescribed medicines without professional advice.

## 5. Non-device-first rule

Before any Neuvago mention, the article must offer simple, low-risk options such as:

- reducing immediate stimulation or task load;
- changing environment;
- taking a pause;
- gentle movement;
- rest, regular food or hydration where relevant;
- a simple grounding or breathing exercise without aggressive breath-hold instructions;
- talking with someone trusted;
- contacting health services when the threshold is met.

Each option must be framed as something that may help some people or clarify the situation, not as guaranteed treatment.

## 6. Professional-help and urgent-help boundary

The page must encourage assessment when unease is:

- new, strong, persistent or worsening;
- unexplained or markedly different from usual;
- accompanied by concerning physical or mental changes;
- interfering with sleep, work, relationships or ordinary daily function;
- creating fear about safety or the ability to cope.

The final copy must use the Norwegian hierarchy:

- fastlege in opening hours;
- legevakt 116 117 when the GP is unavailable and help cannot wait;
- 113 when the situation is acute and life or health is at stake.

The page must not invent an exhaustive emergency symptom list and must not route acute symptoms to Neuvago customer support.

## 7. Product claim boundary

A single late section may explain that Neuvago can be an optional part of a broader wellness routine. It must not imply that Neuvago:

- diagnoses the cause of unease;
- treats or prevents anxiety;
- relieves an anxiety disorder or another disease;
- resets or repairs the nervous system;
- normalizes cortisol, HRV or vagal tone;
- proves or corrects autonomic or vagal dysfunction;
- works better at stronger intensity;
- replaces professional assessment or treatment.

The primary late bridge is `/no/slik-fungerer-det`.

The secondary late bridge is `/no/kunnskap/hvordan-velge-vagusnervestimulator`.

The 2D.2 pilot must not link directly to `/no/produkt` from the NO-025 page.

## 8. Reflection and privacy boundary

The four reflection questions are static editorial prompts. The page must contain:

- no form;
- no quiz;
- no score;
- no personalized result;
- no symptom selection state;
- no local or server storage;
- no analytics event for reflection or health content.

No new analytics contract is permitted in Wave 2C.2D.2. Every page link, including the late How It Works and buyer-guide bridges, remains untracked in the pilot.

The following event fields remain prohibited:

`email`, `account_id`, `user_id`, `health_data`, `medical_history`, `symptom`, `checklist_selections`, `diagnostic_label`, `free_text`.

## 9. Counterpart boundary

Wave 2C.2D.2 is Norwegian-only.

`/conditions/anxiety` is adjacent but not equivalent and must not be assigned as the English counterpart. The same applies to `/conditions/stress`, `/learn/signs-of-a-dysregulated-nervous-system` and `/learn/how-to-calm-your-nervous-system`: they may be ordinary editorial links, but they are not hreflang equivalents.

A dedicated English page with the same editorial job is required before bidirectional hreflang can be created.

## 10. Illustration boundary

The roadmap identifies an illustration, but the final illustration is not required for the 2D.2 pilot. The semantic page must be complete without it.

A later illustration must not be:

- a diagnostic body map;
- a symptom score;
- a severity meter;
- the only carrier of essential information;
- an AI-generated final ear-anatomy or electrode-placement instruction.

No condition type or renderer extension is permitted in the locked 2D.2 scope.

## 11. Source lock and change control

The machine-readable source roles are in `source-register.json`. Claim requirements and prohibited phrase families are in `claims-matrix.json`.

Wave 2C.2D.2 must copy this file byte-for-byte to:

`docs/seo/wave2c2d-hverdagsuro-source-and-claims-lock.md`

Any change to the source roles, page job, claim boundary, help hierarchy, counterpart decision, privacy boundary or locked 2D.2 scope requires a new contract-lock version before implementation.
