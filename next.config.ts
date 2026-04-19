import type { NextConfig } from "next";

/**
 * GitHub Pages project sites live under `https://<user>.github.io/<repo>/`.
 * Set NEXT_PUBLIC_BASE_PATH to `/<repo>` when building (e.g. `/mias-market`).
 * Must be public so `lib/publicUrl.ts` can prefix `/images/...` for next/image.
 * Leave unset for `username.github.io` root or a custom domain at `/`.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || "";

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
