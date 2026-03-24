import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/hosting/shared',
        destination: '/web-hosting',
        permanent: true,
      },
      {
        source: '/hosting/vps',
        destination: '/vps-hosting',
        permanent: true,
      },
      {
        source: '/hosting/wordpress',
        destination: '/wordpress-hosting',
        permanent: true,
      },
      {
        source: '/domains',
        destination: '/domain-name-search',
        permanent: true,
      },
      {
        source: '/security/ssl',
        destination: '/ssl-certificates',
        permanent: true,
      },
      // Phase 2: Additional Hosting & Security
      { source: '/hosting/agency', destination: '/agency-hosting', permanent: true },
      { source: '/hosting/bare-metal', destination: '/bare-metal-servers', permanent: true },
      { source: '/hosting/business', destination: '/business-hosting', permanent: true },
      { source: '/hosting/cloud', destination: '/cloud-hosting', permanent: true },
      { source: '/hosting/dedicated', destination: '/dedicated-server-hosting', permanent: true },
      { source: '/hosting/email', destination: '/email-hosting', permanent: true },
      { source: '/hosting/managed-vps', destination: '/managed-vps-hosting', permanent: true },
      { source: '/hosting/reseller', destination: '/reseller-hosting', permanent: true },
      { source: '/hosting/starter', destination: '/starter-hosting', permanent: true },
      { source: '/hosting/storage', destination: '/storage-hosting', permanent: true },
      { source: '/hosting/windows-vps', destination: '/windows-vps-hosting', permanent: true },
      { source: '/security/backups', destination: '/website-backups', permanent: true },
      { source: '/security/ddos', destination: '/ddos-protection', permanent: true },

      // Handle locale-prefixed redirects (Bangla) -> Redirect to Root
      { source: '/bn', destination: '/', permanent: true },
      { source: '/en', destination: '/', permanent: true },
      { source: '/bn/hosting/shared', destination: '/web-hosting', permanent: true },
      { source: '/bn/hosting/vps', destination: '/vps-hosting', permanent: true },
      { source: '/bn/hosting/wordpress', destination: '/wordpress-hosting', permanent: true },
      { source: '/bn/domains', destination: '/domain-name-search', permanent: true },
      { source: '/bn/security/ssl', destination: '/ssl-certificates', permanent: true },
      // Phase 2: Bangla Prefixed -> Root
      { source: '/bn/hosting/agency', destination: '/agency-hosting', permanent: true },
      { source: '/bn/hosting/bare-metal', destination: '/bare-metal-servers', permanent: true },
      { source: '/bn/hosting/business', destination: '/business-hosting', permanent: true },
      { source: '/bn/hosting/cloud', destination: '/cloud-hosting', permanent: true },
      { source: '/bn/hosting/dedicated', destination: '/dedicated-server-hosting', permanent: true },
      { source: '/bn/hosting/email', destination: '/email-hosting', permanent: true },
      { source: '/bn/hosting/managed-vps', destination: '/managed-vps-hosting', permanent: true },
      { source: '/bn/hosting/reseller', destination: '/reseller-hosting', permanent: true },
      { source: '/bn/hosting/starter', destination: '/starter-hosting', permanent: true },
      { source: '/bn/hosting/storage', destination: '/storage-hosting', permanent: true },
      { source: '/bn/hosting/windows-vps', destination: '/windows-vps-hosting', permanent: true },
      { source: '/bn/security/backups', destination: '/website-backups', permanent: true },
      { source: '/bn/security/ddos', destination: '/ddos-protection', permanent: true },
    ];
  },
};

export default nextConfig;
