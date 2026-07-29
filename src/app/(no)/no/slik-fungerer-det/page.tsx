import type { Metadata } from "next";
import { howItWorksPageContentNo } from "@/content/no/how-it-works";
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
  buildPageWithBreadcrumbStructuredData,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Slik fungerer Neuvago | Ikke-invasiv VNS og app",
  description:
    "Se hvordan Neuvago fungerer som et ikke-invasivt VNS- og appsystem, med veiledning for plassering, komfort, økter og daglig rutine.",
  alternates: {
    canonical: "/no/slik-fungerer-det",
    languages: {
      "en-US": "/how-it-works",
      "no-NO": "/no/slik-fungerer-det",
    },
  },
  openGraph: {
    title: "Slik fungerer Neuvago | Ikke-invasiv VNS og app",
    description:
      "Se hvordan Neuvago fungerer som et ikke-invasivt VNS- og appsystem, med veiledning for plassering, komfort, økter og daglig rutine.",
    url: "/no/slik-fungerer-det",
    siteName: "Neuvago",
    locale: "no_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slik fungerer Neuvago | Ikke-invasiv VNS og app",
    description:
      "Se hvordan Neuvago fungerer som et ikke-invasivt VNS- og appsystem, med veiledning for plassering, komfort, økter og daglig rutine.",
  },
};

export default function NorwayHowItWorksPage() {
  const content = howItWorksPageContentNo;

  const structuredData: Array<Record<string, unknown>> = buildPageWithBreadcrumbStructuredData({
    title: content.hero.title,
    description: content.hero.description,
    path: "/no/slik-fungerer-det",
    breadcrumbs: [
      { name: "Forside", path: "/no" },
      { name: "Slik fungerer det", path: "/no/slik-fungerer-det" },
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
          key={"no-how-it-works-ld-" + index}
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
