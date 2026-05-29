import type { Metadata } from "next";
import { getHowItWorksContent } from "@/lib/content/get-how-it-works-content";
import {
  HowItWorksHero,
  HowItWorksSystemAtAGlance,
  HowItWorksSteps,
  HowItWorksAppAdds,
  HowItWorksDailyLife,
  HowItWorksRepetition,
  HowItWorksFaq,
  HowItWorksFinalCta,
} from "@/components/how-it-works-page";
import {
  buildFAQStructuredData,
  buildWebPageStructuredData,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "How Neuvago Works | Non-Invasive Vagus Nerve Stimulation",
  description:
    "See how Neuvago works in practice through a non-invasive vagus nerve stimulation device, guided app sessions, and calmer daily regulation routines.",
  alternates: {
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "How Neuvago Works | Non-Invasive Vagus Nerve Stimulation",
    description:
      "See how Neuvago works in practice through a non-invasive vagus nerve stimulation device, guided app sessions, and calmer daily regulation routines.",
    url: "/how-it-works",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Neuvago Works | Non-Invasive Vagus Nerve Stimulation",
    description:
      "See how Neuvago works in practice through a non-invasive vagus nerve stimulation device, guided app sessions, and calmer daily regulation routines.",
  },
};

export default async function HowItWorksPage() {
  const content = await getHowItWorksContent();

  const structuredData: Array<Record<string, unknown>> = [
    buildWebPageStructuredData({
      title: content.hero.title,
      description: content.hero.description,
      path: "/how-it-works",
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
          key={`how-it-works-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      {content.hero.visible ? <HowItWorksHero content={content.hero} /> : null}

      {content.steps.visible ? (
        <HowItWorksSteps content={content.steps} />
      ) : null}

      {content.systemAtAGlance.visible ? (
        <HowItWorksSystemAtAGlance content={content.systemAtAGlance} />
      ) : null}

      {content.appAdds.visible ? (
        <HowItWorksAppAdds content={content.appAdds} />
      ) : null}

      {content.dailyLife.visible ? (
        <HowItWorksDailyLife content={content.dailyLife} />
      ) : null}

      {content.repetition.visible ? (
        <HowItWorksRepetition content={content.repetition} />
      ) : null}

      {content.faq.visible ? <HowItWorksFaq content={content.faq} /> : null}

      {content.finalCta.visible ? (
        <HowItWorksFinalCta content={content.finalCta} />
      ) : null}
    </main>
  );
}
