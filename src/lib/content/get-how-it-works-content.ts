import { howItWorksPageContent } from "@/content/how-it-works";
import { getPageContent } from "@/lib/content/get-page-content";
import { PAGE_SLUGS } from "@/lib/content/page-slugs";

export async function getHowItWorksContent() {
  return getPageContent({
    pageSlug: PAGE_SLUGS.howItWorks,
    fallbackContent: howItWorksPageContent,
  });
}
