# NEUVAGO SEARCH DOMINANCE 1E.4C — R3 reviewed source-identity checkpoint

This is a local identity/metadata and candidate-pool checkpoint. It does not approve scientific claims, publish content, commit, or push.

## Exact input

Parent: `e9dcc1efbc0096d58e100d95756f1b6c9b5c95b3`.
Returned R2 V3 share SHA-256: `7ea46c1641c346c2dfff7db16ca9eedee4a1d31a45e41435fd27d34a26cf2ed0`.
The existing Tracey DOI and Norwegian parasympathetic-source repairs remain exact. All six 1E.4B files and all 27 historical source locks remain unchanged.

## Reviewed returned candidates

The ANS Markdown pair crosses separate bullet references and a heading. The PMID at line 52 belongs to Ondicova/Mravec; the DOI at line 55 belongs to the separate Carter record, whose own PMID is on that same line. This specific pair is dismissed as a false positive, not suppressed by a broad proximity exemption.

The Petek/JACC source card in `src/content/knowledge/no/articles/hrv.ts` contains the wrong PMID in its URL and `pmid` property. The correct PMID is `37438010`, with the unchanged DOI `10.1016/j.jacc.2023.04.054`. Only these two properties are repaired. The title, authors, year, source ID, DOI, note, and surrounding article are preserved.

The immutable 1E.1C source lock also recorded the wrong PMID. It is preserved with an occurrence-specific erratum in `source-identity-review.v1.json`, including the original file hash and exact line. This is NOT a global alias between two PMIDs: PMID `37438083` is a real, unrelated article.

## Active view and historical retention

There are 173 active records: 171 PubMed records (including one book record), plus two Crossref records. The unrelated record discovered via the erroneous reference is retained under `quarantined_evidence` with its original metadata and provenance. It is not available for claim support.

Bibliographic metadata and verification dates of all retained records are unchanged. Only the targeted source occurrence is moved to the existing correct Petek record. Original lexical discovery totals are preserved in `historical_discovery_summary`; the current `discovery_summary` explicitly describes the active view.

The R1 builder now refuses to overwrite a snapshot carrying reviewed identity decisions. A future refresh must preserve and validate the scoped errata rather than re-import the historical mistake.

## Candidate links and limits

The 117 canonical claim policies and claim-candidate file are byte-identical. There are still 68 claims with a source pool, 9 with structural candidates, 19 candidate references, and 0 approved links. Presence, proximity and metadata resolution are not scientific support. PICO, directness, evidence certainty, and medical/product applicability remain unapproved.

The two returned identity candidates have been dispositioned. This does not claim a complete source-title audit of every record or a scientific review of the full corpus.

## Next gate

Run local source/audit, SEO/DE non-regression and build. Return the share package for final-lock review of this limited checkpoint. No automatic claim promotion, commit, push, or deployment is performed.


## R4 supplemental Tracey hyperlink reconciliation

Final source inspection found two PubMed hyperlinks on the Tracey study page still pointing to PMID 12490959 (Inflammation and cancer) rather than PMID 12490958 (The inflammatory reflex). The DOI was already correct; both href values are now corrected without any other article-text edit. The previous three-line proximity heuristic did not cover these separately placed hyperlink controls and cannot establish page-level identity integrity.

The supplemental decision is SID-1E4C-003. Existing R3 decisions and historical source locks are preserved. The record for PMID 12490959 is kept exactly in historical quarantine; its two source occurrences move to the already-present PMID 12490958 record. No bibliographic metadata is fetched or invented.

R4 active snapshot: 172 records (170 PubMed including one book record; two Crossref), plus two original quarantined records. All 117 claim policies and all 19 candidate references remain unchanged and unapproved. The scoped source-link check requires the page DOI and both explicit PubMed hrefs to identify the same intended work. It is not a full-corpus evidence appraisal.

R4 is a local repair and review gate only: no commit, push, deployment, or claim-support approval.
