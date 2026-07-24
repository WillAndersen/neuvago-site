import type { Metadata } from "next";
import { LocalizedLegalPage } from "@/components/legal/LocalizedLegalPage";
import { noLegalContent } from "@/content/no/legal";

export const metadata: Metadata = noLegalContent.medicalDisclaimer.metadata;

export default function NorwayMedicalDisclaimerPage() {
  return <LocalizedLegalPage content={noLegalContent.medicalDisclaimer} />;
}
