'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Results from './Results';

export default function Menu() {
  const [searchQuery, setSearchQuery] = useState('');
  const t = useTranslations('menu');

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Title and search */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">{t('title')}</h1>
        <div className="mx-auto max-w-md">
          <input
            type="text"
            placeholder={t('searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-gray-200 bg-white px-6 py-3 focus:border-transparent focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
        </div>
      </div>

      <Results searchQuery={searchQuery} />
    </div>
  );
}
