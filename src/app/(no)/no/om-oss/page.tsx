import type { Metadata } from "next";
import { aboutPageContentNo } from "@/content/no/about";
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
  buildPageWithBreadcrumbStructuredData,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Om Neuvago | En roligere tilnærming til daglig regulering",
  description:
    "Lær hvorfor Neuvago finnes, hvordan enheten og appen fungerer sammen, og den rolige designfilosofien bak merkevaren.",
  alternates: {
    canonical: "/no/om-oss",
    languages: {
      "en-US": "/about",
      "no-NO": "/no/om-oss",
    },
  },
  openGraph: {
    title: "Om Neuvago | En roligere tilnærming til daglig regulering",
    description:
      "Lær hvorfor Neuvago finnes, hvordan enheten og appen fungerer sammen, og den rolige designfilosofien bak merkevaren.",
    url: "/no/om-oss",
    siteName: "Neuvago",
    locale: "no_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Neuvago | En roligere tilnærming til daglig regulering",
    description:
      "Lær hvorfor Neuvago finnes, hvordan enheten og appen fungerer sammen, og den rolige designfilosofien bak merkevaren.",
  },
};

export default function NorwayAboutPage() {
  const content = aboutPageContentNo;

  const structuredData: Array<Record<string, unknown>> = buildPageWithBreadcrumbStructuredData({
    title: content.hero.title,
    description: content.hero.description,
    path: "/no/om-oss",
    breadcrumbs: [
      { name: "Forside", path: "/no" },
      { name: "Om oss", path: "/no/om-oss" },
    ],
  });

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
          key={`no-about-ld-${index}`}
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
