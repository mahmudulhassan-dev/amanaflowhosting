import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'bn'],

  // Used when no locale matches
  defaultLocale: 'en',
  
  // Disable locale-based routing as we don't use [locale] architecture
  localePrefix: 'never'
});

export const config = {
  // Match only localized paths if they ever exist, but otherwise STAY OUT of the way
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
