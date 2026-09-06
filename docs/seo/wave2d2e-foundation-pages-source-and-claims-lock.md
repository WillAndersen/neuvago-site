# WAVE 2D.2E — Bilingual vagus-nerve foundation pages: source and claims lock

Baseline before implementation: `598c1eac85241e364d3373e9708bb248d671af51`
Contract review date: `2026-09-05`
Implemented routes:

- Norwegian: `/no/kunnskap/vagusnerven`
- English: `/learn/vagus-nerve`

## Page job

The pair owns the definition of the vagus nerve / cranial nerve X, paired gross anatomy, the brainstem-to-neck-to-thoracoabdominal course, mixed afferent/efferent fibres, major sensory, motor and parasympathetic function families, and high-level measurement and medical boundaries.

It does **not** take ownership from the dedicated methods, electrical VNS, reset, breathing, massage, calming, nervous-system regulation, HRV, vagal-tone, auricular-anatomy, auricular-VNS or ear-versus-neck pages. No new foundation route is created.

## Locked direct answers

**Norwegian:** Vagusnerven er den tiende hjernenerven og går fra hjernestammen til flere organer i hals, bryst og buk. Den inngår i sensoriske, motoriske og autonome funksjoner og kan ikke reduseres til en enkel «ro-knapp».

**English:** The vagus nerve is the tenth cranial nerve and runs from the brainstem to structures in the neck, chest and abdomen. It participates in sensory, motor and autonomic functions and should not be reduced to a simple “calm switch.”

Each page contains the same ten semantic section jobs and eight direct-answer questions in its own language. Both pages show one visible reciprocal language link.

## Reader-visible evidence set

The same sixteen reviewed sources are shown on each page, in this order:

`A-001`, `A-003`, `A-004`, `A-005`, `B-001`, `B-002`, `B-003`, `B-004`, `B-005`, `B-006`, `B-010`, `B-011`, `B-012`, `B-013`, `B-014`, `B-015`.

The full Wave 2D.2E.1 evidence register contains 30 reviewed sources across 11 source classes and resolves 16 source/claims gaps. This repository document is a canonical implementation record, not a new literature review or a claim of external specialist sign-off.

## Interpretation boundaries

- Humans have a left and a right vagus nerve; the singular is a collective expression, not proof of one uninterrupted cable.
- The nerve contains sensory, motor and parasympathetic fibres. Afferent/efferent labels describe direction, not a guaranteed subjective or clinical effect.
- Approximate fibre proportions are not universal values for every person, side, level or branch.
- Vagal innervation means participation in distributed regulation, not complete or exclusive control of every organ.
- The vagus nerve is not the whole parasympathetic nervous system and is not a biological “calm switch” or literal “reset button”.
- HRV, RSA and RespHRV can operationalise aspects of cardiac autonomic regulation under defined conditions; they are not direct tests of the whole vagus nerve and do not diagnose a weak, damaged or overactive vagus nerve.
- Interoception, homeostasis and neuroimmune regulation are distributed processes. Mechanistic or animal evidence is not automatically clinical treatment evidence.
- Behavioural practices, touch and electrical VNS are different intervention categories. Evidence must remain specific to the method, site, parameters, population, comparator and outcome.
- Regulatory decisions and external VNS studies are device- and indication-specific. General anatomy or VNS literature is not automatically product evidence for Neuvago.
- New or persistent swallowing, voice, fainting or neurological symptoms require qualified assessment; acute warning signs follow local emergency guidance rather than an online self-test.

## Structured data, privacy and product boundary

Both pages use `Article` and `BreadcrumbList` delivery. They do not use `QAPage` or FAQ schema. They collect no health input, produce no symptom score or personalised recommendation, add no analytics event or parameter, and contain no direct Product or Shop CTA. No stimulation, breathing, massage, pressure-point or electrical protocol is taught here.

## Exact implementation scope

Seven modified files and one new file:

1. `src/content/knowledge/no/articles/vagusnerven.ts`
2. `src/app/(en)/learn/vagus-nerve/page.tsx`
3. `scripts/seo-vns-cluster-audit.mjs`
4. `docs/seo-vns-cluster-target-queries.md`
5. `docs/seo-measurement-plan.md`
6. `src/app/sitemap.ts`
7. `public/llms.txt`
8. `docs/seo/wave2d2e-foundation-pages-source-and-claims-lock.md`

The VNS SEO audit remains 23 routes, the sitemap remains 208 URLs, the static-build baseline remains 240 pages, and no route, event, parameter, staging action, commit, push, deploy or database mutation is introduced by the implementation pilot.
