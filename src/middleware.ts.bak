import createMiddleware from 'next-intl/middleware';
import {locales} from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'en',
  
  // Use standard routing configuration
  localePrefix: 'as-needed'
});

export const config = {
  // We disable the matcher because we DO NOT use a `src/app/[locale]` folder structure. 
  // If we match here, next-intl will rewrite the URL to `/en/...` and throw a 404.
  matcher: []
};
