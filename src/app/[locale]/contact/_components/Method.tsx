import type { ContactMethod } from '@data/contact';
import type { getTranslations } from 'next-intl/server';

interface ContactMethodProps {
  method: ContactMethod;
  idx: number;
  t: Awaited<ReturnType<typeof getTranslations<'contact'>>>;
}

export default function Method({ method, idx, t }: ContactMethodProps) {
  return (
    <div
      className="group rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
      style={{ animation: `slideUpFade 0.5s ease-out ${Number((idx * 0.1).toFixed(1))}s both` }}
    >
      <a
        href={method.link}
        target={method.link ? '_blank' : undefined}
        rel="noopener noreferrer"
        className="flex items-start gap-4"
      >
        <div className="rounded-lg bg-amber-50 p-3 group-hover:text-amber-600">
          <method.icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-900">{t(method.title)}</h3>
          <p className="text-gray-600">{t(method.content)}</p>
        </div>
      </a>
    </div>
  );
}
