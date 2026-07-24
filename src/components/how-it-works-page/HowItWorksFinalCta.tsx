import type { howItWorksPageContent } from "@/content/how-it-works";
import { CoreFinalCta } from "@/components/core-page";

type HowItWorksFinalCtaProps = {
  content: typeof howItWorksPageContent.finalCta;
};

export function HowItWorksFinalCta({ content }: HowItWorksFinalCtaProps) {
  const finalCtaContent = content as typeof howItWorksPageContent.finalCta & {
    eyebrow?: string;
  };

  return <CoreFinalCta eyebrow={finalCtaContent.eyebrow ?? "Continue"} {...content} />;
}
