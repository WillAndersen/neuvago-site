import type { Metadata } from "next";
import { LocalizedLegalPage } from "@/components/legal/LocalizedLegalPage";
import { noLegalContent } from "@/content/no/legal";

export const metadata: Metadata = noLegalContent.terms.metadata;

export default function NorwayTermsPage() {
  return <LocalizedLegalPage content={noLegalContent.terms} />;
}
