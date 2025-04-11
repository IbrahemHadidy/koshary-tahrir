'use client';

import { Link } from '@i18n/navigation';
import { AlertTriangle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ErrorPage() {
  const t = useTranslations('error');

  return (
    <div
      className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center"
      style={{
        animation: `slideUpFade 0.6s ease-out 0.1s both`,
      }}
    >
      <div className="flex items-center justify-center rounded-full bg-red-100 p-4 shadow-inner">
        <AlertTriangle className="h-12 w-12 text-red-500" />
      </div>

      <h1 className="mt-6 text-2xl font-bold text-gray-900">
        {t('title', { defaultValue: 'Something went wrong' })}
      </h1>

      <p className="mt-2 max-w-md text-gray-600">
        {t('description', {
          defaultValue: 'We couldn’t process your request. Please try again later.',
        })}
      </p>

      <Link
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-2 text-white transition-all hover:bg-amber-700"
      >
        {t('backHome', { defaultValue: 'Back to Home' })}
      </Link>
    </div>
  );
}
