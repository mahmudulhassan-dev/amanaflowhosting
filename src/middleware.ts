import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  locales: locales,
  defaultLocale: 'en',
  // Configure redirect behavior: 
  // We leave default locale prefix out of URL by default, or you can force it in URL.
  // For better SEO, English (default) without prefix, Bengali with /bn/ prefix.
  localePrefix: 'as-needed'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
