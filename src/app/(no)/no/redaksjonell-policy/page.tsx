import { LocalizedLegalPage } from "@/components/legal/LocalizedLegalPage";
import { noEditorialPolicyContent } from "@/content/trust/editorial-policy";

export const metadata = noEditorialPolicyContent.metadata;

export default function NorwayEditorialPolicyPage() {
  return <LocalizedLegalPage content={noEditorialPolicyContent} />;
}
