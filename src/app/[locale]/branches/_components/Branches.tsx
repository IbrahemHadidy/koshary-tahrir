import { branches } from '@data/branches';
import { useLocale, useTranslations } from 'next-intl';
import Branch from './Branch';

export default function Branches() {
  const t = useTranslations('branches');
  const locale = useLocale();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Branches title and subtitle */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 animate-[slideUpFade_0.5s_ease-out] text-4xl font-bold text-gray-900">
          {t('title')}
        </h1>
        <p className="mx-auto max-w-2xl animate-[slideUpFade_0.5s_ease-out] text-gray-600">
          {t('subtitle')}
        </p>
      </div>

      {/* Branches grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {branches.map((branch, idx) => (
          <Branch key={branch.id} branch={branch} idx={idx} t={t} locale={locale} />
        ))}
      </div>
    </div>
  );
}
