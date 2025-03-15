import { motion } from 'framer-motion';
import { Clock, HeartHandshake, Utensils } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function CoreValues() {
  const t = useTranslations('about');

  const coreValues = [
    { icon: Utensils, title: 'quality', description: 'qualityDesc' },
    { icon: HeartHandshake, title: 'tradition', description: 'traditionDesc' },
    { icon: Clock, title: 'consistency', description: 'consistencyDesc' },
  ];

  return (
    <section className="mb-24">
      <h2 className="mb-12 text-center text-3xl font-bold">{t('coreValues')}</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {coreValues.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-xl bg-white p-8 shadow-md transition-shadow hover:shadow-lg"
          >
            <value.icon className="mb-4 h-12 w-12 text-amber-600" />
            <h3 className="mb-2 text-xl font-semibold">{t(value.title)}</h3>
            <p className="text-gray-600">{t(value.description)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
