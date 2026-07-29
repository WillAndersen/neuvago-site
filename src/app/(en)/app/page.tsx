import type { Metadata } from "next";
import { getAppContent } from "@/lib/content/get-app-content";
import {
  AppHero,
  AppWhatItDoes,
  AppCalmByDesign,
  AppSessionsRhythm,
  AppFitsIntoLife,
  AppProgressWithoutPressure,
  AppDeviceTogether,
  AppFaq,
  AppFinalCta,
} from "@/components/app-page";
import {
  buildFAQStructuredData,
  buildWebPageStructuredData,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Neuvago App | Guided Sessions, Routines and Daily Support",
  description:
    "Explore the Neuvago app experience with guided sessions, calmer routines, and continuity designed to make daily regulation easier to return to.",
  alternates: {
    canonical: "/app",
    languages: {
      "en-US": "/app",
      "no-NO": "/no/app",
      "x-default": "/app",
    },
  },
  openGraph: {
    title: "Neuvago App | Guided Sessions, Routines and Daily Support",
    description:
      "Explore the Neuvago app experience with guided sessions, calmer routines, and continuity designed to make daily regulation easier to return to.",
    url: "/app",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuvago App | Guided Sessions, Routines and Daily Support",
    description:
      "Explore the Neuvago app experience with guided sessions, calmer routines, and continuity designed to make daily regulation easier to return to.",
  },
};

export default async function AppPage() {
  const content = await getAppContent();

  const structuredData: Array<Record<string, unknown>> = [
    buildWebPageStructuredData({
      title: content.hero.title,
      description: content.hero.description,
      path: "/app",
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
          key={`app-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      {content.hero.visible ? <AppHero content={content.hero} /> : null}

      {content.whatItDoes.visible ? (
        <AppWhatItDoes content={content.whatItDoes} />
      ) : null}

      {content.sessionsRhythm.visible ? (
        <AppSessionsRhythm content={content.sessionsRhythm} />
      ) : null}

      {content.progressWithoutPressure.visible ? (
        <AppProgressWithoutPressure content={content.progressWithoutPressure} />
      ) : null}

      {content.calmByDesign.visible ? (
        <AppCalmByDesign content={content.calmByDesign} />
      ) : null}

      {content.fitsIntoLife.visible ? (
        <AppFitsIntoLife content={content.fitsIntoLife} />
      ) : null}

      {content.deviceTogether.visible ? (
        <AppDeviceTogether content={content.deviceTogether} />
      ) : null}

      {content.faq.visible ? <AppFaq content={content.faq} /> : null}

      {content.finalCta.visible ? (
        <AppFinalCta content={content.finalCta} />
      ) : null}
    </main>
  );
}
