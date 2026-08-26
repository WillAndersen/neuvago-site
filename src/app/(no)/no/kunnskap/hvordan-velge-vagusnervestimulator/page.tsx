import { DecisionGuidePage } from "@/components/decision-guides/DecisionGuidePage";
import { getDecisionGuide } from "@/content/decision-guides/registry";
import { buildDecisionGuideMetadata } from "@/lib/seo/decision-guide";

const guide = getDecisionGuide("how-to-choose-vns-device", "no");

if (!guide) {
  throw new Error("Norwegian VNS buyer guide is not published");
}

const publishedGuide = guide;

export const metadata = buildDecisionGuideMetadata(publishedGuide);

export default function HvordanVelgeVagusnervestimulatorPage() {
  return <DecisionGuidePage guide={publishedGuide} />;
}
