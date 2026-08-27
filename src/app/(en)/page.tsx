import type { Metadata } from "next";
import {
  HomeAppGuidance,
  HomeFinalCta,
  HomeHero,
} from "@/components/home";
import { Home03Benefits } from "@/components/home/Home03Benefits";
import { Home03Faq } from "@/components/home/Home03Faq";
import { Home03FeatureBar } from "@/components/home/Home03FeatureBar";
import { Home03Learn } from "@/components/home/Home03Learn";
import { Home03Research } from "@/components/home/Home03Research";
import { Home03StimulationModes } from "@/components/home/Home03StimulationModes";
import { Home03VagusNerve } from "@/components/home/Home03VagusNerve";
import { homepage03Content } from "@/content/homepage-v3";
import {
  buildFAQStructuredData,
  buildOrganizationStructuredData,
  buildWebPageStructuredData,
  buildWebSiteStructuredData,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Neuvago | Non-Invasive Vagus Nerve Stimulation",
  description:
    "Discover Neuvago, a non-invasive vagus nerve stimulation device with adjustable intensity, four stimulation modes, research context and practical tools for everyday wellness routines.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "nb-NO": "/no",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Neuvago | Non-Invasive Vagus Nerve Stimulation",
    description:
      "Explore a non-invasive, ear-based vagus nerve stimulation device with adjustable intensity, four stimulation modes and a calm path to product information.",
    url: "/",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuvago | Non-Invasive Vagus Nerve Stimulation",
    description:
      "A non-invasive, ear-based vagus nerve stimulation device with adjustable intensity and four stimulation modes.",
  },
};

export default function HomePage() {
  const content = homepage03Content;

  const structuredData = [
    buildOrganizationStructuredData(),
    buildWebSiteStructuredData(),
    buildWebPageStructuredData({
      title: content.hero.title,
      description: `${content.hero.productLine} ${content.hero.description}`,
      path: "/",
    }),
  ];

  const faqStructuredData = buildFAQStructuredData(
    content.faq.items,
  );

  if (faqStructuredData) {
    structuredData.push(faqStructuredData);
  }

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      {structuredData.map((item, index) => (
        <script
          key={`home-03-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item),
          }}
        />
      ))}

      {content.hero.visible ? (
        <HomeHero content={content.hero} />
      ) : null}

      {content.featureBar.visible ? (
        <Home03FeatureBar content={content.featureBar} />
      ) : null}

      {content.benefits.visible ? (
        <Home03Benefits content={content.benefits} />
      ) : null}

      {content.stimulationModes.visible ? (
        <Home03StimulationModes
          content={content.stimulationModes}
        />
      ) : null}

      {content.vagusNerve.visible ? (
        <Home03VagusNerve content={content.vagusNerve} />
      ) : null}

      {content.research.visible ? (
        <Home03Research content={content.research} />
      ) : null}

      {content.appGuidance.visible ? (
        <HomeAppGuidance content={content.appGuidance} />
      ) : null}

      {content.learn.visible ? (
        <Home03Learn content={content.learn} />
      ) : null}

      {content.faq.visible ? (
        <Home03Faq content={content.faq} />
      ) : null}

      {content.finalCta.visible ? (
        <HomeFinalCta content={content.finalCta} />
      ) : null}
    </main>
  );
}
