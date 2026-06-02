import { productPageContent } from "@/content/product";
import { getPageContent } from "@/lib/content/get-page-content";
import { PAGE_SLUGS } from "@/lib/content/page-slugs";
import { applyProductVisualOverrides } from "@/lib/content/core-visual-overrides";

export async function getProductContent() {
  const content = await getPageContent({
    pageSlug: PAGE_SLUGS.product,
    fallbackContent: productPageContent,
  });

  return applyProductVisualOverrides(content);
}
