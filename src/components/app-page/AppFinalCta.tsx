import type { appPageContent } from "@/content/app";
import { CoreFinalCta } from "@/components/core-page";

type AppFinalCtaProps = {
  content: typeof appPageContent.finalCta;
};

export function AppFinalCta({ content }: AppFinalCtaProps) {
  return <CoreFinalCta eyebrow="Continue" {...content} />;
}
