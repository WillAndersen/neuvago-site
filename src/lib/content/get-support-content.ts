import { supportPageContent } from "@/content/support";
import { getPageContent } from "@/lib/content/get-page-content";
import { PAGE_SLUGS } from "@/lib/content/page-slugs";
import { applySupportVisualOverrides } from "@/lib/content/core-visual-overrides";

export async function getSupportContent() {
  const content = await getPageContent({
    pageSlug: PAGE_SLUGS.support,
    fallbackContent: supportPageContent,
  });

  return applySupportVisualOverrides(content);
}
