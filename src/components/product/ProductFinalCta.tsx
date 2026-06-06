import type { productPageContent } from "@/content/product";
import { CoreFinalCta } from "@/components/core-page";

type ProductFinalCtaProps = {
  content: typeof productPageContent.finalCta;
};

export function ProductFinalCta({ content }: ProductFinalCtaProps) {
  return <CoreFinalCta eyebrow="Continue" {...content} />;
}
