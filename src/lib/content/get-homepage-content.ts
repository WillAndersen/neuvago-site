import { homepageContent } from "@/content/homepage";
import { getPageContent } from "@/lib/content/get-page-content";
import { PAGE_SLUGS } from "@/lib/content/page-slugs";
import { applyHomepageVisualOverrides } from "@/lib/content/core-visual-overrides";

export async function getHomepageContent() {
  const content = await getPageContent({
    pageSlug: PAGE_SLUGS.homepage,
    fallbackContent: homepageContent,
  });

  return applyHomepageVisualOverrides(content);
}
