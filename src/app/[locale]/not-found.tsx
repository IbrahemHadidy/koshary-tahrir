import { Link } from '@i18n/navigation';
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';

export default async function NotFound() {
  const t = await getTranslations('notFound');
  const isRTL = (await getLocale()) === 'ar';

  return (
    <section className="flex min-h-[calc(100vh-15rem)] items-center justify-center bg-gray-50 px-6 py-16 sm:px-12">
      <div className="max-w-2xl space-y-7 text-center">
        <div className="mx-auto flex h-22 w-22 items-center justify-center rounded-full bg-white">
          <Compass
            className="h-18 w-18 text-amber-500 transition-colors duration-300 hover:text-amber-700"
            strokeWidth={1.5}
          />
        </div>
        <h1 className="text-7xl font-extrabold text-amber-600">404</h1>
        <h2 className="text-4xl font-semibold text-gray-800">{t('title')}</h2>
        <p className="text-xl text-gray-600">{t('description')}</p>
        <div className="mt-6">
          <Link
            href="/"
            className="focus:outline-nonLinkcus:ring-2 inline-flex items-center justify-center gap-2 rounded-lg border border-amber-200 bg-amber-100 px-4 py-2.5 text-lg font-medium text-amber-700 transition-all hover:bg-amber-200 hover:text-amber-800 focus:ring-amber-500 focus:ring-offset-2"
          >
            {isRTL ? (
              <>
                <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                {t('goHome')}
              </>
            ) : (
              <>
                <ArrowLeft className="h-5 w-5" strokeWidth={2.5} />
                {t('goHome')}
              </>
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}
