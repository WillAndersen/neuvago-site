import type { Metadata } from "next";
import { LocalizedLegalPage } from "@/components/legal/LocalizedLegalPage";
import { noLegalContent } from "@/content/no/legal";

export const metadata: Metadata = noLegalContent.trustSafety.metadata;

export default function NorwayTrustSafetyPage() {
  return <LocalizedLegalPage content={noLegalContent.trustSafety} />;
}
