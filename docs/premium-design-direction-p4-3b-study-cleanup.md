# P4.3B — Study pages and remaining title/readability cleanup

P4.3A upgraded the main Learn, Research and Conditions authority layer. P4.3B extends that editorial system into the Scientific Studies Library and individual study pages.

## Goals

- Make study pages easier to scan without reducing scientific accuracy.
- Keep study pages clearly separated from product claims.
- Reduce Semrush-style readability friction on research and study pages.
- Keep page titles concise enough for search-result display.
- Keep DOI/source links descriptive rather than naked URLs.

## Implemented changes

### Study page hero simplification

Individual study pages now use shorter H1s such as:

- Frangos et al. 2015
- Task Force 1996
- Thayer & Lane 2000

The full paper title remains directly below the H1 as an editorial subtitle. This makes the top of each page feel less dense while preserving the exact study context.

### Plain-English study summaries

Every individual study page now includes an `In plain English` style summary block near the top of the page. Each block separates:

1. What the paper looked at
2. Why it matters
3. What it does not prove

This supports readability and helps maintain the boundary between research context and Neuvago product claims.

### Studies hub guidance

`/research/studies` now includes a short reading guidance block explaining how to use the library: start with context, read the boundary, and follow related pathways.

### Audit coverage

`seo:vns` now checks that study pages include the P4.3B plain-English summary markers and continues to flag long titles, naked DOI anchors and generated artifacts.

## What this does not do

- It does not rewrite legal/privacy pages for readability score alone.
- It does not remove source links that may be falsely flagged by external crawlers.
- It does not add product claims or Product structured data.
- It does not change canonical/domain behavior before `neuvago.com` is live.
