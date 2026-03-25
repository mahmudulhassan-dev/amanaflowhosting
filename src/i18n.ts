import {getRequestConfig} from 'next-intl/server';

export const locales = ['en', 'bn'];

export default getRequestConfig(async ({locale}) => {
  // If no locale is provided (e.g. middleware disabled), default to 'en'
  const currentLocale = locale && locales.includes(locale) ? locale : 'en';

  return {
    locale: currentLocale,
    messages: (await import(`../dictionaries/${currentLocale}.json`)).default
  };
});
