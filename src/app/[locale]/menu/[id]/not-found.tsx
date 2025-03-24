import { Link } from '@i18n/navigation';
import { Utensils } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ProductNotFound() {
  const t = useTranslations('product');

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex animate-[fadeIn_0.5s_ease-out] flex-col items-center justify-center space-y-8 rounded-2xl bg-amber-50 p-12 text-center shadow-lg">
        <div className="space-y-4">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-amber-100">
            <Utensils className="h-12 w-12 text-amber-600" />
          </div>

          <h1 className="text-4xl font-bold text-gray-900">{t('notFoundTitle')}</h1>

          <p className="text-lg text-gray-700">{t('notFoundDescription')}</p>
        </div>

        <Link
          href="/menu"
          className="animate-[fadeScale_0.3s_ease-out] rounded-full bg-amber-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-amber-700"
        >
          {t('backToMenu')}
        </Link>
      </div>
    </div>
  );
}
