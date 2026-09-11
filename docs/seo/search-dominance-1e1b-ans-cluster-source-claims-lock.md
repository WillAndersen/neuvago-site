# NEUVAGO SEARCH DOMINANCE 1E.1B
## Autonomic Nervous System Cluster — Source, Claims & Ownership Lock

**Date:** 2026-09-11
**Baseline:** 35e32c64caf0b63f76303391a796bd69ecd6f71f

## Routes

New:
- `/learn/autonomic-nervous-system`
- `/learn/sympathetic-vs-parasympathetic-nervous-system`
- `/no/kunnskap/det-sympatiske-nervesystemet`

Protected:
- `/learn/nervous-system-regulation`
- `/learn/parasympathetic-nervous-system`
- `/no/kunnskap/det-autonome-nervesystemet`
- `/no/kunnskap/det-parasympatiske-nervesystemet`
- `/research/topics/autonomic-regulation`

## Market-specific architecture

The concept family is shared; page parity is not.

EN:
- standalone broad ANS owner
- standalone sympathetic-vs-parasympathetic comparison owner
- existing parasympathetic owner
- future standalone sympathetic owner remains P1

NO:
- existing broad ANS owner
- existing parasympathetic owner
- new standalone sympathetic owner
- sympathetic-vs-parasympathetic comparison remains a section inside the sympathetic page
- no separate NO comparison URL

## Source hierarchy

### Reference / broad reviews
- Waxenbaum JA, Reddy V, Das JM. *Anatomy, Autonomic Nervous System.* StatPearls / NCBI Bookshelf. Last update 2025-12-01. https://www.ncbi.nlm.nih.gov/books/NBK539845/
- Wehrwein EA, Orer HS, Barman SM. *Overview of the Anatomy, Physiology, and Pharmacology of the Autonomic Nervous System.* Comprehensive Physiology. 2016. PMID 27347892.
- Gibbons CH. *Basics of autonomic nervous system function.* Handbook of Clinical Neurology. 2019. PMID 31277865.
- Benarroch EE. *Physiology and Pathophysiology of the Autonomic Nervous System.* Continuum. 2020. PMID 31996619.
- Roche F, Pichot V, Mouhli-Gasmi L, et al. *Anatomy and physiology of the autonomic nervous system: Implication on the choice of diagnostic/monitoring tools in 2023.* Revue Neurologique. 2024. PMID 38176987.
- Alshak MN, Das JM. *Neuroanatomy, Sympathetic Nervous System.* StatPearls / NCBI Bookshelf. Updated 2023. https://www.ncbi.nlm.nih.gov/books/NBK542195/
- Tindle J, Tadi P. *Neuroanatomy, Parasympathetic Nervous System.* StatPearls / NCBI Bookshelf. Updated 2022. https://www.ncbi.nlm.nih.gov/books/NBK553141/

### Interaction / non-binary control
- Berntson GG, Cacioppo JT, Quigley KS. *Autonomic determinism: the modes of autonomic control, the doctrine of autonomic space, and the laws of autonomic constraint.* Psychological Review. 1991. PMID 1660159.
- Paton JFR, Nalivaiko E, Boscan P, Pickering AE. *Reflexly evoked coactivation of cardiac vagal and sympathetic motor outflows: observations and functional implications.* Clinical and Experimental Pharmacology and Physiology. 2006. PMID 17184509.
- Ondicova K, Mravec B. *Multilevel interactions between the sympathetic and parasympathetic nervous systems: a minireview.* Endocrine Regulations. 2010. PMID 20429636.

### HRV interpretation boundary
- Carter JR, Jenkins NDM, Bigalke JA, et al. *Guidelines for rigor and reproducibility of heart rate variability within human cardiovascular research.* American Journal of Physiology-Heart and Circulatory Physiology. 2026. PMID 42495990; DOI 10.1152/ajpheart.00041.2026. The paper explicitly states that HRV is not appropriate as a specific marker of cardiac sympathetic outflow or sympathovagal balance.

## Locked claims

