import type { supportPageContent } from "@/content/support";
import { CoreFinalCta } from "@/components/core-page";

type SupportFinalCtaProps = {
  content: typeof supportPageContent.finalCta;
};

export function SupportFinalCta({ content }: SupportFinalCtaProps) {
  return <CoreFinalCta eyebrow="Continue" {...content} />;
}
