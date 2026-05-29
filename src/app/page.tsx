import type { Metadata } from "next";
import { getHomepageContent } from "@/lib/content/get-homepage-content";
import {
  HomeHero,
  HomeProofStrip,
  HomeWhatIsNeuvago,
  HomeWhyPeopleComeToNeuvago,
  HomeAppDeviceEcosystem,
  HomeHowItWorks,
  HomeWhyNeuvago,
  HomeTrustResearch,
  HomeFeaturedLearning,
  HomeConditionsOverview,
  HomeFinalCta,
} from "@/components/home";
import {
  buildOrganizationStructuredData,
  buildWebPageStructuredData,
  buildWebSiteStructuredData,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Neuvago | Calm support for stress, sleep, and recovery",
  description:
    "Neuvago combines a non-invasive device, guided app experience, and research-informed learning to support stress, sleep, recovery, and everyday nervous system regulation.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Neuvago | Calm support for stress, sleep, and recovery",
    description:
      "Neuvago combines a non-invasive device, guided app experience, and research-informed learning to support stress, sleep, recovery, and everyday nervous system regulation.",
    url: "/",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuvago | Calm support for stress, sleep, and recovery",
    description:
      "Neuvago combines a non-invasive device, guided app experience, and research-informed learning to support stress, sleep, recovery, and everyday nervous system regulation.",
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

      {content.whatIsNeuvago.visible ? (
        <HomeWhatIsNeuvago content={content.whatIsNeuvago} />
      ) : null}

      {content.whyPeopleComeToNeuvago.visible ? (
        <HomeWhyPeopleComeToNeuvago content={content.whyPeopleComeToNeuvago} />
      ) : null}

      {content.appDeviceEcosystem.visible ? (
        <HomeAppDeviceEcosystem content={content.appDeviceEcosystem} />
      ) : null}

      {content.whyNeuvago.visible ? (
        <HomeWhyNeuvago content={content.whyNeuvago} />
      ) : null}

      {content.howItWorks.visible ? (
        <HomeHowItWorks content={content.howItWorks} />
      ) : null}

      {content.trustResearch.visible ? (
        <HomeTrustResearch content={content.trustResearch} />
      ) : null}

      {content.featuredLearning.visible ? (
        <HomeFeaturedLearning content={content.featuredLearning} />
      ) : null}

      {content.conditionsOverview.visible ? (
        <HomeConditionsOverview content={content.conditionsOverview} />
      ) : null}

      {content.finalCta.visible ? (
        <HomeFinalCta content={content.finalCta} />
      ) : null}
    </main>
  );
}
