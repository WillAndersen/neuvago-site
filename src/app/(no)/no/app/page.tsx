import type { Metadata } from "next";
import { appPageContentNo } from "@/content/no/app";
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
  buildPageWithBreadcrumbStructuredData,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Neuvago App | Veiledede økter og daglige rutiner",
  description:
    "Utforsk Neuvago-appen med veiledede økter, roligere rutiner og kontinuitet laget for å gjøre daglig regulering enklere å vende tilbake til.",
  alternates: {
    canonical: "/no/app",
    languages: {
      "en-US": "/app",
      "nb-NO": "/no/app",
      "x-default": "/app",
    },
  },
  openGraph: {
    title: "Neuvago App | Veiledede økter og daglige rutiner",
    description:
      "Utforsk Neuvago-appen med veiledede økter, roligere rutiner og kontinuitet laget for å gjøre daglig regulering enklere å vende tilbake til.",
    url: "/no/app",
    siteName: "Neuvago",
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuvago App | Veiledede økter og daglige rutiner",
    description:
      "Utforsk Neuvago-appen med veiledede økter, roligere rutiner og kontinuitet laget for å gjøre daglig regulering enklere å vende tilbake til.",
  },
};

export default function NorwayAppPage() {
  const content = appPageContentNo;

  const structuredData: Array<Record<string, unknown>> = buildPageWithBreadcrumbStructuredData({
    title: content.hero.title,
    description: content.hero.description,
    path: "/no/app",
    breadcrumbs: [
      { name: "Forside", path: "/no" },
      { name: "App", path: "/no/app" },
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
          key={"no-app-ld-" + index}
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
