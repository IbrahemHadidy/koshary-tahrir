import { getTranslations } from 'next-intl/server';
import Hero from './Hero';
import Info from './Info';
import Map from './Map';

export default async function Contact() {
  const t = await getTranslations('contact');
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Hero t={t} />
      <Info t={t} />
      <Map />
    </div>
  );
}
