/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    // Cloudflare's Images binding (or an external URL) handles optimization
    // instead of Next's built-in Node-based image optimizer.
    unoptimized: true,
  },
  // Speeds up the production file trace: these packages are build/deploy
  // tooling (Wrangler, OpenNext, the AWS SDK pulled in by Wrangler, esbuild,
  // etc.) that the app never imports at runtime, so there's no need for the
  // tracer to walk them.
  outputFileTracingExcludes: {
    "*": [
      "node_modules/@aws-sdk/**",
      "node_modules/wrangler/**",
      "node_modules/workerd/**",
      "node_modules/@cloudflare/workerd-*/**",
      "node_modules/miniflare/**",
      "node_modules/@opennextjs/**",
      "node_modules/esbuild/**",
      "node_modules/@esbuild/**",
      "node_modules/cloudflare/**",
      "node_modules/@img/**",
      "node_modules/sharp/**",
      "node_modules/@ast-grep/**",
      "node_modules/typescript/**",
      "node_modules/@vercel/**",
    ],
  },
};

module.exports = nextConfig;

const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");
initOpenNextCloudflareForDev();
