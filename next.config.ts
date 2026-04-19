import type { NextConfig } from "next";

/**
 * GitHub Pages project sites live under `https://<user>.github.io/<repo>/`.
 * Set BASE_PATH to `/<repo>` when building for that (e.g. BASE_PATH=/mias-market).
 * Omit or leave empty for `username.github.io` root or a custom domain at `/`.
 */
const basePath = process.env.BASE_PATH?.trim() || "";

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
