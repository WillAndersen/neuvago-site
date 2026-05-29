import { aboutPageContent } from "@/content/about";
import { getPageContent } from "@/lib/content/get-page-content";
import { PAGE_SLUGS } from "@/lib/content/page-slugs";

export async function getAboutContent() {
  return getPageContent({
    pageSlug: PAGE_SLUGS.about,
    fallbackContent: aboutPageContent,
  });
}
