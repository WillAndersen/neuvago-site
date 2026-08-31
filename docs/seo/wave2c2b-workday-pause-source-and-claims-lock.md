# Wave 2C.2B — source and claims lock

## Locked page

- Page ID: `NO-021`
- Route: `/no/kunnskap/pause-i-arbeidsdagen`
- Primary query: `hvordan roe ned på jobb`
- Working title: `Pause i arbeidsdagen – hjelp kroppen å skifte gir`
- Search intent: practical / MOFU
- Strategic role: routine and use-moment content
- Implementation: Norwegian registry article rendered through `/no/kunnskap/[slug]`
- Source baseline: `dbe62b985ac67e0e803ece3c9cf798953b86aa1e`

## Search-intent ownership

NO-021 owns the concrete workday-pause use case:

- how to calm down at work;
- a short pause between work blocks;
- screen, cognitive, social and physical pause choices;
- a five-minute workday transition;
- when an individual pause is not enough.

It must not replace the broader owners of:

- general nervous-system calming;
- nervous-system regulation as a concept;
- persistent stress recognition;
- recovery capacity;
- overstimulation recognition;
- the broad stress condition pathway.

The direct query owner is `/no/kunnskap/pause-i-arbeidsdagen`. The main broad-stress support page remains `/no/tilstander/stress`.

## Source hierarchy

### Official Norwegian guidance

1. **Helsedirektoratet / Helsenorge — Langvarig stress**
   - URL: `https://www.helsenorge.no/psykisk-helse/langvarig-stress/`
   - Updated: 17 October 2025.
   - Permitted use: micro-breaks, rest, boundaries, work–life balance and the threshold for discussing persistent stress with a GP.
   - Limit: the page does not prove that one short pause changes cortisol, HRV or vagal activity for an individual.

2. **Arbeidstilsynet — Arbeid ved dataskjerm**
   - URL: `https://www.arbeidstilsynet.no/arbeidsmiljo/ergonomi/arbeid-ved-dataskjerm/`
   - Permitted use: variation, regular pauses, looking at longer distances, movement, ergonomic adaptation and employer responsibility.
   - Limit: guidance on work organization is not evidence for a product effect.

3. **Arbeidstilsynet — Sjekkliste for arbeid ved dataskjerm**
   - URL: `https://www.arbeidstilsynet.no/arbeidsmiljo/ergonomi/arbeid-ved-dataskjerm/sjekkliste-for-arbeid-ved-dataskjerm/`
   - Permitted use: task variation, rest opportunities, many short pauses and control over the work situation.

4. **Arbeidstilsynet — Arbeidsrelatert stress**
   - URL: `https://www.arbeidstilsynet.no/arbeidsmiljo/stress/`
   - Permitted use: work-related stress can arise from organization, workload, role clarity, control, support, conflict and other workplace-level factors.
   - Required boundary: do not turn an organizational problem into an individual regulation failure.

### Research and international guidance

5. **Albulescu et al. 2022 — micro-break systematic review and meta-analysis**
   - Journal: PLOS ONE.
   - DOI: `10.1371/journal.pone.0272460`
   - PMID: `36044424`
   - Permitted claim: pooled evidence supports small benefits for vigor and fatigue; performance effects were less certain and varied.
   - Forbidden leap: a micro-break guarantees productivity, prevents illness or produces a specific autonomic response.

6. **World Health Organization 2020 — Doing What Matters in Times of Stress**
   - URL: `https://www.who.int/publications/i/item/9789240003927`
   - Permitted use: short practical stress-management skills can be presented as optional tools.
   - Limit: the guide does not validate Neuvago or prove that one technique fits everyone.

## Claims boundary

### Permitted formulations

The article may say that a pause can:

- reduce incoming demands for a short period;
- create a clearer transition between tasks;
- add variation to screen-based or sedentary work;
- support subjective vigor or lower fatigue on average in some contexts;
- help a person notice practical needs such as food, water, movement or less stimulation;
- be one part of a wider workplace and wellness routine.

### Forbidden formulations

The article must not claim that a pause or Neuvago:

- diagnoses a dysregulated nervous system;
- resets or repairs the nervous system;
- guarantees calm, focus, productivity or recovery;
- lowers or normalizes cortisol for the individual;
- normalizes HRV or proves improved vagal tone;
- proves autonomic dysfunction or selective vagus-nerve activation;
- treats work stress, burnout, anxiety, ADHD, depression, insomnia or another condition;
- works through one universal mechanism or works equally for everyone;
- makes an unsafe or unhealthy work environment acceptable.

