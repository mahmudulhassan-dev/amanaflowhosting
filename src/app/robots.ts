import { MetadataRoute } from 'next';
import { isProductionEnv, getCanonicalUrl } from '@/lib/seo';

/**
 * Vercel Environment-Aware Robots Config
 * Secures preview deployments via wildcard disallow, while 
 * explicitly blocking sensitive paths on production.
 */
export default function robots(): MetadataRoute.Robots {
  // 1. Non-Production Safety Net (Preview branch no-indexing)
  if (!isProductionEnv()) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  // 2. Production Indexing Rules
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/', 
        '/_next/', 
        '/checkout/', 
        '/cart/', 
        '/client-area/', 
        '/login', 
        '/register',
        '/forgot-password'
      ],
    },
    sitemap: `${getCanonicalUrl()}/sitemap.xml`,
  };
}
