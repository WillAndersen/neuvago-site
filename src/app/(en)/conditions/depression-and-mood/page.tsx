import type { Metadata } from "next";

import { ConditionArticlePage } from "@/components/conditions-article";
import { JsonLd } from "@/components/seo/json-ld";
import { depressionMoodArticle } from "@/content/conditions/en/depression-and-mood";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const route = "/conditions/depression-and-mood";
const metadataTitle = "Depression, Mood and the Nervous System | Neuvago";
const metadataDescription =
  "Understand depression and mood through brain–body context, the difference between implanted VNS and taVNS research, and when to seek professional help.";

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
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

export default function DepressionMoodPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title: depressionMoodArticle.hero.title,
    description: metadataDescription,
    path: route,
    articleSection: "Conditions",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Conditions", path: "/conditions" },
      { name: "Depression & Mood", path: route },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="conditions-depression-mood" />
      <ConditionArticlePage content={depressionMoodArticle} />
    </main>
  );
}
