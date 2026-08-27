import type { Metadata } from "next";

import {
  ConditionsV2Featured,
  ConditionsV2FinalCta,
  ConditionsV2Hero,
  ConditionsV2More,
  ConditionsV2ResearchBridge,
} from "@/components/conditions-v2";
import { JsonLd } from "@/components/seo/json-ld";
import { conditionsV2Content } from "@/content/conditions-v2";
import { buildPageWithBreadcrumbStructuredData } from "@/lib/seo/structured-data";

const metadataTitle =
  "Conditions | Stress, Sleep and Nervous System Pathways | Neuvago";
const temporaryDescription =
  "Explore conditions through the nervous system.";

export const metadata: Metadata = {
  title: metadataTitle,
  description: temporaryDescription,
  alternates: {
    canonical: "/conditions",
    languages: {
      "en-US": "/conditions",
      "nb-NO": "/no/tilstander",
      "x-default": "/conditions",
    },
  },
  openGraph: {
    title: metadataTitle,
    description: temporaryDescription,
    url: "/conditions",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: temporaryDescription,
  },
};

export default function ConditionsPage() {
  const content = conditionsV2Content;
  const structuredData = buildPageWithBreadcrumbStructuredData({
    title: metadataTitle,
    description: temporaryDescription,
    path: "/conditions",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Conditions", path: "/conditions" },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="conditions" />
      <ConditionsV2Hero content={content.hero} />
      <ConditionsV2Featured content={content.featured} />
      <ConditionsV2More content={content.more} />
      <ConditionsV2ResearchBridge content={content.researchBridge} />
      <ConditionsV2FinalCta content={content.finalCta} />
    </main>
  );
}
