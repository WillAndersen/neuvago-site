import "server-only";
import type { PageSlug } from "@/lib/content/page-slugs";
import { supabaseAdmin } from "@/lib/supabase/admin";

type GetPageContentParams<T> = {
  pageSlug: PageSlug;
  fallbackContent: T;
};

export async function getPageContent<T>({
  pageSlug,
  fallbackContent,
}: GetPageContentParams<T>): Promise<T> {
  try {
    const { data, error } = await supabaseAdmin
      .from("page_content")
      .select("content_json")
      .eq("page_slug", pageSlug)
      .maybeSingle();

    if (error) {
      console.error(`Failed to fetch page content for ${pageSlug}:`, error.message);
      return fallbackContent;
    }

    if (!data?.content_json) {
      return fallbackContent;
    }

    return data.content_json as T;
  } catch (error) {
    console.error(`Unexpected error while fetching page content for ${pageSlug}:`, error);
    return fallbackContent;
  }
}
