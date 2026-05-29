import { supportPageContent } from "@/content/support";
import { getPageContent } from "@/lib/content/get-page-content";
import { PAGE_SLUGS } from "@/lib/content/page-slugs";

export async function getSupportContent() {
  return getPageContent({
    pageSlug: PAGE_SLUGS.support,
    fallbackContent: supportPageContent,
  });
}
