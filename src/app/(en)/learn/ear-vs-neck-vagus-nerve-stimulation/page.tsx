import { DecisionGuidePage } from "@/components/decision-guides/DecisionGuidePage";
import { getDecisionGuide } from "@/content/decision-guides/registry";
import { buildDecisionGuideMetadata } from "@/lib/seo/decision-guide";

const guide = getDecisionGuide("ear-vs-neck-vns", "en");

if (!guide) {
  throw new Error("English ear-vs-neck decision guide is not published");
}

const publishedGuide = guide;

export const metadata = buildDecisionGuideMetadata(publishedGuide);

export default function EarVsNeckVagusNerveStimulationPage() {
  return <DecisionGuidePage guide={publishedGuide} />;
}
