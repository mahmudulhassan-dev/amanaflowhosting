import { MetadataRoute } from 'next';
import { getCanonicalUrl } from '@/lib/seo';

/**
 * Generate the core XML Sitemap mapping.
 * Phase 1 exclusively broadcasts the fully localized marketing layers.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getCanonicalUrl();
  
  // Array of core indexable page slugs (without locale prefixes)
  const coreRoutes = [
    '', // Homepage
    '/web-hosting',
    '/wordpress-hosting',
    '/vps-hosting',
    '/agency-hosting',
    '/bare-metal-servers',
    '/business-hosting',
    '/cloud-hosting',
    '/dedicated-server-hosting',
    '/email-hosting',
    '/managed-vps-hosting',
    '/reseller-hosting',
    '/starter-hosting',
    '/storage-hosting',
    '/windows-vps-hosting',
    '/domain-name-search',
    '/ssl-certificates',
    '/ddos-protection',
    '/website-backups',
    '/why-choose-us',
    '/about',
    '/contact',
    '/careers',
    '/affiliate'
  ];

  return coreRoutes.map((route) => {
    const url = route === '' ? baseUrl : `${baseUrl}${route}`;

    return {
      url: url,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'daily' : 'weekly',
      priority: route === '' ? 1.0 : (route.includes('/hosting') ? 0.9 : 0.8),
    };
  });
}
