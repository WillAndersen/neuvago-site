# Search Console Launch and Indexation Checklist — P2.6

_Last updated: 2026-05-31_

## Goal

Confirm that Google can discover, crawl, index, and understand the Neuvago VNS authority cluster.

## Before using Search Console

Confirm production has the current SEO cluster deployed.

Run locally before deploy:

```bash
npm run lint && npm run build && npm run seo:vns
```

Expected:

- Build passes.
- VNS target routes are present.
- `seo:vns` passes.

## Production checks

After deployment, check these URLs in a browser:

```txt
/sitemap.xml
/robots.txt
/learn/vagus-nerve-stimulation
/learn/non-invasive-vagus-nerve-stimulation
/learn/auricular-vagus-nerve-stimulation
/learn/transcutaneous-vagus-nerve-stimulation
/research/topics/vagus-nerve-stimulation
/research/topics/transcutaneous-vagus-nerve-stimulation
/research/topics/safety-and-tolerability
/research/topics/autonomic-regulation
/product
/how-it-works
```

## Search Console setup

### 1. Property

Use the canonical production domain as the primary property.

Preferred setup:

```txt
Domain property: neuvago.com
```

Also confirm the exact deployed URL version, for example:

```txt
https://www.neuvago.com
```

or:

```txt
https://neuvago.com
```

Be consistent with canonical URLs and sitemap URLs.

### 2. Submit sitemap

Submit:

```txt
https://<production-domain>/sitemap.xml
```

Checklist:

- Sitemap is reachable without login.
- Sitemap is not blocked by robots.txt.
- Sitemap contains the VNS cluster URLs.
- Search Console accepts the sitemap without parsing errors.

### 3. URL Inspection priority list

Inspect these first:

```txt
/
/product
/how-it-works
/learn/vagus-nerve-stimulation
/learn/non-invasive-vagus-nerve-stimulation
/learn/auricular-vagus-nerve-stimulation
/learn/transcutaneous-vagus-nerve-stimulation
/research/topics/vagus-nerve-stimulation
/research/topics/transcutaneous-vagus-nerve-stimulation
/research/topics/safety-and-tolerability
/research/topics/autonomic-regulation
/conditions/stress
/conditions/sleep
```

For each inspected URL, record:

| Field | Value |
|---|---|
| URL |  |
| Google-selected canonical |  |
| User-declared canonical |  |
| Crawl allowed? |  |
| Indexing allowed? |  |
| Page fetch successful? |  |
| Mobile usable? |  |
| Indexed? |  |
| Action needed |  |

### 4. Request indexing

Use request indexing only for the highest-priority URLs after confirming the live URL is accessible and correct.

Priority order:

1. `/`
2. `/product`
3. `/how-it-works`
4. `/learn/vagus-nerve-stimulation`
5. `/learn/non-invasive-vagus-nerve-stimulation`
6. `/research/topics/vagus-nerve-stimulation`
7. `/research/topics/safety-and-tolerability`
8. `/research/topics/transcutaneous-vagus-nerve-stimulation`
9. `/research/topics/autonomic-regulation`

Do not manually request every single URL unless there is a clear reason.

## 7-day check

Look for:

- Sitemap processed.
- No major indexing errors.
- Target URLs discovered.
- Some URLs crawled.

Do not make ranking conclusions yet.

## 14-day check

Look for:

- Priority pages indexed.
- Early impressions on Learn/Research pages.
- Any canonical mismatch.
- Any “Discovered — currently not indexed” issues.

Potential actions:

- Add stronger internal links to non-indexed pages.
- Check canonical metadata.
- Check whether content is too similar to another page.
- Ensure target page is linked from a hub.

## 28-day check

Look for:

- Queries triggering the VNS cluster.
- Page/query mismatch.
- Impressions with low CTR.
- Positions 8–20.

Potential actions:

- Title/meta refinement.
- Intro/short-answer rewrite.
- Better comparison block.
- More contextual internal links.

## 90-day check

Look for:

- Query families with demand but no ideal page.
- Pages that almost rank.
- Topics that should not be expanded yet.
- Commercial-intent query growth.

Potential next pages only if data supports them:

```txt
/learn/vagus-nerve-stimulator
/learn/taVNS
/research/topics/auricular-vagus-nerve-stimulation
/learn/vagus-nerve-stimulation-side-effects
```

## Common issues and fixes

| Issue | Likely cause | First fix |
|---|---|---|
| Page not discovered | Not enough internal links / sitemap not processed | Link from hub and sitemap |
| Discovered but not indexed | Weak uniqueness or low crawl priority | Improve page differentiation and internal links |
| Wrong page ranks | Intent overlap | Clarify title/H1/internal links |
| Impressions but no clicks | Weak snippet | Improve title/meta/intro |
| Product does not rank for device terms | Commercial terms too soft | Improve product/how-it-works copy |
| Safety queries rank to product page | Trust page not strong enough | Strengthen safety page and link to it |

