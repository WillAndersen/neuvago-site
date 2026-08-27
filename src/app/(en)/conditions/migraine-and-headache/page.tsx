import type { Metadata } from "next";

import { ConditionArticlePage } from "@/components/conditions-article";
import { JsonLd } from "@/components/seo/json-ld";
import { migraineHeadacheArticle } from "@/content/conditions/en/migraine-and-headache";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const route = "/conditions/migraine-and-headache";
const metadataTitle = "Migraine, Headache and the Nervous System | Neuvago";
const metadataDescription =
  "Understand migraine and headache through neurological pathways, current VNS and taVNS research, safety context, and clear limits on what the evidence shows.";

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

export default function MigraineHeadachePage() {
  const structuredData = buildAuthorityPageStructuredData({
    title: migraineHeadacheArticle.hero.title,
    description: metadataDescription,
    path: route,
    articleSection: "Conditions",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Conditions", path: "/conditions" },
      { name: "Migraine & Headache", path: route },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd
        data={structuredData}
        idPrefix="conditions-migraine-headache"
      />
      <ConditionArticlePage content={migraineHeadacheArticle} />
    </main>
  );
}
