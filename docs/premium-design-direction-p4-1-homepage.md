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
