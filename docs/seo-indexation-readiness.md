# Neuvago SEO indexation readiness checklist

This checklist is for the public website and authority layer after the VNS cluster launch pass.

## Before submitting to Search Console

Run these checks from the repo root:

```bash
npm run lint && npm run build
npm run seo:vns

npm run build | grep -E "vagus-nerve-stimulation|non-invasive-vagus-nerve-stimulation|safety-and-tolerability|transcutaneous-vagus-nerve-stimulation|autonomic-regulation" || true

git status --short | grep -E '\.bak|\.rej|\.orig|\.patch|\.zip' || true
```

Expected result:

- The build is green.
- The route list includes all VNS cluster pages.
- The VNS audit passes.
- There are no `.bak`, `.rej`, `.orig`, `.patch`, or `.zip` artifacts staged for commit.

## VNS cluster pages to inspect manually

Open these pages in production after deployment:

- `/learn/vagus-nerve`
- `/learn/vagus-nerve-stimulation`
- `/learn/non-invasive-vagus-nerve-stimulation`
- `/learn/nervous-system-regulation`
- `/research/topics/vagus-nerve-stimulation`
- `/research/topics/transcutaneous-vagus-nerve-stimulation`
- `/research/topics/safety-and-tolerability`
- `/research/topics/autonomic-regulation`
- `/research/topics/heart-rate-variability`
- `/conditions/stress`
- `/conditions/sleep`
- `/how-it-works`
- `/product`

For each page, confirm:

- The H1 matches the page's search intent.
- The title tag is distinct from neighboring cluster pages.
- The meta description reads like a useful SERP snippet, not keyword stuffing.
- The page has one calm next step into Learn, Research, How it works, Product, or App.
- Medical/wellness boundaries are clear where relevant.

## Search Console submission sequence

After deployment:

1. Submit `/sitemap.xml` in Google Search Console.
2. Inspect and request indexing for the core cluster pages first:
   - `/learn/vagus-nerve-stimulation`
   - `/learn/non-invasive-vagus-nerve-stimulation`
   - `/research/topics/vagus-nerve-stimulation`
   - `/research/topics/transcutaneous-vagus-nerve-stimulation`
   - `/research/topics/safety-and-tolerability`
   - `/research/topics/autonomic-regulation`
3. Inspect `/product` and `/how-it-works` after the authority pages are visible.
4. Monitor Coverage, Crawled currently not indexed, Duplicate without user-selected canonical, and Page with redirect.

## First query groups to monitor

Track these as separate query groups:

- `vagus nerve stimulation`
- `non invasive vagus nerve stimulation`
- `vagus nerve stimulator`
- `transcutaneous vagus nerve stimulation`
- `tVNS`
- `taVNS`
- `auricular vagus nerve stimulation`
- `vagus nerve stimulation safety`
- `autonomic regulation`
- `heart rate variability vagus nerve`

## Do not overreact early

Avoid rewriting titles or content in the first few weeks unless there is a technical indexing issue. Early impressions and position data can be noisy. Prioritize crawlability, clean internal links, stable canonicals, and consistent trust language before making large content changes.
