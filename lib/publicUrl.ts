/**
 * Absolute path under the site root for static files in `public/`.
 * When hosting under a subpath (GitHub Pages `/<repo>/`), set
 * `NEXT_PUBLIC_BASE_PATH` to that prefix at build time so it matches
 * `basePath` in `next.config.ts`.
 */
export function publicUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!base) return normalized;
  return `${base}${normalized}`;
}
