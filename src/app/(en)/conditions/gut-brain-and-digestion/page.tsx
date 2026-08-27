import type { Metadata } from "next";

import { ConditionArticlePage } from "@/components/conditions-article";
import { JsonLd } from "@/components/seo/json-ld";
import { gutBrainDigestionArticle } from "@/content/conditions/en/gut-brain-and-digestion";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const route = "/conditions/gut-brain-and-digestion";
const metadataTitle =
  "Gut–Brain Function, Digestion and the Nervous System | Neuvago";
const metadataDescription =
  "Explore gut–brain communication, digestion, stress and vagal pathways, plus early research on transcutaneous vagus nerve stimulation in digestive symptoms.";

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

export default function GutBrainDigestionPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title: gutBrainDigestionArticle.hero.title,
    description: metadataDescription,
    path: route,
    articleSection: "Conditions",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Conditions", path: "/conditions" },
      { name: "Gut–Brain & Digestion", path: route },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd
        data={structuredData}
        idPrefix="conditions-gut-brain-digestion"
      />
      <ConditionArticlePage content={gutBrainDigestionArticle} />
    </main>
  );
}
