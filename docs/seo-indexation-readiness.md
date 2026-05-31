# Neuvago SEO indexation readiness checklist

This checklist is for the public website and authority layer after the VNS cluster launch pass.

## Before submitting to Search Console

Run these checks from the repo root:

```bash
npm run lint && npm run build
npm run seo:vns

npm run build | grep -E "vagus-nerve-stimulation|non-invasive-vagus-nerve-stimulation|transcutaneous-vagus-nerve-stimulation|auricular-vagus-nerve-stimulation|safety-and-tolerability|autonomic-regulation" || true

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
- `/learn/transcutaneous-vagus-nerve-stimulation`
- `/learn/auricular-vagus-nerve-stimulation`
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
   - `/learn/transcutaneous-vagus-nerve-stimulation`
   - `/learn/auricular-vagus-nerve-stimulation`
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
- `ear vagus nerve stimulation`
- `vagus nerve stimulation safety`
- `autonomic regulation`
- `heart rate variability vagus nerve`

## Do not overreact early

Avoid rewriting titles or content in the first few weeks unless there is a technical indexing issue. Early impressions and position data can be noisy. Prioritize crawlability, clean internal links, stable canonicals, and consistent trust language before making large content changes.

## P2.4 conversion and safety gap pass

P2.4 is not a new-page phase. It sharpens existing pages so the VNS authority cluster supports commercial intent and trust more clearly.

Manual checks after P2.4:

- `/product` uses `non-invasive vagus nerve stimulator` and `vagus nerve stimulation device` language naturally without sounding clinical.
- `/how-it-works` answers the practical intent behind `how to use a vagus nerve stimulator` through placement, comfort, app guidance, and routine structure.
- `/research/topics/safety-and-tolerability` explicitly covers side effects, adverse events, contraindication awareness, who should ask a clinician first, and why non-invasive does not mean risk-free.
- `/research/topics/vagus-nerve-stimulation` includes an evidence-boundaries section so research context is not translated into broad product claims.
- The commercial bridge from research to `/how-it-works` and `/product` stays calm and does not borrow indications from other devices.

P2.4 verification:

```bash
npm run lint && npm run build && npm run seo:vns
```

The audit now also checks for selected P2.4 markers in product copy, how-it-works copy, the safety topic, and the VNS research overview.
