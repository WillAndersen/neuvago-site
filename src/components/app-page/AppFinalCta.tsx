import type { appPageContent } from "@/content/app";
import { CoreFinalCta } from "@/components/core-page";

type AppFinalCtaProps = {
  content: typeof appPageContent.finalCta;
};

export function AppFinalCta({ content }: AppFinalCtaProps) {
  const finalCtaContent = content as typeof appPageContent.finalCta & {
    eyebrow?: string;
  };

  return <CoreFinalCta {...content} eyebrow={finalCtaContent.eyebrow ?? "Continue"} />;
}
