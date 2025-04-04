'use client';

import type { MenuItem } from '@data/menu';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Results from './Results';
import SearchInput from './SearchInput';

export default function Menu() {
  const t = useTranslations('menu');

  const [filter, setFilter] = useState<{ query: string; category: MenuItem['category'] | 'all' }>({
    query: '',
    category: 'all',
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative z-1 mb-12 text-center">
        <h1 className="mb-4 animate-[slideUpFade_0.5s_ease-out] text-4xl font-bold text-gray-900">
          {t('title')}
        </h1>
        <SearchInput filter={filter} setFilter={setFilter} />
      </div>

      <Results filter={filter} />
    </div>
  );
}
