# Wave 2C.1C – Source and claims lock

**Status:** Pilot source/claims lock<br>
**Locked:** 2026-08-29<br>
**Source baseline:** `2cb51aab2e8e201beeb4de332dbe11ec352e1629`<br>
**Route:** `/no/kunnskap/kveldsrutine-for-nedtrapping`

## Page job

Own the Norwegian practical-intent query `kveldsrutine for å roe ned` with a useful 20–30 minute routine. The page must place non-device steps first and introduce Neuvago only as an optional, late wellness step.

## Locked customer-intent brief

- ID: `NO-020`
- Execution score: `90`
- Primary CTA: `Se hvordan en Neuvago-økt passer inn`
- Secondary CTA: `Les om søvn og nedtrapping`
- Unique asset: 20–30 minute timeline plus a short video with captions and transcript
- Required links: sleep, calming guide, tired-but-wired, recovery and How It Works

## Allowed claims

- A consistent evening routine may make the transition out of the day more predictable.
- Reducing strong light, screen pressure, noise, notifications and late decisions can be practical parts of a wind-down routine.
- A routine can include one calm activity such as reading, listening, a warm shower or gentle movement.
- A sleep diary can help identify patterns over multiple days.
- Neuvago may be included as an optional general-wellness routine step within its intended use and current instructions.

## Required boundaries

The page must not state or imply that:

- Neuvago treats insomnia or cures sleeplessness;
- the routine guarantees faster sleep or better sleep quality;
- Neuvago normalizes sleep architecture, cortisol, HRV or vagal tone;
- stronger stimulation is better;
- one evening sensation proves target engagement or benefit;
- sleep hygiene is a complete treatment for chronic insomnia;
- supplements, melatonin, herbs or medication should be started, stopped or adjusted through this page.

The page must explicitly distinguish ordinary routine support from assessment and structured treatment. Multi-component CBT-I is the evidence-based treatment context used to set that boundary; the page does not reproduce a CBT-I protocol.

## Source use

1. Helsenorge, `Gode råd for betre søvn` — general public guidance on schedule, morning light, evening light, screens, evening ritual, caffeine, alcohol, activity and sleep environment.
2. SOVno, `Behandling av langvarige søvnproblemer uten medisiner` — boundary between general advice and structured non-medication treatment.
3. SOVno, `Søvndagbok` — pattern tracking across one to two weeks.
4. SOVno, `Insomni` — chronic-insomnia treatment boundary.
5. Edinger et al. 2021, AASM clinical practice guideline, PMID `33164742`, DOI `10.5664/jcsm.8986` — behavioral and psychological treatment recommendations, including the boundary that sleep hygiene should not stand alone as chronic-insomnia treatment.
6. SOVno, `Årsaker til søvnproblemer` — keep multiple causes open and avoid one-factor explanations.

These sources support general guidance and claims boundaries. They do not establish a Neuvago-specific sleep effect.

## Video asset lock

The package includes:

- `/public/videos/neuvago/kveldsrutine-for-nedtrapping.mp4`
- `/public/videos/neuvago/kveldsrutine-for-nedtrapping-no.vtt`

The video is a silent, abstract motion graphic. It contains no AI-generated ear anatomy, electrode placement, earpiece contact, device rendering or medical procedure. It is a visual summary of the article timeline, not evidence and not a product-use instruction.

The rendered page must provide:

- native video controls;
- Norwegian caption track;
- a visible text transcript;
- an existing non-instructional evening image as poster;
- no autoplay and no analytics event added for video playback in this wave.

## Conversion measurement

Expected commercial next-step events:

- `neuvago_how_it_works_click` from `routine-product-bridge` to `/no/slik-fungerer-det`;
- `neuvago_product_click` from `routine-product-bridge` to `/no/produkt`.

The hero anchor to `#neuvago-i-rutinen`, the sleep-pathway link and video interaction must not be misclassified as commercial conversions. The existing seven-parameter, no-personal-data analytics contract remains unchanged.

## Cannibalization ownership

- `/no/kunnskap/kveldsrutine-for-nedtrapping` owns actionable evening-routine intent.
- `/no/kunnskap/trott-men-far-ikke-slappet-av` owns recognition of the tired-but-wired contradiction.
- `/no/tilstander/sovn` owns broad sleep-pathway and assessment context.

## Operational boundary

This package may install and audit the locked files. It performs no staging, commit or push.
