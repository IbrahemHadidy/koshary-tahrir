import { useTranslations } from 'next-intl';

export default function Form() {
  const t = useTranslations('contact');

  return (
    <div className="rounded-xl bg-white p-6 shadow-md md:p-8">
      <h2 className="mb-6 text-3xl font-bold text-gray-900">{t('sendMessage')}</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <input
            type="text"
            placeholder={t('name')}
            className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder={t('email')}
            className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder={t('subject')}
            className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
          <textarea
            placeholder={t('message')}
            rows={5}
            className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-700"
        >
          {t('sendMessage')}
        </button>
      </form>
    </div>
  );
}
