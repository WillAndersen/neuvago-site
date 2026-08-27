import type { Metadata } from "next";

import { ResearchGuidePage } from "@/components/research-guides/ResearchGuidePage";
import { getResearchGuide } from "@/content/research-guides/registry";
import { buildResearchGuideMetadata } from "@/lib/seo/research-guide";

const guide = getResearchGuide("how-to-read-vns-study", "no");

if (!guide) {
  throw new Error("Mangler norsk guide til forskningsforståelse");
}

const publishedGuide = guide;

export const metadata: Metadata = buildResearchGuideMetadata(publishedGuide);

export default function SlikLeserDuEnVnsStudiePage() {
  return <ResearchGuidePage guide={publishedGuide} />;
}
