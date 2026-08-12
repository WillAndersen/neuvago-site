import type { Metadata } from "next";
import { getHomepageContent } from "@/lib/content/get-homepage-content";
import {
  HomeHero,
  HomeProofStrip,
  HomeBenefits,
  HomeSystemReveal,
  HomeStimulationModes,
  HomeVagusNerve,
  HomeRoutineSequence,
  HomeResearchBoundary,
  HomeAppGuidance,
  HomeFeaturedLearning,
  HomeFaq,
  HomeFinalCta,
} from "@/components/home";
import {
  buildFAQStructuredData,
  buildOrganizationStructuredData,
  buildWebPageStructuredData,
  buildWebSiteStructuredData,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Neuvago | Non-Invasive Vagus Nerve Stimulation",
  description:
    "Discover Neuvago, a non-invasive vagus nerve stimulation device with adjustable intensity, four stimulation modes and a design made for everyday wellness routines.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "no-NO": "/no",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Neuvago | Non-Invasive Vagus Nerve Stimulation",
    description:
      "Explore a non-invasive vagus nerve stimulation device with adjustable intensity, four stimulation modes and a clear path to current purchase information.",
    url: "/",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuvago | Non-Invasive Vagus Nerve Stimulation",
    description:
      "A non-invasive vagus nerve stimulation device with adjustable intensity and four stimulation modes.",
  },
};

export default async function HomePage() {
  const content = await getHomepageContent();

  const structuredData = [
    buildOrganizationStructuredData(),
    buildWebSiteStructuredData(),
    buildWebPageStructuredData({
      title: content.hero.title,
      description: `${content.hero.productLine} ${content.hero.description}`,
      path: "/",
    }),
  ];

  const faqStructuredData = buildFAQStructuredData(content.faq.items);

  if (faqStructuredData) {
    structuredData.push(faqStructuredData);
  }

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

      {content.benefits.visible ? (
        <HomeBenefits content={content.benefits} />
      ) : null}

      {content.systemReveal.visible ? (
        <HomeSystemReveal content={content.systemReveal} />
      ) : null}

      {content.stimulationModes.visible ? (
        <HomeStimulationModes content={content.stimulationModes} />
      ) : null}

      {content.vagusNerve.visible ? (
        <HomeVagusNerve content={content.vagusNerve} />
      ) : null}

      {content.ritualSequence.visible ? (
        <HomeRoutineSequence content={content.ritualSequence} />
      ) : null}

      {content.researchBoundary.visible ? (
        <HomeResearchBoundary content={content.researchBoundary} />
      ) : null}

      {content.appGuidance.visible ? (
        <HomeAppGuidance content={content.appGuidance} />
      ) : null}

      {content.featuredLearning.visible ? (
        <HomeFeaturedLearning content={content.featuredLearning} />
      ) : null}

      {content.faq.visible ? <HomeFaq content={content.faq} /> : null}

      {content.finalCta.visible ? (
        <HomeFinalCta content={content.finalCta} />
      ) : null}
    </main>
  );
}
