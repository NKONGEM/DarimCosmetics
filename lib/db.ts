import { getCloudflareContext } from "@opennextjs/cloudflare";

/**
 * Returns the Cloudflare D1 database connection for the current request.
 * Works both in local development (npm run dev / npm run preview) and once
 * deployed to Cloudflare, via the "DB" binding declared in wrangler.jsonc.
 */
export function getDB(): D1Database {
  const { env } = getCloudflareContext();
  return (env as unknown as CloudflareEnv).DB;
}
