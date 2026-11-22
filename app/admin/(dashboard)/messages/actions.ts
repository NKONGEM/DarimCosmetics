"use server";

import { requireAdmin } from "@/lib/admin";
import { revalidatePath } from "next/cache";
import { markMessageRead } from "@/lib/data";

export async function markRead(id: number) {
  await requireAdmin();
  await markMessageRead(id);
  revalidatePath("/admin/messages");
}
