import type { Metadata } from "next";

import { ConditionArticlePage } from "@/components/conditions-article";
import { JsonLd } from "@/components/seo/json-ld";
import { chronicPainArticle } from "@/content/conditions/en/chronic-pain";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const route = "/conditions/chronic-pain";
const metadataTitle = "Chronic Pain and the Nervous System | Neuvago";
const metadataDescription =
  "Learn how chronic pain involves biological, psychological and social factors, and what current VNS and taVNS research can—and cannot—show.";

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: route,
    languages: {
      "en-US": route,
      "x-default": route,
    },
  },
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: route,
    siteName: "Neuvago",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
  },
};

export default function ChronicPainPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title: chronicPainArticle.hero.title,
    description: metadataDescription,
    path: route,
    articleSection: "Conditions",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Conditions", path: "/conditions" },
      { name: "Chronic Pain", path: route },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="conditions-chronic-pain" />
      <ConditionArticlePage content={chronicPainArticle} />
    </main>
  );
}
