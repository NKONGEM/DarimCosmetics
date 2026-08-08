"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { updatePage } from "@/lib/data";

export async function savePage(id: string, formData: FormData) {
  await updatePage(id, {
    title: String(formData.get("title") || ""),
    content: String(formData.get("content") || ""),
    seo_title: String(formData.get("seo_title") || "") || null,
    seo_description: String(formData.get("seo_description") || "") || null,
  });
  revalidatePath(`/${id}`);
  revalidatePath("/admin/pages");
  redirect("/admin/pages");
}
