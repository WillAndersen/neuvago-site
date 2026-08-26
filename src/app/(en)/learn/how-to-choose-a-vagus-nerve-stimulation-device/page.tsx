import { DecisionGuidePage } from "@/components/decision-guides/DecisionGuidePage";
import { getDecisionGuide } from "@/content/decision-guides/registry";
import { buildDecisionGuideMetadata } from "@/lib/seo/decision-guide";

const guide = getDecisionGuide("how-to-choose-vns-device", "en");

if (!guide) {
  throw new Error("English VNS buyer guide is not published");
}

const publishedGuide = guide;

export const metadata = buildDecisionGuideMetadata(publishedGuide);

export default function HowToChooseVagusNerveStimulationDevicePage() {
  return <DecisionGuidePage guide={publishedGuide} />;
}
