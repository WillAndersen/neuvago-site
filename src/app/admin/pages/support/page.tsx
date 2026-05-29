import { getSupportContent } from "@/lib/content/get-support-content";
import { SupportEditorClient } from "./SupportEditorClient";

export default async function AdminSupportEditorPage() {
  const content = await getSupportContent();

  return <SupportEditorClient initialContent={content} />;
}