The article must contain the boundary that **stronger stimulation is not necessarily better**.

## Non-device-first sequence

The article must present non-device options before any product bridge:

1. finish or park one task;
2. reduce new inputs and notifications;
3. look away from the screen;
4. change posture or move when appropriate;
5. address food, water, toilet, pain or other concrete needs;
6. select one small next step;
7. raise persistent organizational problems at the appropriate workplace level.

Neuvago appears only after these choices and is described as an optional wellness step.

## Workplace boundary

The page must explicitly state that a personal pause cannot by itself resolve:

- chronic understaffing or excessive workload;
- unclear or conflicting roles;
- lack of control or support;
- harassment, violence, threats or conflict;
- unsafe scheduling or sustained excessive hours;
- a workplace that is not organized and adapted responsibly.

The page may direct readers to a manager, safety representative, union representative, working-environment committee, occupational health service or GP as context requires.

## Media lock — MED-012 short form v1

The published media asset is the short-form Norwegian motion graphic:

- MP4: `/videos/neuvago/pause-i-arbeidsdagen.mp4`
- Poster: `/images/neuvago/pause-i-arbeidsdagen-poster.webp`
- Captions: `/videos/neuvago/pause-i-arbeidsdagen-no.vtt`
- Duration: approximately 40 seconds.
- Dimensions: `1280 × 720`.
- Codec: H.264, no audio.
- Format: illustrated practical workday-pause motion graphic.
- Captions: Norwegian WebVTT, enabled by default.
- Transcript: seven lines in the article.

The short form summarizes the five-minute routine. A longer practical MED-012 version may be produced later, but it must preserve the same claims boundary and must not be required for this page to render.

The media must not contain:

- AI-generated ear anatomy;
- electrode-placement instruction;
- a false or enlarged Neuvago device;
- medical monitoring, treatment imagery or clinical outcome claims;
- biometric scores or a promise of a physiological reset.

If the real Neuvago unit is later shown in replacement lifestyle footage, its physical scale must remain realistic and consistent with the real compact handheld device.

## CTA and analytics lock

### Untracked editorial interactions

- `Prøv femminutterspausen` → `#fem-minutters-pause`;
- `Utforsk Neuvago-appen` → `/no/app`;
- video playback, captions and transcript interaction;
- links to stress, practical regulation, sources and intended use.

### Tracked navigation events

- `neuvago_how_it_works_click` from `workday-product-bridge` to `/no/slik-fungerer-det`;
- `neuvago_product_click` from `workday-product-bridge` to `/no/produkt`.

Only the established seven parameters are permitted:

- `conversion_target`
- `source_path`
- `destination_path`
- `source_locale`
- `source_page_group`
- `source_section`
- `link_text`

The event contract must not include:

- stress level or symptom answers;
- break choices or free text;
- medical history;
- email, account ID or user ID;
- health data, HRV, cortisol or other biometric values.

Events are navigation signals only. They are not evidence of benefit, treatment response, target engagement or suitability.

## Internal-link lock

The article must link to:

- `/no/tilstander/stress`;
- `/no/kunnskap/hvordan-roe-ned-nervesystemet`;
- `/no/kunnskap/restitusjon-og-regulering`;
- `/no/kunnskap/fastlast-i-stress`;
- `/no/app`;
- `/no/slik-fungerer-det`;
- `/no/produkt`;
- `/no/juridisk/tiltenkt-bruk`.

The Norwegian stress pathway must link once to `/no/kunnskap/pause-i-arbeidsdagen`. The homepage day card is a future optimization opportunity, not part of the locked Wave 2C.2B commit scope.

## Language and counterpart lock

No English page owns the exact workday-reset intent at publication time. Therefore:

- no `englishEquivalent` is added;
- no unsupported hreflang is created;
- `/learn/how-to-calm-your-nervous-system`, `/learn/recovery-and-regulation` and `/conditions/stress` remain adjacent English resources, not declared translations.

## Repository boundary

Wave 2C.2B creates one registry article and four supporting files, and modifies only the locked integration files. It creates no physical `page.tsx`, no direct sitemap entry, no robots change, no package.json change, no dependency and no analytics-contract expansion.

The implementation and audit package must not stage, commit, push or delete unrelated untracked work.
