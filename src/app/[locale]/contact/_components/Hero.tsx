import ContactImage from '@images/contact-hero.webp';
import type { getTranslations } from 'next-intl/server';
import Image from 'next/image';

interface HeroProps {
  t: Awaited<ReturnType<typeof getTranslations<'contact'>>>;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="relative mb-16 h-96 animate-[slideUpFade_0.5s_ease-out] overflow-hidden rounded-2xl">
      <div className="absolute inset-0">
        <Image
          src={ContactImage}
          alt="Contact Background"
          fill
          priority
          placeholder="blur"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60" />
      </div>
      <div className="absolute inset-0 flex items-end p-8">
        <h1 className="text-4xl font-bold text-white md:text-6xl">{t('title')}</h1>
      </div>
    </section>
  );
}
