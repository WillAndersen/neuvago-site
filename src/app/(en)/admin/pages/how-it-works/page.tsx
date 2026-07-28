import { getHowItWorksContent } from "@/lib/content/get-how-it-works-content";
import { HowItWorksEditorClient } from "./HowItWorksEditorClient";

export default async function AdminHowItWorksEditorPage() {
  const content = await getHowItWorksContent();

  return <HowItWorksEditorClient initialContent={content} />;
}
