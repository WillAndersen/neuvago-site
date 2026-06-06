# P4.1 Homepage premium redesign

This pass moves the homepage from a modular SEO-style layout toward a quieter cinematic health-tech product experience.

## Design direction

Neuvago should feel like quiet luxury nervous-system technology:

- warm cinematic product imagery
- large restrained typography
- fewer card grids
- clearer product/app/routine narrative
- research as quiet confidence, not marketing hype
- conservative claims and visible intended-use boundaries

## Homepage structure

P4.1 renders the homepage as:

1. Cinematic hero
2. Quiet proof strip
3. System reveal: device, guidance, routine
4. Ritual sequence: place, start, return
5. App guidance sequence
6. Research and boundaries module
7. Everyday pathways: morning, daytime, evening
8. Final CTA

## Notes

- The hero is video-ready but uses the approved still image for launch.
- Homepage content is intentionally overridden from local content for now because the page is DB-first and older Supabase `page_content` may still exist.
- Legacy homepage modules are retained in `src/content/homepage.ts` for type compatibility, but the app route renders the new premium modules.
- Product schema cleanup and VNS SEO audit behavior are not changed in this pass.

## Post-P4.1 QA

After deployment, run visual QA against:

- `/`
- `/product`
- `/app`
- `/how-it-works`
- `/research/topics/safety-and-tolerability`
- `/conditions/stress`
- `/conditions/sleep`

Pay special attention to:

- mobile hero proportions
- homepage scroll rhythm
- whether the homepage feels shorter and more bespoke
- repeated images
- whether any old body-placement imagery appears
- whether the research boundary language stays conservative

## P4.1.1 full-bleed hero adjustment

The homepage hero now uses a full-width cinematic image layer instead of a split text + rounded image card. The goal is to make the first screen feel more like a premium brand campaign and less like a modular template section.

Implementation notes:

- desktop and mobile images are rendered as full-bleed background media via `next/image`
- copy remains on the left with a warm cream gradient overlay for readability
- the layout remains video-ready; a future ambient video can replace the image layer while keeping the same structure
- proof chips stay inside the hero as a soft glass panel, while the darker proof strip below remains as a distinct rhythm break

QA focus after P4.1.1:

- desktop topfold should feel cinematic and full-width
- mobile topfold should stay readable without covering the product too heavily
- the first screen should feel more like a brand campaign than a component card
- LCP/performance should be checked again after deploy

