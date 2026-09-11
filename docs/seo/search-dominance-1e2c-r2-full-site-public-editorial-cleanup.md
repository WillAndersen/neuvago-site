# NEUVAGO SEARCH DOMINANCE 1E.2C.R2 — Full-site public editorial residue cleanup

This lock records a source-grounded public editorial cleanup after the 1E.2C.R1 full-site browser screenshot review.

## Scope

- 218 sitemap routes were browser-rendered in R1 with no capture failures.
- Human review separated real public editorial residue from scanner false positives.
- R2A resolved 66 source matches across 34 source files: 52 P0 and 14 P1 source matches.
- R2 applies 139 exact reader-facing editorial replacements across those 34 source files.
- No URL, canonical, metadata ownership, evidence lane, regulatory fact, intended-use boundary, product claim, or final media asset is intentionally changed by this cleanup.

## Public editorial boundary

Public copy must speak to the reader rather than expose internal search, content-architecture, ownership, conversion, pilot, or editorial-planning language. Terms such as search intent, category pillar, content owner, commercial bridge, product bridge, authority system, and page-ownership instructions belong in internal planning artifacts, not finished public education.

## Human-reviewed public routes

- `/learn/vagus-nerve-anatomy`
- `/learn/vagus-nerve-in-the-ear`
- `/learn/breathing-exercises-and-the-vagus-nerve`
- `/learn/vagus-nerve-massage`
- `/learn/non-invasive-vagus-nerve-stimulation`
- `/learn/autonomic-nervous-system`
- `/learn/sympathetic-vs-parasympathetic-nervous-system`
- `/learn/recovery-and-regulation`
- `/learn/parasympathetic-nervous-system`
- `/learn/vagal-tone`
- `/learn/fight-flight-freeze`
- `/learn/why-your-body-feels-stuck-in-stress`
- `/learn/why-you-feel-tired-but-cant-relax`
- `/learn/signs-of-a-dysregulated-nervous-system`
- `/learn/what-nervous-system-regulation-feels-like`
- `/learn/emotional-regulation-and-the-nervous-system`
- `/research/topics/vagus-nerve-stimulation`
- `/research/topics/transcutaneous-vagus-nerve-stimulation`
- `/research/topics/autonomic-regulation`
- `/glossary/intended-use`
- `/no/kunnskap/orebasert-vs-halsbasert-vns`
- `/no/kunnskap/pusteovelser-og-vagusnerven`
- `/no/kunnskap/vagusnervestimulering`
- `/no/kunnskap/tens-og-vagusnervestimulering`
- `/conditions/stress`
- `/conditions/sleep`
- `/conditions/anxiety`
- `/conditions/burnout`

## Explicit keep decisions

Scanner hits that are valid public language remain untouched when they refer to medical terminology, neutral buyer-guide methodology, legal framing, or normal safety disclaimers. Examples include “cluster headache”, neutral statements that a guide does not rank brands/products, and legal wording such as “This page explains…”.

## Verification gate

R2 must pass its exact source/hash audit, the existing 1E.2C.R1 and 1E.2C audits, trust/claim governance, the VNS SEO audit, German registry non-regression, TypeScript, production build, and a fresh browser render of the complete sitemap plus the public `/open-app` handoff route. The fresh rendered scan must return zero targeted internal-editorial residue matches before R2 can advance to visual review.
