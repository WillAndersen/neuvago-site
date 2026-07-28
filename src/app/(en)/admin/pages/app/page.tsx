import { getAppContent } from "@/lib/content/get-app-content";
import { AppEditorClient } from "./AppEditorClient";

export default async function AdminAppEditorPage() {
  const content = await getAppContent();

  return <AppEditorClient initialContent={content} />;
}
