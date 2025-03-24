'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Results from './Results';

export default function Menu() {
  const t = useTranslations('menu');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Title and search */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 animate-[slideUpFade_0.5s_ease-out] text-4xl font-bold text-gray-900">
          {t('title')}
        </h1>
        <div className="mx-auto max-w-md animate-[slideUpFade_0.5s_ease-out_0.2s_both]">
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
