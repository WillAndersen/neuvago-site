import type { Metadata } from "next";
import {
  HowItWorksV2FinalCta,
  HowItWorksV2Hero,
  HowItWorksV2Mechanism,
  HowItWorksV2WhyItMatters,
} from "@/components/how-it-works-v2";
import { howItWorksV2ContentNo } from "@/content/no/how-it-works-v2";
import { buildPageWithBreadcrumbStructuredData } from "@/lib/seo/structured-data";

const title =
  "Slik fungerer Neuvago | Ikke-invasiv vagusnervestimulering";
const description =
  "Se hvordan Neuvago kombinerer justerbar, ørebasert stimulering, fire 20-minutters moduser og veiledning for daglige velværerutiner.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/no/slik-fungerer-det",
    languages: {
      "en-US": "/how-it-works",
      "nb-NO": "/no/slik-fungerer-det",
      "x-default": "/how-it-works",
    },
  },
  openGraph: {
    title,
    description,
    url: "/no/slik-fungerer-det",
    siteName: "Neuvago",
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function NorwayHowItWorksPage() {
  const content = howItWorksV2ContentNo;
  const structuredData = buildPageWithBreadcrumbStructuredData({
    title,
    description,
    path: "/no/slik-fungerer-det",
    breadcrumbs: [
      { name: "Forside", path: "/no" },
      {
        name: "Slik fungerer det",
        path: "/no/slik-fungerer-det",
      },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      {structuredData.map((item, index) => (
        <script
          key={`no-how-it-works-v2-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      {content.hero.visible ? (
        <HowItWorksV2Hero content={content.hero} />
      ) : null}

      {content.mechanism.visible ? (
        <HowItWorksV2Mechanism content={content.mechanism} />
      ) : null}

      {content.whyItMatters.visible ? (
        <HowItWorksV2WhyItMatters content={content.whyItMatters} />
      ) : null}

      {content.finalCta.visible ? (
        <HowItWorksV2FinalCta content={content.finalCta} />
      ) : null}
    </main>
  );
}
