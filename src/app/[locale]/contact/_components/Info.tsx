import contactMethods from '@data/contact';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Form from './Form';
import Method from './Method';

export default function Info() {
  const t = useTranslations('contact');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mb-24 grid gap-12 md:grid-cols-2"
    >
      {/* Contact Methods */}
      <div className="space-y-8">
        <h2 className="border-amber-500 text-3xl font-bold text-gray-900 ltr:border-l-4 ltr:pl-4 rtl:border-r-4 rtl:pr-4">
          {t('getInTouch')}
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {contactMethods.map((method, index) => (
            <Method key={method.title} method={method} idx={index} />
          ))}
        </div>
      </div>

      <Form />
    </motion.div>
  );
}
