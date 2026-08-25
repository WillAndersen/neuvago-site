import type { Metadata } from "next";
import {
  HowItWorksV2FinalCta,
  HowItWorksV2Hero,
  HowItWorksV2Mechanism,
  HowItWorksV2WhyItMatters,
} from "@/components/how-it-works-v2";
import { howItWorksV2Content } from "@/content/how-it-works-v2";
import { buildWebPageStructuredData } from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "How Neuvago stimulates the vagus nerve.",
  description: "How Neuvago stimulates the vagus nerve.",
  alternates: {
    canonical: "/how-it-works",
    languages: {
      "en-US": "/how-it-works",
      "no-NO": "/no/slik-fungerer-det",
      "x-default": "/how-it-works",
    },
  },
  openGraph: {
    title: "How Neuvago stimulates the vagus nerve.",
    description: "How Neuvago stimulates the vagus nerve.",
    url: "/how-it-works",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Neuvago stimulates the vagus nerve.",
    description: "How Neuvago stimulates the vagus nerve.",
  },
};

export default function HowItWorksPage() {
  const content = howItWorksV2Content;
  const structuredData = [
    buildWebPageStructuredData({
      title: content.hero.title,
      description: content.hero.title,
      path: "/how-it-works",
    }),
  ];

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      {structuredData.map((item, index) => (
        <script
          key={`how-it-works-v2-ld-${index}`}
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
