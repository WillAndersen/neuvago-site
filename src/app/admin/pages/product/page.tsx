import { getProductContent } from "@/lib/content/get-product-content";
import { ProductEditorClient } from "./ProductEditorClient";

export default async function AdminProductEditorPage() {
  const content = await getProductContent();

  return <ProductEditorClient initialContent={content} />;
}
