import { getHomepageContent } from "@/lib/content/get-homepage-content";
import { HomepageEditorClient } from "./HomepageEditorClient";

export default async function AdminHomepageEditorPage() {
  const content = await getHomepageContent();

  return <HomepageEditorClient initialContent={content} />;
}
