# Wave 2C.1D – Overstimulation source and claims lock

**Status:** Locked pilot source/claims contract<br>
**Locked:** 2026-08-30<br>
**Baseline:** `06e0cec5c91f3f3e75d6f7d3c8152b9709363579`<br>
**Route:** `/no/kunnskap/overstimulert`

## Page job

Own the Norwegian recognition query `overstimulert nervesystem` with a practical, trustworthy answer that treats *overstimulert* as ordinary-language recognition rather than a diagnosis.

The page must:

- distinguish incoming stimulus load from current capacity;
- cover sensory, digital, social, cognitive, emotional and bodily contributors;
- provide non-device actions before any product bridge;
- include a stimulus-load and recovery checklist;
- show safe alternatives when silence, breath focus or meditation adds discomfort;
- explain when fastlege, legevakt or emergency help should be considered;
- introduce Neuvago only as a late, optional wellness step.

## Claims boundary

Allowed framing:

- a person can describe feeling overwhelmed by sound, light, information, social demands or many tasks;
- sleep, hunger, pain, illness, stress and context may affect current capacity;
- reducing input, demands and decisions can be a practical first step;
- people vary in what feels calming or activating;
- persistent or severe symptoms may need professional assessment.

Not allowed:

- presenting `overstimulert nervesystem` as a medical diagnosis;
- claiming that the experience proves high cortisol, low vagal tone, abnormal HRV, autonomic dysfunction or a damaged vagus nerve;
- claiming that Neuvago treats sensory overload, anxiety, insomnia, ADHD, autism or another medical condition;
- implying that stronger stimulation is better;
- using general VNS research as direct proof of a Neuvago outcome;
- delaying urgent or appropriate healthcare.

## Product boundary

Neuvago is described as an external, ear-based general wellness product. Non-device actions come first. Product use must stay within the current intended use and supplied instructions. Stop if use feels uncomfortable or adds load.

The tracked commercial CTA is:

- `Se hvordan Neuvago fungerer` → `/no/slik-fungerer-det` → `neuvago_how_it_works_click`

The editorial CTA is intentionally not assigned a commercial conversion event:

- `Lær hvordan du kan roe ned` → `/no/kunnskap/hvordan-roe-ned-nervesystemet`

The existing seven-parameter, no-personal-data analytics contract remains unchanged.

## Source hierarchy

1. **Helsedirektoratet / Helsenorge – Langvarig stress**
   Used for compound stressors, lower capacity with poor sleep or health problems, micro-pauses and the threshold for discussing persistent stress with a GP.

2. **Helsedirektoratet / Helsenorge – Psykisk helsehjelp for voksne**
   Used for ordinary distress versus conditions that need help, fastlege/municipal pathways, and the emergency boundaries 113 and 116 117.

3. **Nottinghamshire Healthcare NHS Foundation Trust – Sensory processing**
   Used for general sensory-processing context, individual differences, effects of sleep/hunger/stress and small environmental adjustments. It is not used to diagnose sensory processing disorder.

4. **CDC – Improve Your Emotional Well-Being**
   Used for general coping principles, breaks, movement, social support and seeking professional support when stress interferes with daily life.

5. **Arnold, Goldschmitt and Rigotti (2023) – information overload review**
   Used for general context about information load, interruption, filtering, prioritisation and structural approaches. The review reports mixed evidence strength and does not diagnose an individual.

6. **Roetzel (2019) – information overload review**
   Used for the capacity-versus-information-load frame. It is not used as evidence for a neurological or psychiatric diagnosis.

## Visual and asset policy

The unique asset is rendered with existing HTML/table/callout blocks as a stimulus-load and recovery checklist.

Wave 2C.1D adds no AI-generated:

- ear anatomy;
- earpiece or electrode placement;
- contact diagram;
- medical instruction image.

## Technical lock

Expected repository scope:

- 5 modified tracked files;
- 2 new files;
- 7 files total;
- 1 new registry-generated public URL;
- 0 new physical `page.tsx` routes;
- 0 direct sitemap source changes;
- 0 robots changes;
- 0 package or dependency changes;
- 0 analytics-contract changes.

The package may install and audit the files, but it must not stage, commit or push.
