# Wave 2C.1F – recovery and regulation source and claims lock

**Status:** Pilot source/claims lock<br>
**Wave:** Wave 2C.1F<br>
**Page ID:** NO-019<br>
**Route:** `/no/kunnskap/restitusjon-og-regulering`<br>
**Primary query:** `restitusjon nervesystemet`<br>
**Source baseline:** `c7181fd9ca29c09cd6470c80fab2d8fe6dfe01d4`

## Page job

Create a trustworthy Norwegian bridge between everyday recovery intent and the existing stress, sleep, HRV, vagal-tone, calming, app and product pathways.

The page must remain distinct from:

- `/no/tilstander/stress`, which owns broad stress and assessment intent;
- `/no/tilstander/sovn`, which owns broad sleep and sleep-assessment intent;
- `/no/kunnskap/hrv-og-vagusnerven`, which owns detailed HRV interpretation;
- `/no/kunnskap/regulering-av-nervesystemet`, which owns broad regulation education;
- `/learn/recovery-and-regulation`, which is the English counterpart rather than a literal translation.

## Locked framing

Recovery is framed as capacity returning after load through an interaction between sleep opportunity, actual load reduction, pauses/transitions and repeatable routines.

The page may explain that:

- rest and recovery are not always the same;
- ongoing demands can continue to consume capacity during formal time off;
- sleep is important but does not explain every recovery problem;
- short pauses can help when they actually reduce demands;
- HRV may provide context when measurement conditions and interpretation are controlled;
- recovery can be assessed through function and patterns over time rather than a single feeling or score.

The page must not turn these concepts into a diagnosis or a guaranteed causal explanation for one person.

## Unique asset

The locked asset is a four-domain recovery map across:

1. sleep and circadian opportunity;
2. total load;
3. pauses and transitions;
4. repeatable routines.

The map is an orientation tool. It is not a score, diagnostic model, treatment algorithm or proof of autonomic status.

## HRV and vagal-tone boundary

The page may state that HRV is variability in intervals between heartbeats and that interpretation depends on measurement method and context.

The page must preserve these boundaries:

- one HRV value does not diagnose recovery, stress, burnout or autonomic dysfunction;
- short-term, ultra-short-term and 24-hour values are not interchangeable;
- consumer-device scores are not direct measurements of the whole vagus nerve or the entire autonomic nervous system;
- vagal tone is not a single reserve that can be read directly from one consumer score;
- the page does not promise that Neuvago normalizes HRV, increases vagal tone or proves target engagement.

## Non-device actions first

The page must place practical support before any product bridge, including:

- realistic sleep opportunity and rhythm;
- review of ongoing load, pain, illness and care responsibilities;
- actual reduction of one demand;
- pauses without new input or performance targets;
- transitions between roles and activities;
- food, hydration, movement and appropriate professional support;
- a simple routine that can be repeated on ordinary days.

## Medical and safety boundary

The page is general information, not medical advice, diagnosis or treatment.

It must encourage qualified assessment when fatigue, sleep problems, pain, low mood, anxiety or functional decline are persistent, worsening, new or difficult to explain.

Emergency wording must preserve the distinction between:

- `113` for possible life-threatening emergencies;
- `116 117` when help cannot wait for the regular GP;
- urgent help and not being alone when there is risk of self-harm or harm to others.

## Product bridge

Neuvago may appear only after the educational and practical sections.

Permitted framing:

- a short, structured wellness step;
- non-invasive, ear-based stimulation with app guidance;
- part of a repeatable general wellness routine;
- optional and subordinate to sleep, load reduction, care and practical needs.

Prohibited framing includes claims that Neuvago:

- guarantees recovery;
- treats stress, insomnia, fatigue, burnout, pain or another medical condition;
- normalizes HRV or cortisol;
- increases vagal tone;
- repairs or resets the nervous system;
- proves selective vagus-nerve target engagement;
- replaces sleep, medical care, workplace changes or other necessary support.

Stronger stimulation must not be presented as better.

## CTA and analytics lock

Primary CTA:

- `Bygg en roligere rutine`
- destination: `#bygg-en-roligere-rutine`
- editorial in-page navigation;
- must not be collected as a commercial conversion event.

Secondary CTA:

- `Utforsk Neuvago-systemet`
- destination: `/no/produkt`
- expected event: `neuvago_product_click`;
- source placement: `hero-actions`.

Late product bridge:

- `Se hvordan Neuvago fungerer` → `/no/slik-fungerer-det` → `neuvago_how_it_works_click`;
- `Utforsk Neuvago-enheten` → `/no/produkt` → `neuvago_product_click`;
- source placement: `recovery-product-bridge`.

The `/no/app` editorial link remains untracked in this wave.

The analytics contract remains the existing seven non-personal parameters only:

- `conversion_target`;
- `source_path`;
- `destination_path`;
- `source_locale`;
- `source_page_group`;
- `source_section`;
- `link_text`.

Do not collect recovery scores, HRV values, symptom descriptions, routine answers, free text, email addresses, account IDs, user IDs or health data.

## Language discovery

The English counterpart is `/learn/recovery-and-regulation`.

The implementation must add:

- reciprocal `nb-NO` hreflang from the English page;
- one visible link labelled `Les denne siden på norsk`;
- no commercial conversion event for the language link.

The two pages share intent but are not treated as literal translations.

## Source hierarchy

Priority sources:

1. Helsenorge guidance on prolonged stress;
2. Helsenorge guidance on sleep;
3. WHO stress-management guidance;
4. peer-reviewed recovery research;
5. peer-reviewed HRV methodology and interpretation guidance;
6. a systematic review of allostatic load as research context.

Research findings must remain research context. They do not become direct product claims.

## Image and anatomy boundary

Wave 2C.1F introduces no AI-generated ear anatomy, electrode placement, earpiece contact or instructional product-use imagery.

Any future ear-based instructional asset must follow the existing manual-production policy using the real Neuvago unit.

## Repository safety

The installation/audit package must not stage, commit or push.

It must use the locked Git baseline, deterministic descendant-aware merge logic, an isolated detached worktree and an exact file-scope validator before browser testing.
