import type { productPageContent } from "@/content/product";
import { CoreFinalCta } from "@/components/core-page";

type ProductFinalCtaProps = {
  content: typeof productPageContent.finalCta;
};

export function ProductFinalCta({ content }: ProductFinalCtaProps) {
  const finalCtaContent = content as typeof productPageContent.finalCta & {
    eyebrow?: string;
  };

  return <CoreFinalCta eyebrow={finalCtaContent.eyebrow ?? "Continue"} {...content} />;
}
