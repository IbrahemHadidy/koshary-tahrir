import type { ContactMethod } from '@data/contact';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface ContactMethodProps {
  method: ContactMethod;
  idx: number;
}

export default function Method({ method, idx }: ContactMethodProps) {
  const t = useTranslations('contact');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      className={`group rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg ${
        method.link ? 'cursor-pointer' : ''
      }`}
    >
      <a
        href={method.link}
        target={method.link ? '_blank' : undefined}
        rel="noopener noreferrer"
        className="flex items-start gap-4"
      >
        <div className="rounded-lg bg-amber-50 p-3 group-hover:text-amber-600">
          <method.icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-900">{t(method.title)}</h3>
          <p className="text-gray-600">{t(method.content)}</p>
        </div>
      </a>
    </motion.div>
  );
}
