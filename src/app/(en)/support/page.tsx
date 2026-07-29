import type { Metadata } from "next";
import { getSupportContent } from "@/lib/content/get-support-content";
import {
  SupportHero,
  SupportHowWeCanHelp,
  SupportStartHere,
  SupportTopics,
  SupportPhilosophy,
  SupportFaq,
  SupportFinalCta,
} from "@/components/support-page";
import {
  buildFAQStructuredData,
  buildWebPageStructuredData,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Neuvago Support | Clear Help for Product, App and Everyday Use",
  description:
    "Find clear help for understanding the Neuvago product, app, daily routines, legal information, and where to start next.",
  alternates: {
    canonical: "/support",
    languages: {
      "en-US": "/support",
      "no-NO": "/no/support",
      "x-default": "/support",
    },
  },
  openGraph: {
    title: "Neuvago Support | Clear Help for Product, App and Everyday Use",
    description:
      "Find clear help for understanding the Neuvago product, app, daily routines, legal information, and where to start next.",
    url: "/support",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuvago Support | Clear Help for Product, App and Everyday Use",
    description:
      "Find clear help for understanding the Neuvago product, app, daily routines, legal information, and where to start next.",
  },
};

export default async function SupportPage() {
  const content = await getSupportContent();

  const structuredData: Array<Record<string, unknown>> = [
    buildWebPageStructuredData({
      title: content.hero.title,
      description: content.hero.description,
      path: "/support",
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
          key={`support-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      {content.hero.visible ? <SupportHero content={content.hero} /> : null}

      {content.howWeCanHelp.visible ? (
        <SupportHowWeCanHelp content={content.howWeCanHelp} />
      ) : null}

      {content.startHere.visible ? (
        <SupportStartHere content={content.startHere} />
      ) : null}

      {content.supportTopics.visible ? (
        <SupportTopics content={content.supportTopics} />
      ) : null}

      {content.philosophy.visible ? (
        <SupportPhilosophy content={content.philosophy} />
      ) : null}

      {content.faq.visible ? <SupportFaq content={content.faq} /> : null}

      {content.finalCta.visible ? (
        <SupportFinalCta content={content.finalCta} />
      ) : null}
    </main>
  );
}
