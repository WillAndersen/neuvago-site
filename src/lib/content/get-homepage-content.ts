import { homepageContent } from "@/content/homepage";
import { getPageContent } from "@/lib/content/get-page-content";
import { PAGE_SLUGS } from "@/lib/content/page-slugs";

export async function getHomepageContent() {
  return getPageContent({
    pageSlug: PAGE_SLUGS.homepage,
    fallbackContent: homepageContent,
  });
}
