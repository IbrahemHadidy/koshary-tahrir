import AboutHero from '@images/about-hero.webp';
import type { useTranslations } from 'next-intl';
import Image from 'next/image';

interface HeroProps {
  t: ReturnType<typeof useTranslations<'about'>>;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="relative mb-16 h-96 animate-[slideUpFade_0.5s_ease-out] overflow-hidden rounded-2xl">
      <Image src={AboutHero} alt="hero" fill priority className="object-cover" />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-gray-900/60 p-8">
        <h1 className="text-4xl font-bold text-white md:text-6xl">{t('title')}</h1>
      </div>
    </section>
  );
}
