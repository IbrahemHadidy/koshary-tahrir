'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Results from './Results';
import SearchInput from './SearchInput';

export default function Menu() {
  const t = useTranslations('menu');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 animate-[slideUpFade_0.5s_ease-out] text-4xl font-bold text-gray-900">
          {t('title')}
        </h1>
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          placeholder={t('searchPlaceholder')}
        />
      </div>

      <Results searchQuery={searchQuery} />
    </div>
  );
}
