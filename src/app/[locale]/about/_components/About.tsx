import { getLocale, getTranslations } from 'next-intl/server';
import Contact from './Contact';
import CoreValues from './CoreValues';
import Hero from './Hero';
import Story from './Story';
import Team from './Team';

export default async function About() {
  const t = await getTranslations('about');
  const locale = await getLocale();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Hero t={t} />
      <Story t={t} />
      <CoreValues t={t} />
      <Team t={t} locale={locale} />
      <Contact t={t} />
    </div>
  );
}
