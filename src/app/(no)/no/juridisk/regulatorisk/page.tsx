import type { Metadata } from "next";
import { LocalizedLegalPage } from "@/components/legal/LocalizedLegalPage";
import { noLegalContent } from "@/content/no/legal";

export const metadata: Metadata = noLegalContent.regulatory.metadata;

export default function NorwayRegulatoryPage() {
  return <LocalizedLegalPage content={noLegalContent.regulatory} />;
}
