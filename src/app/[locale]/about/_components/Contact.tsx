import { Clock, MapPin } from 'lucide-react';
import type { getTranslations } from 'next-intl/server';

interface ContactProps {
  t: Awaited<ReturnType<typeof getTranslations<'about'>>>;
}

export default function Contact({ t }: ContactProps) {
  return (
    <section className="rounded-2xl bg-amber-50 p-8 md:p-12">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">{t('visitUs')}</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-amber-600" />
              <p className="text-gray-600">{t('address')}</p>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="h-6 w-6 text-amber-600" />
              <p className="text-gray-600">{t('openingHours')}</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-md">
          <h3 className="mb-6 text-xl font-semibold">{t('contactForm')}</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder={t('name')}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder={t('email')}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
            <textarea
              placeholder={t('message')}
              rows={4}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
            <button
              name="send"
              className="w-full cursor-pointer rounded-lg bg-amber-600 py-3 text-white transition-colors hover:bg-amber-700"
            >
              {t('sendMessage')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
