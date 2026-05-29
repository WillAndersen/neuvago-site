import { productPageContent } from "@/content/product";
import { getPageContent } from "@/lib/content/get-page-content";
import { PAGE_SLUGS } from "@/lib/content/page-slugs";

export async function getProductContent() {
  return getPageContent({
    pageSlug: PAGE_SLUGS.product,
    fallbackContent: productPageContent,
  });
}
