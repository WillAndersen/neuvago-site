import { getAboutContent } from "@/lib/content/get-about-content";
import { AboutEditorClient } from "./AboutEditorClient";

export default async function AdminAboutEditorPage() {
  const content = await getAboutContent();

  return <AboutEditorClient initialContent={content} />;
}
