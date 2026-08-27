import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import {
  ResearchV2Hero,
  ResearchV2Closest,
  ResearchV2Topics,
  ResearchV2Exploring,
  ResearchV2Featured,
  ResearchV2Foundations,
  ResearchV2Approach,
  ResearchV2Guides,
  ResearchV2Library,
  ResearchV2Continue,
} from "@/components/research-v2";
import { getPublishedResearchGuidesForLocale } from "@/content/research-guides/registry";
import { researchV2Content } from "@/content/research-v2";
import { buildPageWithBreadcrumbStructuredData } from "@/lib/seo/structured-data";

const title =
  "Vagus Nerve Stimulation Research | VNS, tVNS and taVNS | Neuvago";
const description =
  "Explore the science behind vagus nerve stimulation, including VNS, transcutaneous VNS, taVNS, autonomic regulation, HRV, safety, brain pathways, foundational science, and the Neuvago Scientific Studies Library.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/research",
    languages: {
      "en-US": "/research",
      "nb-NO": "/no/forskning",
      "x-default": "/research",
    },
  },
  openGraph: {
    title,
    description,
    url: "/research",
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

export default function ResearchPage() {
  const content = researchV2Content;
  const researchGuides = getPublishedResearchGuidesForLocale("en");

  const structuredData = buildPageWithBreadcrumbStructuredData({
    title,
    description,
    path: "/research",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Research", path: "/research" },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="research-v2" />

      <ResearchV2Hero content={content.hero} />
      <ResearchV2Closest content={content.closest} />
      <ResearchV2Topics content={content.topics} />
      <ResearchV2Exploring content={content.exploring} />
      <ResearchV2Featured content={content.featured} />
      <ResearchV2Foundations content={content.foundations} />
      <ResearchV2Approach content={content.approach} />
      <ResearchV2Guides guides={researchGuides} />
      <ResearchV2Library content={content.library} />
      <ResearchV2Continue content={content.continue} />
    </main>
  );
}
