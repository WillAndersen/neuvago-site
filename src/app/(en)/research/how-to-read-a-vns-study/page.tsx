import type { Metadata } from "next";

import { ResearchGuidePage } from "@/components/research-guides/ResearchGuidePage";
import { getResearchGuide } from "@/content/research-guides/registry";
import { buildResearchGuideMetadata } from "@/lib/seo/research-guide";

const guide = getResearchGuide("how-to-read-vns-study", "en");

if (!guide) {
  throw new Error("Missing English research-literacy guide");
}

const publishedGuide = guide;

export const metadata: Metadata = buildResearchGuideMetadata(publishedGuide);

export default function HowToReadVnsStudyPage() {
  return <ResearchGuidePage guide={publishedGuide} />;
}
