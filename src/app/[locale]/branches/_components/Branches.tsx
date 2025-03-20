'use client';

import { branches } from '@data/branches';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Branch from './Branch';

export default function Branches() {
  const t = useTranslations('branches');

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Branches title and subtitle */}
      <div className="mb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-4xl font-bold text-gray-900"
        >
          {t('title')}
        </motion.h1>
        <p className="mx-auto max-w-2xl text-gray-600">{t('subtitle')}</p>
      </div>

      {/* Branches grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {branches.map((branch, idx) => (
          <Branch key={branch.id} branch={branch} idx={idx} />
        ))}
      </div>
    </div>
  );
}
