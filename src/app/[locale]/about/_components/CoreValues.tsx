import type en from '@messages/en.json';
import { Clock, HeartHandshake, type LucideProps, Utensils } from 'lucide-react';
import type { useTranslations } from 'next-intl';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

type AboutTranslatioKey = keyof typeof en.about;

type CoreValue = {
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  title: AboutTranslatioKey;
  description: AboutTranslatioKey;
};

interface CoreValuesProps {
  t: ReturnType<typeof useTranslations<'about'>>;
}

export default function CoreValues({ t }: CoreValuesProps) {
  const coreValues: CoreValue[] = [
    { icon: Utensils, title: 'quality', description: 'qualityDesc' },
    { icon: HeartHandshake, title: 'tradition', description: 'traditionDesc' },
    { icon: Clock, title: 'consistency', description: 'consistencyDesc' },
  ];

  return (
    <section className="mb-24">
      <h2 className="mb-12 text-center text-3xl font-bold">{t('coreValues')}</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {coreValues.map((value, idx) => (
          <div
            key={value.title}
            className="rounded-xl bg-white p-8 shadow-md transition-shadow hover:shadow-lg"
            style={{
              animation: `slideUpFade 0.5s ease-out ${Number((idx * 0.1).toFixed(1))}s both`,
            }}
          >
            <value.icon className="mb-4 h-12 w-12 text-amber-600" />
            <h3 className="mb-2 text-xl font-semibold">{t(value.title)}</h3>
            <p className="text-gray-600">{t(value.description)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
