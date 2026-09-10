import { LocalizedLegalPage } from "@/components/legal/LocalizedLegalPage";
import { enEditorialPolicyContent } from "@/content/trust/editorial-policy";

export const metadata = enEditorialPolicyContent.metadata;

export default function EditorialPolicyPage() {
  return <LocalizedLegalPage content={enEditorialPolicyContent} />;
}
