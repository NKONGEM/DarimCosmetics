"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { upsertProduct, deleteProduct as deleteProductRow } from "@/lib/data";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function saveProduct(existingId: string | null, formData: FormData) {
  const name = String(formData.get("name") || "").trim();
  const id = existingId || slugify(name) || `product-${Date.now()}`;
  const priceRaw = String(formData.get("price_kes") || "").trim();

  await upsertProduct({
    id,
    name,
    category_id: String(formData.get("category_id") || ""),
    price_kes: priceRaw ? Number(priceRaw) : null,
    short_description: String(formData.get("short_description") || "") || null,
    description: String(formData.get("description") || "") || null,
    image_url: String(formData.get("image_url") || "") || null,
    in_stock: formData.get("in_stock") ? 1 : 0,
    featured: formData.get("featured") ? 1 : 0,
    status: (formData.get("status") as "draft" | "published") || "draft",
    seo_title: String(formData.get("seo_title") || "") || null,
    seo_description: String(formData.get("seo_description") || "") || null,
  });

  revalidatePath("/admin/products");
  revalidatePath("/shop");
  redirect("/admin/products");
}

export async function deleteProduct(id: string) {
  await deleteProductRow(id);
  revalidatePath("/admin/products");
  revalidatePath("/shop");
  redirect("/admin/products");
}
