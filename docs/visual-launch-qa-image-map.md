# Neuvago visual launch QA image map

Updated: 2026-06-02

## Purpose

The core public pages are DB-first. If Supabase `page_content` contains older image references, fallback changes in `src/content/*.ts` may not be visible in production. The runtime override layer in `src/lib/content/core-visual-overrides.ts` keeps the launch-critical image role map stable without changing copy or CMS structure.

## Launch-critical image goals

- Keep the homepage hero as the strongest product + app brand visual.
- Make `/product` feel device-led rather than repeating the homepage system image.
- Make `/app` feel app-led rather than device-led.
- Make `/how-it-works` feel instructional and step-oriented.
- Make `/support` feel like guidance/help, not another product landing page.
- Reduce repeated use of `device-phone-paired-editorial.png` across core pages.

## Core page image roles

| Page | Primary visual role | Current launch treatment |
|---|---|---|
| `/` | Brand/product first impression | Keeps the main device + app hero, uses detail/app/lifestyle visuals lower down. |
| `/product` | Device and physical product credibility | Uses device detail/cutout images in hero and product sections; app screen appears as supporting system layer. |
| `/app` | App guidance and continuity | Uses app home/session/library/progress screens as the primary visual system; device appears once as product bridge. |
| `/how-it-works` | Practical use flow | Uses device cutout, session screen, progress screen, and detail visual to support placement/session/repetition. |
| `/support` | Calm guidance and next-step clarity | Uses app library and lifestyle/detail visuals instead of repeating the core product hero. |

## Deliberately deferred

- Full new image bank.
- New authority-page illustration system.
- Rewriting all Learn/Research image cards.
- Replacing all repeated images globally.

## Next visual QA step

After deploying this pass, rerun the screenshot script and compare:

1. Homepage, product, app, how-it-works, and support first screens.
2. Repetition of the device + app paired image across core pages.
3. Mobile hero cropping on product/app/how-it-works/support.
4. Final CTA background repetition.
