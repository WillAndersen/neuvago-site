import { DecisionGuidePage } from "@/components/decision-guides/DecisionGuidePage";
import { getDecisionGuide } from "@/content/decision-guides/registry";
import { buildDecisionGuideMetadata } from "@/lib/seo/decision-guide";

const guide = getDecisionGuide("ear-vs-neck-vns", "no");

if (!guide) {
  throw new Error("Norwegian ear-vs-neck decision guide is not published");
}

const publishedGuide = guide;

export const metadata = buildDecisionGuideMetadata(publishedGuide);

export default function OrebasertVsHalsbasertVnsPage() {
  return <DecisionGuidePage guide={publishedGuide} />;
}
