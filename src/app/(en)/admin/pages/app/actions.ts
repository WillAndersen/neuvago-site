"use server";

import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { PAGE_SLUGS } from "@/lib/content/page-slugs";
import { appPageContent as appPageContentFallback } from "@/content/app";

type DeepWiden<T> =
  T extends string ? string
  : T extends number ? number
  : T extends boolean ? boolean
  : T extends readonly (infer U)[] ? DeepWiden<U>[]
  : T extends object ? { -readonly [K in keyof T]: DeepWiden<T[K]> }
  : T;

type AppContent = DeepWiden<typeof appPageContentFallback>;

type SaveAppResult =
  | { ok: true }
  | { ok: false; error: string };

export async function saveAppContent(
  content: AppContent
): Promise<SaveAppResult> {
  try {
    const { error } = await supabaseAdmin
      .from("page_content")
      .upsert(
        {
          page_slug: PAGE_SLUGS.app,
          content_json: content,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "page_slug",
        }
      );

    if (error) {
      console.error("Failed to save app content:", error.message);
      return { ok: false, error: error.message };
    }

    revalidatePath("/app");
    revalidatePath("/admin/pages/app");

    return { ok: true };
  } catch (error) {
    console.error("Unexpected error while saving app content:", error);
    return { ok: false, error: "Unexpected error while saving app content." };
  }
}