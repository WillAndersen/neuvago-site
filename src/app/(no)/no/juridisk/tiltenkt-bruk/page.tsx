import type { Metadata } from "next";
import { LocalizedLegalPage } from "@/components/legal/LocalizedLegalPage";
import { noLegalContent } from "@/content/no/legal";

export const metadata: Metadata = noLegalContent.intendedUse.metadata;

export default function NorwayIntendedUsePage() {
  return <LocalizedLegalPage content={noLegalContent.intendedUse} />;
}
