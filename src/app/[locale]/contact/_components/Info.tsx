import contactMethods from '@data/contact';
import type { getTranslations } from 'next-intl/server';
import Form from './Form';
import Method from './Method';

interface InfoProps {
  t: Awaited<ReturnType<typeof getTranslations<'contact'>>>;
}

export default function Info({ t }: InfoProps) {
  return (
    <div className="mb-24 grid animate-[fadeIn_0.5s_ease-out_0.2s_both] gap-12 md:grid-cols-2">
      {/* Contact Methods */}
      <div className="space-y-8">
        <h2 className="border-amber-500 text-3xl font-bold text-gray-900 ltr:border-l-4 ltr:pl-4 rtl:border-r-4 rtl:pr-4">
          {t('getInTouch')}
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {contactMethods.map((method, index) => (
            <Method key={method.title} method={method} idx={index} t={t} />
          ))}
        </div>
      </div>

      <Form t={t} />
    </div>
  );
}
