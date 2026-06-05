# Neuvago Visual Launch QA Image Map

Updated: 2026-06-02

## Purpose

This document records the launch image system used for the public Neuvago website. The goal is to keep the site feeling premium, calm, and consistent while avoiding repeated test-style device/app imagery.

## Launch image principles

- Use one consistent Neuvago device shape: warm off-white oval body, dark display area, tactile buttons.
- Avoid clinical or treatment imagery: no electrodes, wires, hospital settings, diagnostic scenes, or body-placement photos.
- Keep product and app visuals premium, tactile, warm, and restrained.
- Do not overuse device + phone pairings on every page.
- Use WebP launch assets under `/public/images/neuvago/` for performance and cleaner asset management.

## Core page mapping

| Page / section | Desktop asset | Mobile asset | Role |
|---|---|---|---|
| Homepage hero | `/images/neuvago/homepage-master-hero-desktop.webp` | `/images/neuvago/homepage-master-hero-mobile.webp` | Main brand/system hero |
| Product hero | `/images/neuvago/product-hero-desktop.webp` | `/images/neuvago/product-hero-mobile.webp` | Physical product credibility |
| App hero | `/images/neuvago/app-hero-desktop.webp` | `/images/neuvago/app-hero-mobile.webp` | Guided app experience |
| How it works hero | `/images/neuvago/how-it-works-routine-desktop.webp` | `/images/neuvago/how-it-works-routine-mobile.webp` | Practical routine and method |
| Support hero | `/images/neuvago/support-guidance-desktop.webp` | `/images/neuvago/support-guidance-mobile.webp` | Guidance and onboarding support |
| Final CTA | `/images/neuvago/final-cta-desktop.webp` | `/images/neuvago/final-cta-mobile.webp` | Soft CTA background |

## Authority and condition mapping

| Page / section | Asset | Role |
|---|---|---|
| Research hub | `/images/neuvago/research-hub-evidence-desktop.webp` | Evidence and research organization |
| VNS research overview | `/images/neuvago/research-hub-evidence-desktop.webp` | Broad evidence overview |
| Safety and tolerability | `/images/neuvago/safety-tolerability-desktop.webp` | Safety, side effects and boundaries |
| Autonomic regulation | `/images/neuvago/autonomic-regulation-desktop.webp` | Autonomic flexibility and rhythm |
| HRV research | `/images/neuvago/hrv-rhythm-desktop.webp` | HRV, rhythm, recovery context |
| Auricular VNS guide | `/images/neuvago/auricular-vns-education-desktop.webp` | Ear-based VNS education without clinical imagery |
| Transcutaneous VNS guide | `/images/neuvago/transcutaneous-vns-education-desktop.webp` | tVNS method education without body placement |
| Transcutaneous VNS research | `/images/neuvago/transcutaneous-vns-education-desktop.webp` | Method layer and research interpretation |
| Stress condition | `/images/neuvago/stress-daytime-pause-desktop.webp` | Everyday pause / stress support |
| Sleep condition | `/images/neuvago/evening-wind-down-desktop.webp` | Evening wind-down routine |

## Implementation notes

- Core pages are DB-first through Supabase `page_content`, so P3.2 keeps `src/lib/content/core-visual-overrides.ts` active to stabilize launch-critical image roles.
- The asset registry lives in `src/content/assets.ts` for admin/content reference.
- Authority and condition pages use `AuthorityVisualSection` for a controlled image band without turning research pages into sales pages.
- Legacy `/images/home/*` assets are retained temporarily for older DB content and admin compatibility, but new launch imagery should use `/images/neuvago/*`.

## Post-launch improvement ideas

- Add hand-picked mobile crops for every authority visual if the current crop is not ideal.
- Add plain-English research summaries to reduce readability warnings without weakening scientific precision.
- Build a second photo set for About and brand philosophy pages.
- Replace any remaining legacy `/images/home/*` DB content in Supabase once production copy is finalized.
