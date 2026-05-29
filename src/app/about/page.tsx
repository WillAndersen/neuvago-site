import type { Metadata } from "next";
import { getAboutContent } from "@/lib/content/get-about-content";
import {
  AboutHero,
  AboutWhyItExists,
  AboutApproach,
  AboutConnectedSystem,
  AboutCalmDesign,
  AboutBuiltForEverydayLife,
  AboutKnowledgeUniverse,
  AboutFaq,
  AboutFinalCta,
} from "@/components/about-page";
import {
  buildFAQStructuredData,
  buildWebPageStructuredData,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "About Neuvago | A Calmer Approach to Everyday Regulation",
  description:
    "Learn why Neuvago exists, how the device and app work together, and the calmer design philosophy behind the brand.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Neuvago | A Calmer Approach to Everyday Regulation",
    description:
      "Learn why Neuvago exists, how the device and app work together, and the calmer design philosophy behind the brand.",
    url: "/about",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Neuvago | A Calmer Approach to Everyday Regulation",
    description:
      "Learn why Neuvago exists, how the device and app work together, and the calmer design philosophy behind the brand.",
  },
};

export default async function AboutPage() {
  const content = await getAboutContent();

  const structuredData: Array<Record<string, unknown>> = [
    buildWebPageStructuredData({
      title: content.hero.title,
      description: content.hero.description,
      path: "/about",
    }),
  ];

  const faqStructuredData = content.faq.visible
    ? buildFAQStructuredData(content.faq.items)
    : null;

  if (faqStructuredData) {
    structuredData.push(faqStructuredData);
  }

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      {structuredData.map((item, index) => (
        <script
          key={`about-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      {content.hero.visible ? <AboutHero content={content.hero} /> : null}

      {content.whyItExists.visible ? (
        <AboutWhyItExists content={content.whyItExists} />
      ) : null}

      {content.approach.visible ? (
        <AboutApproach content={content.approach} />
      ) : null}

      {content.connectedSystem.visible ? (
        <AboutConnectedSystem content={content.connectedSystem} />
      ) : null}

      {content.calmDesign.visible ? (
        <AboutCalmDesign content={content.calmDesign} />
      ) : null}

      {content.builtForEverydayLife.visible ? (
        <AboutBuiltForEverydayLife content={content.builtForEverydayLife} />
      ) : null}

      {content.knowledgeUniverse.visible ? (
        <AboutKnowledgeUniverse content={content.knowledgeUniverse} />
      ) : null}

      {content.faq.visible ? <AboutFaq content={content.faq} /> : null}

      {content.finalCta.visible ? (
        <AboutFinalCta content={content.finalCta} />
      ) : null}
    </main>
  );
}
