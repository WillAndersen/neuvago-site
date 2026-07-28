# Semrush cleanup notes

Last reviewed: 2026-06-01
Audit environment: `neuvago-site.vercel.app`
Canonical production domain: `https://neuvago.com`

## What was fixed in P2.7

- Removed Product rich-result structured data from `/product` until Neuvago has real offer, availability, review, and rating data that can be marked up accurately.
- Kept `/product` covered by WebPage, Breadcrumb, and FAQ structured data where available.
- Shortened long title elements across Learn, Research, Conditions, and study pages so key title tags are more concise.
- Replaced naked DOI URL anchor text on research study pages with descriptive anchor text.
- Expanded the local `npm run seo:vns` audit so it now checks for:
  - Product structured data still being rendered on `/product`
  - long Neuvago title strings over 70 characters in app pages
  - naked DOI URL anchor text in page files

## What was intentionally not fixed yet

### `neuvago.com` 404 and broken external links

The Vercel audit was run against `neuvago-site.vercel.app`, while sitemap and canonical URLs correctly point to `https://neuvago.com` as the intended production domain.

Until `neuvago.com` is connected to Vercel and serving the same deployment, Semrush may report canonical-domain links and `https://neuvago.com/sitemap.xml` as broken external links or 4xx pages. Do not change canonical URLs back to Vercel to make this warning disappear.

Fix condition:

```txt
https://neuvago.com/sitemap.xml -> 200
https://neuvago.com/robots.txt -> 200
```

### Certificate / SNI warnings on Vercel subdomains

Warnings on `www.neuvago-site.vercel.app` are not relevant to the final domain. Re-test after the custom domain is attached.

### Low readability on research and legal pages

Research and legal pages naturally contain more technical language. Do not simplify them mechanically. If needed later, add short plain-English summaries above the technical sections on the most important research topic pages.

## Re-test sequence after deploy

```bash
npm run lint && npm run build && npm run seo:vns
npx vercel --prod
```

Then run a Semrush recrawl against the Vercel URL only for technical QA. Run the final launch audit against `https://neuvago.com` after the custom domain is live.
