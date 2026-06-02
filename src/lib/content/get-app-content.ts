import { appPageContent } from "@/content/app";
import { getPageContent } from "@/lib/content/get-page-content";
import { PAGE_SLUGS } from "@/lib/content/page-slugs";
import { applyAppVisualOverrides } from "@/lib/content/core-visual-overrides";

export async function getAppContent() {
  const content = await getPageContent({
    pageSlug: PAGE_SLUGS.app,
    fallbackContent: appPageContent,
  });

  return applyAppVisualOverrides(content);
}
