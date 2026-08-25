import { GlossaryHubPage } from "@/components/glossary/GlossaryHubPage";
import { getPublishedEnglishGlossaryTerms } from "@/content/glossary/registry";
import { buildGlossaryHubMetadata } from "@/lib/seo/glossary";

export const metadata = buildGlossaryHubMetadata("en");

export default function EnglishGlossaryPage() {
  return (
    <GlossaryHubPage
      locale="en"
      terms={getPublishedEnglishGlossaryTerms()}
    />
  );
}
