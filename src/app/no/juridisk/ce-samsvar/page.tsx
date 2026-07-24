import type { Metadata } from "next";
import { LocalizedLegalPage } from "@/components/legal/LocalizedLegalPage";
import { noLegalContent } from "@/content/no/legal";

export const metadata: Metadata = noLegalContent.ceCompliance.metadata;

export default function NorwayCeCompliancePage() {
  return <LocalizedLegalPage content={noLegalContent.ceCompliance} />;
}
