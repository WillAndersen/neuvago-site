import type { Metadata } from "next";
import { LocalizedLegalPage } from "@/components/legal/LocalizedLegalPage";
import { noLegalContent } from "@/content/no/legal";

export const metadata: Metadata = noLegalContent.hub.metadata;

export default function NorwayLegalPage() {
  return <LocalizedLegalPage content={noLegalContent.hub} />;
}
