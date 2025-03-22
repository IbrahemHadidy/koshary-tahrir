import ContactImage from '@images/contact-hero.webp';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('contact');

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative mb-16 h-96 overflow-hidden rounded-2xl"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ContactImage.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60" />
      </div>
      <div className="absolute inset-0 flex items-end p-8">
        <h1 className="text-4xl font-bold text-white md:text-6xl">{t('title')}</h1>
      </div>
    </motion.section>
  );
}
