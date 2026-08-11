import type { Metadata } from "next";
import { appV2Content } from "@/content/app-v2";
import {
  AppV2Hero,
  AppV2QuickValue,
  AppV2GuidedSessions,
  AppV2BreathingTools,
  AppV2Needs,
  AppV2PersonalTools,
  AppV2CalmByDesign,
  AppV2Access,
  AppV2Faq,
  AppV2FinalCta,
} from "@/components/app-v2";
import {
  buildFAQStructuredData,
  buildWebPageStructuredData,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Neuvago App | Guided Sessions and Daily Tools",
  description:
    "Explore the independent Neuvago App with guided sessions, daily check-ins, personal recommendations, progress tools, and a breathing library planned for launch.",
  alternates: {
    canonical: "/app",
    languages: {
      "en-US": "/app",
      "no-NO": "/no/app",
      "x-default": "/app",
    },
  },
  openGraph: {
    title: "Neuvago App | Guided Sessions and Daily Tools",
    description:
      "Explore guided sessions, daily check-ins, recommendations, progress tools, and planned breathing practices. The app works independently from the Neuvago device.",
    url: "/app",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuvago App | Guided Sessions and Daily Tools",
    description:
      "An independent app experience for guided sessions, check-ins, recommendations, and progress.",
  },
};

export default function AppPage() {
  const content = appV2Content;

  const structuredData: Array<Record<string, unknown>> = [
    buildWebPageStructuredData({
      title: content.hero.title,
      description: content.hero.description,
      path: "/app",
    }),
  ];

  const faqStructuredData = buildFAQStructuredData(content.faq.items);

  if (faqStructuredData) {
    structuredData.push(faqStructuredData);
  }

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      {structuredData.map((item, index) => (
        <script
          key={`app-v2-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      <AppV2Hero content={content.hero} />
      <AppV2QuickValue content={content.quickValue} />
      <AppV2GuidedSessions content={content.guidedSessions} />
      <AppV2BreathingTools content={content.breathingTools} />
      <AppV2Needs content={content.needs} />
      <AppV2PersonalTools content={content.personalTools} />
      <AppV2CalmByDesign content={content.calmByDesign} />
      <AppV2Access content={content.access} />
      <AppV2Faq content={content.faq} />
      <AppV2FinalCta content={content.finalCta} />
    </main>
  );
}