1. **Three-division framework:** sympathetic, parasympathetic and enteric is a useful anatomical framework; do not imply that it captures every central and sensory aspect of autonomic regulation.
2. **No moral branches:** sympathetic is not “bad” and parasympathetic is not “good.”
3. **Fight/flight vs rest/digest:** these are teaching shortcuts, not complete physiological states.
4. **No universal balance axis:** sympathetic and parasympathetic outputs can change reciprocally, independently or together.
5. **Organ specificity:** autonomic activity is not uniform across all target tissues.
6. **Continuous regulation:** both branches can show tonic and phasic activity; avoid pure on/off language.
7. **Neurotransmitter exceptions:** do not write “all sympathetic postganglionic neurons release norepinephrine”; sweat-gland cholinergic pathways are a canonical exception.
8. **Vagus boundary:** the vagus is not the entire parasympathetic nervous system and is not part of the sympathetic efferent division.
9. **HRV boundary:** HRV is not a direct whole-body ANS balance meter and is not a specific measure of sympathetic outflow.
10. **Symptoms are nonspecific:** subjective activation, sweating or heart rate do not diagnose “sympathetic dominance,” dysautonomia or autonomic neuropathy.
11. **General physiology ≠ product evidence:** do not infer that Neuvago reduces sympathetic activity, increases parasympathetic activity or “balances ANS.”
12. **No medical-review badge:** this batch is not labelled medically reviewed unless a real reviewer record and decision are created.
13. **No German expansion:** do not create `/de/...` child routes in this batch.
14. **No NO comparison duplicate:** comparison intent stays inside `/no/kunnskap/det-sympatiske-nervesystemet`.

## Visual asset boundary

1E.1B ships semantic comparison tables and text-first authority pages. Illustrations/video briefs remain later media work.

Future visual assets should make clear that:
- sympathetic and parasympathetic pathways are anatomically different;
- the two systems are not a one-dimensional see-saw;
- the enteric system and central autonomic network matter;
- organ-specific responses differ.

## Review level

- `/learn/autonomic-nervous-system`: MEDIUM scientific/editorial review
- `/learn/sympathetic-vs-parasympathetic-nervous-system`: MEDIUM scientific/editorial review
- `/no/kunnskap/det-sympatiske-nervesystemet`: MEDIUM scientific/editorial review

This content becomes HIGH risk if adapted into diagnosis, treatment, disease, contraindication or product-physiology claims.

## 1E.1B.R1 — Table-to-Editorial Layout Repair

Visual QA found that the wide multi-column tables required horizontal scrolling at common desktop widths. R1 changes presentation, not evidence or ownership.

Locked R1 rules:
- all wide tables on the two new EN pages are replaced by responsive editorial card grids;
- the new NO sympathetic article uses the shared `editorial-cards` knowledge block instead of table blocks;
- cards render in one column on small screens and two columns from the medium breakpoint;
- no R1 target page depends on `overflow-x-auto`, a forced table `min-width`, or horizontal scrolling to read core content;
- every former row heading becomes the card title;
- every former column meaning becomes an explicit field label inside the card;
- factual sentences, evidence boundaries, URLs, SEO ownership and source lists remain unchanged;
- R1 introduces no new medical, regulatory or product claim.

## 1E.1B.R2 — Public Article Meta Box Removal

Visual QA found that the public `Om artikkelen` card introduced an unnecessary personal byline and editorial-review presentation on Norwegian knowledge articles.

R2 removes only the public presentation layer:
- the visible `Om artikkelen` card is removed from the shared Norwegian knowledge-article renderer;
- `Redaksjon`, `Kildekontroll`, publication date, modified date and reading time are no longer shown in that hero-side card;
- the hero returns to a single editorial content column instead of reserving an empty second column;
- no replacement author/byline card is introduced;
- `authorId`, `sourceReviewerId`, publication/modification dates and reading-time metadata remain in the content model;
- existing JSON-LD / structured-data generation remains enabled;
- internal editorial governance, source review and claim-governance data remain intact;
- R2 changes no medical, scientific, regulatory or product claim.

R2 therefore removes visible personal attribution from the article UI without deleting the underlying governance metadata.
