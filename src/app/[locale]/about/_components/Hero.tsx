import AboutHero from '@images/about-hero.jpg';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('about');

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative mb-16 h-96 overflow-hidden rounded-2xl"
    >
      <Image src={AboutHero} alt="Koshary Al-Tahrir kitchen" fill className="object-cover" />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-gray-900/60 p-8">
        <h1 className="text-4xl font-bold text-white md:text-6xl">{t('title')}</h1>
      </div>
    </motion.section>
  );
}
