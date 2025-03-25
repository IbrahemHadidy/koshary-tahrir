import { hasLocale, type Locale, type Messages } from 'next-intl';
import { getRequestConfig, type RequestConfig } from 'next-intl/server';
import { routing } from './routing';

async function loadLocaleMessages(locale: Locale): Promise<Messages> {
  try {
    const messagesModule = await import(`../../messages/${locale ?? 'en'}.json`);
    return messagesModule.default;
  } catch (error) {
    console.error(`Failed to load messages for locale "${locale ?? 'en'}":`, error);
    throw new Error(`Locale messages not found for "${locale ?? 'en'}"`);
  }
}

export default getRequestConfig(async ({ requestLocale }): Promise<RequestConfig> => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: await loadLocaleMessages(locale),
  };
});
