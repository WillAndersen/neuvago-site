import { appPageContent } from "@/content/app";
import { getPageContent } from "@/lib/content/get-page-content";
import { PAGE_SLUGS } from "@/lib/content/page-slugs";

export async function getAppContent() {
  return getPageContent({
    pageSlug: PAGE_SLUGS.app,
    fallbackContent: appPageContent,
  });
}
