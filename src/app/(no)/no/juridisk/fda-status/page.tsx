import type { Metadata } from "next";
import { LocalizedLegalPage } from "@/components/legal/LocalizedLegalPage";
import { noLegalContent } from "@/content/no/legal";

export const metadata: Metadata = noLegalContent.fdaStatus.metadata;

export default function NorwayFdaStatusPage() {
  return <LocalizedLegalPage content={noLegalContent.fdaStatus} />;
}
