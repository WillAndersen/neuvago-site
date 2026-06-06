# P4.2 Core Pages Premium Redesign

This pass brings the core public pages closer to the cinematic homepage direction introduced in P4.1.

## Scope

Updated pages:

- `/product`
- `/app`
- `/how-it-works`
- `/support`

No new routes were added.

## Design goals

- Reduce template/card-grid feeling on the core pages.
- Give each core page a clearer narrative role.
- Use larger cinematic hero sections, editorial modules, and stronger section rhythm.
- Preserve conservative wellness positioning and safety boundaries.
- Avoid body-placement or medical treatment imagery.

## Page roles

### Product

Product should feel like a high-end hardware + app system narrative:

1. the device
2. the app
3. the daily routine
4. the safety/research boundary

### App

App should own guidance and continuity:

1. start a session
2. follow a softer rhythm
3. return without pressure
4. connect back to the device

### How it works

How-it-works should feel like the practical ritual page:

1. place
2. start
3. return
4. fit it into daily life

### Support

Support should be calm utility:

1. orient the visitor
2. send them to the right next page
3. reduce friction
4. preserve trust and safety context

## DB-first note

The core public pages are DB-first via Supabase `page_content`. This pass intentionally locks the public presentation for product/app/how-it-works/support to curated local content through `src/lib/content/core-visual-overrides.ts` until database content is deliberately synchronized.

