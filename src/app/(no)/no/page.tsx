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
import { homepage03ContentNo } from "@/content/no/homepage-v3";
import {
  buildFAQStructuredData,
  buildOrganizationStructuredData,
  buildWebPageStructuredData,
  buildWebSiteStructuredData,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Neuvago Norge | Ikke-invasiv vagusnervestimulering",
  description:
    "Oppdag Neuvago, en ikke-invasiv vagusnervestimulator med justerbar intensitet, fire stimuleringsmoduser, forskningskontekst og praktiske verktøy for daglige velværerutiner.",
  alternates: {
    canonical: "/no",
    languages: {
      "en-US": "/",
      "no-NO": "/no",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Neuvago Norge | Ikke-invasiv vagusnervestimulering",
    description:
      "Utforsk en ikke-invasiv, ørebasert vagusnervestimulator med justerbar intensitet, fire stimuleringsmoduser og en tydelig vei til produktinformasjon.",
    url: "/no",
    siteName: "Neuvago",
    locale: "no_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuvago Norge | Ikke-invasiv vagusnervestimulering",
    description:
      "En ikke-invasiv, ørebasert vagusnervestimulator med justerbar intensitet og fire stimuleringsmoduser.",
  },
};

export default function NorwayHomePage() {
  const content = homepage03ContentNo;

  const structuredData = [
    buildOrganizationStructuredData(),
    buildWebSiteStructuredData(),
    buildWebPageStructuredData({
      title: content.hero.title,
      description: `${content.hero.productLine} ${content.hero.description}`,
      path: "/no",
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
          key={`no-home-03-ld-${index}`}
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
