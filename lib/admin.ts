import { clerkClient, currentUser } from "@clerk/nextjs/server";

/**
 * Only these email addresses can use the /admin dashboard.
 * Signing in to Clerk is not enough on its own: the account must also have
 * one of these emails, verified. To add someone, add their email here, or set
 * an ADMIN_EMAILS variable (comma-separated) in Cloudflare, which replaces this list.
 */
const DEFAULT_ADMIN_EMAILS = ["nkongemurangiri@gmail.com"];

export function adminEmails(): string[] {
  const fromEnv = process.env.ADMIN_EMAILS;
  const list = fromEnv && fromEnv.trim() ? fromEnv.split(",") : DEFAULT_ADMIN_EMAILS;
  return list.map((e) => e.trim().toLowerCase()).filter(Boolean);
}

type UserWithEmails = {
  emailAddresses: { emailAddress: string; verification: { status: string } | null }[];
} | null;

export function hasAdminEmail(user: UserWithEmails): boolean {
  if (!user) return false;
  const allowed = adminEmails();
  return user.emailAddresses.some(
    (e) => e.verification?.status === "verified" && allowed.includes(e.emailAddress.toLowerCase())
  );
}

/** For middleware: looks the user up by id. */
export async function isAdminUserId(userId: string | null): Promise<boolean> {
  if (!userId) return false;
  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  return hasAdminEmail(user);
}

/** Call at the top of every admin server action. Throws if the caller isn't an admin. */
export async function requireAdmin(): Promise<void> {
  const user = await currentUser();
  if (!hasAdminEmail(user)) {
    throw new Error("Not authorized");
  }
}
