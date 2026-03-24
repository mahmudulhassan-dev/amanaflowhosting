/**
 * src/lib/seo.ts
 * Core SEO Utilities for Environment-Aware Canonical & Indexing Logic
 */

export const PRODUCTION_DOMAIN = "https://amanaflow.cloud";

/**
 * Returns the absolute hardcoded production domain.
 * SEO Rule: CRITICAL - Canonical URLs must ALWAYS point to production 
 * regardless of the environment rendering the page to prevent duplicate 
 * indexing and SEO cannibalization across Vercel preview branches.
 */
export function getCanonicalUrl(): string {
  return PRODUCTION_DOMAIN;
}

/**
 * Returns the contextual runtime URL.
 * Useful for dynamic internal API fetching where the preview URL is needed,
 * but NEVER use this for canonical meta tags.
 */
export function getRuntimeUrl(): string {
  if (process.env.NEXT_PUBLIC_APP_URL) return process.env.NEXT_PUBLIC_APP_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

/**
 * Validates if the current executing environment is the true Vercel production deployment.
 * Used heavily by layouts to inject <meta name="robots" content="noindex"> to preview deployments.
 */
export function isProductionEnv(): boolean {
  return process.env.VERCEL_ENV === "production";
}

/**
 * Generate standard Hreflang alternates for a given path.
 * Rule: The path parameter should originate from the page (e.g. '/hosting/vps')
 */
export function generateAlternateLanguages(path: string = "") {
  // Ensure the path starts with a slash if not empty
  const formattedPath = path && !path.startsWith('/') ? `/${path}` : path;
  
  const rootUrl = path === "" ? PRODUCTION_DOMAIN : `${PRODUCTION_DOMAIN}${formattedPath}`;

  return {
    "en": rootUrl,
    "bn": rootUrl,
    "x-default": rootUrl,
  };
}
