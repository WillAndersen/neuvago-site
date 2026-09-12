# NEUVAGO SEARCH DOMINANCE 1E.4B — Canonical Claim Registry v1

Status after local implementation must be reviewed before commit.

## Baseline decision

The 1E.4A discovery result is deliberately split into three layers:

1. **canonical claims** — human/reviewer controlled public/editorial rules,
2. **evidence objects** — normalized sources to be created in 1E.4C,
3. **route mappings** — claim/evidence ownership and drift controls to be created in 1E.4D.

This avoids the most dangerous failure mode: assuming that a regex hit, source URL or old project lock is itself an approved scientific statement.

## 1E.4A findings carried forward

- 140 routes
- 571 text files scanned
- 12,473 claim-like hits
- 880 source markers
- 230 initially parsed controlled rows
- 27 historical source/claim locks
- 49 explicit PMID candidates
- 158 unique PMID values recoverable from PubMed URLs
- 159 unique PMID values in the explicit+URL union
- 128 unique DOI strings

The 49 number is therefore **not the total PubMed-source universe**. 1E.4C must normalize the larger candidate set and deduplicate PMID/DOI representations.

## Canonical seed

The v1 seed imports 119 high-confidence rows and performs exact normalized deduplication to 117 canonical claim policies.

Policy totals:

- ALLOWED_WITH_QUALIFIERS: 47
- NOT_ALLOWED: 56
- PROHIBITED: 6
- SAFETY_BOUNDARY: 8

No semantic merge is performed in 1E.4B.

## Hard exclusions

The registry must not absorb:

- technical build locks,
- file counts,
- route creation constraints,
- internal-link contracts,
- analytics contracts,
- visual/media policy,
- schema implementation constraints,
- byte-identity/non-regression instructions,
- source-list bullets merely because they appear in a claim-lock document.

## Regulatory boundary

Open regulatory fact gates remain open. 1E.4B must not infer current CE/FDA/device classification facts from historical text. Relevant entries are tagged with `OPEN_REGULATORY_FACT_GATES` rather than being promoted to product facts.

## Public surface

1E.4B changes no public route, source copy, sitemap, robots, schema, commerce surface or analytics contract.
