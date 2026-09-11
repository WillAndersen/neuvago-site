# NEUVAGO SEARCH DOMINANCE 1E.2C.R2B — Research Topic Public Copy Cleanup

## Purpose

R2B removes the remaining public-facing research-topic meta scaffold found after the full 219-route R2 browser render.

The source-capture gate identified 28 explicit meta-scaffold matches across five English research-topic routes:

- `/research/topics/autonomic-regulation`
- `/research/topics/gut-brain-axis`
- `/research/topics/heart-rate-variability`
- `/research/topics/inflammation`
- `/research/topics/vagus-nerve-stimulation`

The repair also cleans closely adjacent public copy in those same five source files where the wording still described page architecture, library growth, content tracks, or the page itself rather than helping the reader interpret the research.

## Editorial principles

- Keep the research subject, evidence boundaries, source links, and product/medical boundaries intact.
- Replace internal roadmap and information-architecture wording with reader-facing research context.
- Make scope statements transparent: selected sources are not systematic reviews unless explicitly stated otherwise.
- Do not change URLs, canonicals, structured-data ownership, regulatory facts, or intended-use boundaries.
- Do not add medical efficacy claims.
- Preserve the existing Neuvago visual system and route structure.

## Scope

- 5 public research-topic source files modified.
- 69 exact text replacements.
- 2 new governance/audit files added by the R2B package.
- No commit, push, or deployment in this package.
- Full browser rendering is repeated across all 218 sitemap routes plus `/open-app`.

## Final gate

R2B requires:

1. exact R2 worktree preflight,
2. exact source installation,
3. R2B dedicated audit,
4. 1E.2C.R1 and base 1E.2C non-regression,
5. trust/claim governance audit,
6. SEO VNS audit,
7. German registry check,
8. TypeScript,
9. production build,
10. 219-route browser screenshot + rendered-text residue scan with zero targeted matches.
