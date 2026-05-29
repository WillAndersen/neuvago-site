"use server";

import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { PAGE_SLUGS } from "@/lib/content/page-slugs";
import { homepageContent as homepageContentFallback } from "@/content/homepage";

type DeepWiden<T> =
  T extends string ? string
  : T extends number ? number
  : T extends boolean ? boolean
  : T extends readonly (infer U)[] ? DeepWiden<U>[]
  : T extends object ? { -readonly [K in keyof T]: DeepWiden<T[K]> }
  : T;

type HomepageContent = DeepWiden<typeof homepageContentFallback>;

type SaveHomepageResult =
  | { ok: true }
  | { ok: false; error: string };

export async function saveHomepageContent(
  content: HomepageContent
): Promise<SaveHomepageResult> {
  try {
    const { error } = await supabaseAdmin
      .from("page_content")
      .upsert(
        {
          page_slug: PAGE_SLUGS.homepage,
          content_json: content,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "page_slug",
        }
      );

    if (error) {
      console.error("Failed to save homepage content:", error.message);
      return { ok: false, error: error.message };
    }

    revalidatePath("/");
    revalidatePath("/admin/pages/homepage");

    return { ok: true };
  } catch (error) {
    console.error("Unexpected error while saving homepage content:", error);
    return { ok: false, error: "Unexpected error while saving homepage content." };
  }
}