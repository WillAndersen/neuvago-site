import type { Metadata } from "next";
import { appV2Content } from "@/content/app-v2";
import {
  AppV2Hero,
  AppV2GuidedSessions,
  AppV2BreathingTools,
  AppV2Needs,
  AppV2PersonalTools,
  AppV2Included,
  AppV2Faq,
  AppV2FinalCta,
} from "@/components/app-v2";
import {
  buildFAQStructuredData,
  buildPageWithBreadcrumbStructuredData,
} from "@/lib/seo/structured-data";

const title = "Neuvago App | Guided Tools for Nervous System Wellbeing";
const description =
  "Explore the Neuvago App with Guided Sessions for Sleep, Stress, Focus and Recovery, Daily Check-In, Nervous System Score, progress tools and one year of access included with every Neuvago device.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/app",
    languages: {
      "en-US": "/app",
      "no-NO": "/no/app",
      "x-default": "/app",
    },
  },
  openGraph: {
    title,
    description,
    url: "/app",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function AppPage() {
  const content = appV2Content;

  const structuredData: Array<Record<string, unknown>> =
    buildPageWithBreadcrumbStructuredData({
      title,
      description,
      path: "/app",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "App", path: "/app" },
      ],
    });

  const faqStructuredData = buildFAQStructuredData(content.faq.items);

  if (faqStructuredData) {
    structuredData.push(faqStructuredData);
  }

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      {structuredData.map((item, index) => (
        <script
          key={`app-v2-2-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      <AppV2Hero content={content.hero} />
      <AppV2GuidedSessions content={content.guidedSessions} />

      {content.breathingTools.visible ? (
        <AppV2BreathingTools content={content.breathingTools} />
      ) : null}

      <AppV2Needs content={content.needs} />
      <AppV2PersonalTools content={content.personalTools} />
      <AppV2Included content={content.included} />
      <AppV2Faq content={content.faq} />
      <AppV2FinalCta content={content.finalCta} />
    </main>
  );
}
