import Interior from '@images/branches/branch-2.webp';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Story() {
  const t = useTranslations('about');

  return (
    <section className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid items-center gap-12 md:grid-cols-2"
      >
        <div className="space-y-6">
          <h2 className="border-amber-500 text-3xl font-bold text-gray-900 ltr:border-l-4 ltr:pl-4 rtl:border-r-4 rtl:pr-4">
            {t('ourStory')}
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">{t('storyContent')}</p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
          <Image src={Interior} alt="Restaurant interior" fill className="object-cover" />
        </div>
      </motion.div>
    </section>
  );
}
