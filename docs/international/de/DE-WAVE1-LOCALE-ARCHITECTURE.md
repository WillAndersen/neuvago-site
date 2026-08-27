# DE Wave 1 – Locale architecture and German route shell

**Status:** Technical implementation package

**Wave 0 baseline:** German Launch Baseline v1

**Baseline source commit:** `43369d78e868238317571c30cf2131f4e75b857e`

**Wave 0 scope:** 45 concepts (`P0=20`, `P1=25`)

## Purpose

Wave 1 turns German into a real third site locale without pretending that the German content set is ready. The implementation establishes the technical contracts needed by later translation and SEO waves while keeping every unfinished German URL outside search indexes and the sitemap.

## Binding architecture decisions

1. `en`, `no` and `de` are defined in one central locale registry.
2. Norwegian SEO language tags are standardized to `nb-NO`, Open Graph uses `nb_NO`, and the root HTML language is `nb`.
3. German uses `de-DE`, `de_DE`, market `DE` and the stable prefix `/de`.
4. German remains a draft locale in Wave 1:
   - `indexable: false`
   - `sitemap: false`
   - `languageSwitcher: false`
5. Only the stable root route `/de` is created.
6. The other 44 German target paths remain candidates in the page registry. They do not become physical routes before DE Wave 2 freezes German search targets, terminology and slugs.
7. Draft German paths receive both metadata-level `noindex` and an HTTP `X-Robots-Tag: noindex, nofollow, noarchive` response guard.
8. `/de` is not blocked in `robots.txt`; crawlers must be able to read the `noindex` instruction.
9. No German route is added to the sitemap or to EN/NO `hreflang` sets during Wave 1.
10. Header and footer behavior is selected through one EN/NO/DE dictionary. The German shell contains no links to unfinished German child routes, login, account or checkout.

## Central files

```text
src/i18n/locale-registry.ts
src/i18n/routes.ts
src/i18n/site-chrome.ts
src/i18n/root-metadata.ts
src/i18n/page-registry.ts
src/i18n/page-registry.generated.ts
src/i18n/metadata.ts
```

The generated page registry is derived from:

```text
docs/international/de/de-launch-baseline-v1.json
```

It is regenerated and checked with:

```bash
pnpm de:registry
pnpm de:registry:check
```

## German route shell

Wave 1 creates exactly:

```text
src/app/(de)/layout.tsx
src/app/(de)/de/page.tsx
```

The shell is intentionally limited. It states that the German website is being prepared and links only to the current global English website. It contains no German sales flow and no translated product, safety or legal claims.

## Metadata and `hreflang`

`buildLocalizedPageMetadata()` reads route availability and publication status from the page registry.

A locale variant becomes eligible for canonical alternates only when all of the following are true:

- The variant has a physical route.
- The variant status is `published`.
- The locale status is `published`.
- The locale is indexable.

Consequently, the German Wave 1 shell has a self-canonical `/de`, but it does not advertise German `hreflang`. Existing EN/NO pages do not advertise `/de` either.

## Continuous SEO compatibility

The Wave 0 baseline remains the translation launch set. New English and Norwegian pages may continue to ship. The generated registry is deterministic and will fail its check if the committed Wave 0 source and generated registry diverge.

Later locale-coverage automation will classify additions as:

- Launch blocker for locked P0/P1 German concepts.
- Translation queue entry for new P1/P2 content.
- Stale when a source copy digest changes after German translation.

Wave 1 does not yet implement copy-digest freshness tracking; that belongs to the content audit work in DE Wave 5.

## Intentional deferrals

Wave 1 does not create:

- German product or shop pages.
- German knowledge, glossary, research or study routes.
- German legal pages.
- German login, account, app or checkout flows.
- A German language-switcher option.
- German sitemap entries.
- German `hreflang` from published English or Norwegian pages.

These are deliberate launch safeguards, not missing implementation.

## Validation commands

```bash
pnpm de:registry:check
pnpm audit:de-wave1
pnpm build
```

The installation script also starts the production build locally and verifies:

- `/de` returns `200`.
- The HTML root uses `lang="de"`.
- The response uses `Content-Language: de-DE`.
- The response contains the draft `X-Robots-Tag`.
- Metadata contains `noindex`.
- `/` and `/no` still return `200` with their expected language headers.
- `/sitemap.xml` contains no German route.

## Exit criteria for DE Wave 1

Wave 1 is complete when the generator, architecture audit, production build and runtime smoke test all pass, and the resulting diff contains no German child routes or sitemap exposure.
