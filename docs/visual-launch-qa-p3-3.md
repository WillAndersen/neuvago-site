# P3.3 Visual Integration Cleanup

Updated: 2026-06-06

## Purpose

P3.3 is a focused launch cleanup after the P3.2 image integration pass. It does not add new routes or new image assets. It tightens how existing assets are used so the visual system feels more polished before the domain launch.

## What this pass addresses

1. Decorative hero cards on Learn, Research, and Conditions pages should not compete with the mobile layout. They are retained on desktop and hidden on mobile.
2. Product-page imagery should avoid body-placement or treatment-adjacent visuals.
3. Core product imagery should have clearer role separation: product detail, app guidance, routine mechanics, lifestyle context, and final CTA.
4. Authority visual sections should have a mobile-friendly aspect ratio so they do not feel overly cropped on small screens.
5. The SEO audit script now checks for the legacy body-placement asset in launch-critical source files.

## Current visual role map

| Area | Primary visual role |
| --- | --- |
| Homepage | Brand/system introduction |
| Product | Device credibility and connected system |
| App | Guided sessions, routine, and support |
| How it works | Practical routine mechanics |
| Support | Help, onboarding, and guidance |
| Stress | Daytime pause and practical reset |
| Sleep | Evening wind-down |
| Research | Evidence, safety, regulation, HRV, and method context |
| Learn VNS pages | Education visuals rather than generic product repetition |

## Launch notes

- Keep canonical and sitemap references pointed at `https://neuvago.com` even while testing on Vercel.
- Do not reintroduce `/images/home/lifestyle-sofa-neuvago.png` on public launch-critical pages.
- If a visual still feels weak after this pass, prefer image mapping/cropping adjustments before generating more assets.
