"use server";

import { revalidatePath } from "next/cache";
import { markMessageRead } from "@/lib/data";

export async function markRead(id: number) {
  await markMessageRead(id);
  revalidatePath("/admin/messages");
}
