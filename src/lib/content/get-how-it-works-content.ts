import { howItWorksPageContent } from "@/content/how-it-works";
import { getPageContent } from "@/lib/content/get-page-content";
import { PAGE_SLUGS } from "@/lib/content/page-slugs";
import { applyHowItWorksVisualOverrides } from "@/lib/content/core-visual-overrides";

export async function getHowItWorksContent() {
  const content = await getPageContent({
    pageSlug: PAGE_SLUGS.howItWorks,
    fallbackContent: howItWorksPageContent,
  });

  return applyHowItWorksVisualOverrides(content);
}
