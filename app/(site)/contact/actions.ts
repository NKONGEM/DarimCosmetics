"use server";

import { createMessage } from "@/lib/data";

type ContactFormState = { ok: boolean; error: string };

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Please fill in your name, email and message." };
  }

  await createMessage({ name, email, phone, message });
  return { ok: true, error: "" };
}
