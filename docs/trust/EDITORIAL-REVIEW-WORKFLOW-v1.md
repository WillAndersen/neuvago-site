# Neuvago Editorial & Specialist Review Workflow v1

## Purpose
Apply the existing high-risk Conditions review logic across Neuvago without pretending that every page needs medical review.

## 1. Classify risk
- LOW: company/editorial copy.
- MEDIUM: general educational anatomy/physiology with no material clinical implication.
- HIGH: research interpretation, HRV, practical wellness methods and health-adjacent explanations.
- VERY HIGH: VNS safety, contraindications, condition pages, efficacy, product suitability and regulatory classification.
- CRITICAL: diagnosis/treatment/cure/prevention claims, crisis/urgent care, market authorization and high-risk safety.

## 2. Assign the correct review
- Editorial/source review for LOW-MEDIUM.
- Scientific/evidence review for HIGH when interpretation is material.
- Qualified medical/specialist review for VERY HIGH or CRITICAL health content where applicable.
- Regulatory/claims owner for classification, CE/FDA, intended use, product warnings and market-specific regulatory facts.
- Legal review where market-specific legal obligations or consumer terms require it.

## 3. Record reviewer identity
A real reviewer record must include name, professional role/specialty, relevant qualification or registration where applicable, country/jurisdiction, organisation, review date and conflict-of-interest disclosure.

## 4. Decision
Only:
- APPROVE_AS_WRITTEN
- APPROVE_WITH_MINOR_EDITS
- REVISE_AND_RESUBMIT
- DO_NOT_RELEASE

## 5. Deterministic change request
For substantive changes record route, section ID, exact current text, exact replacement/deletion, reason, source/professional rationale and severity.

## 6. Release
Applicable gates must close before a gated draft becomes index/follow, enters the sitemap, or is promoted from a hub.

## Absolute evidence boundary
Implanted VNS, cervical nVNS, transcutaneous VNS, auricular taVNS and Neuvago are separate evidence objects. Results and regulatory status do not transfer automatically.
