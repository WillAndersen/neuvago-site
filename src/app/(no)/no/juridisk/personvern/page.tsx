import type { Metadata } from "next";
import { AnalyticsPrivacyNotice } from "@/components/analytics/AnalyticsPrivacyNotice";
import { LocalizedLegalPage } from "@/components/legal/LocalizedLegalPage";
import { noLegalContent } from "@/content/no/legal";

export const metadata: Metadata = noLegalContent.privacy.metadata;

export default function NorwayPrivacyPage() {
  return <><LocalizedLegalPage content={noLegalContent.privacy} /><AnalyticsPrivacyNotice locale="no" /></>;
}
