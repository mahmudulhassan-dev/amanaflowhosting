import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

export const locales = ['en', 'bn'];

export default getRequestConfig(async ({locale}) => {
  const currentLocale = locale || 'en';
  if (!locales.includes(currentLocale as any)) notFound();

  return {
    locale: currentLocale,
    messages: (await import(`../dictionaries/${currentLocale}.json`)).default
  };
});
