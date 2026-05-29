"use server";

import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { PAGE_SLUGS } from "@/lib/content/page-slugs";
import { productPageContent as productPageContentFallback } from "@/content/product";

type DeepWiden<T> =
  T extends string ? string
  : T extends number ? number
  : T extends boolean ? boolean
  : T extends readonly (infer U)[] ? DeepWiden<U>[]
  : T extends object ? { -readonly [K in keyof T]: DeepWiden<T[K]> }
  : T;

type ProductContent = DeepWiden<typeof productPageContentFallback>;

type SaveProductResult =
  | { ok: true }
  | { ok: false; error: string };

export async function saveProductContent(
  content: ProductContent
): Promise<SaveProductResult> {
  try {
    const { error } = await supabaseAdmin
      .from("page_content")
      .upsert(
        {
          page_slug: PAGE_SLUGS.product,
          content_json: content,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "page_slug",
        }
      );

    if (error) {
      console.error("Failed to save product content:", error.message);
      return { ok: false, error: error.message };
    }

    revalidatePath("/product");
    revalidatePath("/admin/pages/product");

    return { ok: true };
  } catch (error) {
    console.error("Unexpected error while saving product content:", error);
    return { ok: false, error: "Unexpected error while saving product content." };
  }
}