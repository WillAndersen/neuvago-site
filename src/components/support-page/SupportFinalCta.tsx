import type { supportPageContent } from "@/content/support";
import { CoreFinalCta } from "@/components/core-page";

type SupportFinalCtaProps = {
  content: typeof supportPageContent.finalCta;
};

export function SupportFinalCta({ content }: SupportFinalCtaProps) {
  const finalCtaContent = content as typeof supportPageContent.finalCta & {
    eyebrow?: string;
  };

  return <CoreFinalCta eyebrow={finalCtaContent.eyebrow ?? "Continue"} {...content} />;
}
