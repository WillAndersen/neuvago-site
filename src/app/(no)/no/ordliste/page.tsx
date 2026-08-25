import { GlossaryHubPage } from "@/components/glossary/GlossaryHubPage";
import { getPublishedNorwegianGlossaryTerms } from "@/content/glossary/registry";
import { buildGlossaryHubMetadata } from "@/lib/seo/glossary";

export const metadata = buildGlossaryHubMetadata("no");

export default function NorwegianGlossaryPage() {
  return (
    <GlossaryHubPage
      locale="no"
      terms={getPublishedNorwegianGlossaryTerms()}
    />
  );
}
