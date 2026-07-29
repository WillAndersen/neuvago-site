import type { Metadata } from "next";
import { getHomepageContent } from "@/lib/content/get-homepage-content";
import {
  HomeHero,
  HomeProofStrip,
  HomeSystemReveal,
  HomeRoutineSequence,
  HomeAppGuidance,
  HomeResearchBoundary,
  HomeEverydayPathways,
  HomeFinalCta,
} from "@/components/home";
import {
  buildOrganizationStructuredData,
  buildWebPageStructuredData,
  buildWebSiteStructuredData,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Neuvago | Non-Invasive Vagus Nerve Stimulator and App",
  description:
    "Neuvago combines a non-invasive vagus nerve stimulator with guided app sessions for short, repeatable nervous system regulation routines.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "no-NO": "/no",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Neuvago | Non-Invasive Vagus Nerve Stimulator and App",
    description:
      "A calm, app-guided regulation system built around a non-invasive vagus nerve stimulator and short daily routines.",
    url: "/",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuvago | Non-Invasive Vagus Nerve Stimulator and App",
    description:
      "A calm, app-guided regulation system built around a non-invasive vagus nerve stimulator and short daily routines.",
  },
};

export default async function HomePage() {
  const content = await getHomepageContent();

  const structuredData = [
    buildOrganizationStructuredData(),
    buildWebSiteStructuredData(),
    buildWebPageStructuredData({
      title: content.hero.title,
      description: content.hero.description,
      path: "/",
    }),
  ];

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      {structuredData.map((item, index) => (
        <script
          key={`home-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      {content.hero.visible ? <HomeHero content={content.hero} /> : null}

      {content.proofStrip.visible ? (
        <HomeProofStrip content={content.proofStrip} />
      ) : null}

      {content.systemReveal.visible ? (
        <HomeSystemReveal content={content.systemReveal} />
      ) : null}

      {content.ritualSequence.visible ? (
        <HomeRoutineSequence content={content.ritualSequence} />
      ) : null}

      {content.appGuidance.visible ? (
        <HomeAppGuidance content={content.appGuidance} />
      ) : null}

      {content.researchBoundary.visible ? (
        <HomeResearchBoundary content={content.researchBoundary} />
      ) : null}

      {content.everydayPathways.visible ? (
        <HomeEverydayPathways content={content.everydayPathways} />
      ) : null}

      {content.finalCta.visible ? (
        <HomeFinalCta content={content.finalCta} />
      ) : null}
    </main>
  );
}
