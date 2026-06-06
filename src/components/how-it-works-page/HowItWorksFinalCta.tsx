import type { howItWorksPageContent } from "@/content/how-it-works";
import { CoreFinalCta } from "@/components/core-page";

type HowItWorksFinalCtaProps = {
  content: typeof howItWorksPageContent.finalCta;
};

export function HowItWorksFinalCta({ content }: HowItWorksFinalCtaProps) {
  return <CoreFinalCta eyebrow="Continue" {...content} />;
}
