"use server";

import { revalidatePath } from "next/cache";
import { updateSettings } from "@/lib/data";

export async function saveSettings(formData: FormData) {
  await updateSettings({
    business_name: String(formData.get("business_name") || "Darim Luxe Cosmetics"),
    phone: String(formData.get("phone") || "") || null,
    whatsapp_number: String(formData.get("whatsapp_number") || "").replace(/[^0-9]/g, "") || null,
    email: String(formData.get("email") || "") || null,
    address: String(formData.get("address") || "") || null,
    hours: String(formData.get("hours") || "") || null,
    map_url: String(formData.get("map_url") || "") || null,
    instagram_url: String(formData.get("instagram_url") || "") || null,
    facebook_url: String(formData.get("facebook_url") || "") || null,
    tiktok_url: String(formData.get("tiktok_url") || "") || null,
    announcement_text: String(formData.get("announcement_text") || "") || null,
  });
  // Settings affect nearly every page (header/footer/contact), so refresh everything.
  revalidatePath("/", "layout");
}
