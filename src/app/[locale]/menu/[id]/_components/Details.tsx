import type { Additional } from '@data/menu';
import formatNumber from '@utils/formatNumber';
import { Carrot, Droplet, Flame, ForkKnifeCrossed, Soup, Utensils } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

interface DetailsProps {
  name: { ar: string; en: string };
  description: { ar: string; en: string };
  price: number;
  details?: {
    en: Additional[];
    ar: Additional[];
  };
}

export default function Details({ name, description, price, details }: DetailsProps) {
  const t = useTranslations('product');
  const locale = useLocale();

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold text-gray-900">{name[locale]}</h1>
      <p className="mb-4 leading-relaxed text-gray-700">{description[locale]}</p>
      <p className="mb-6 text-3xl font-semibold text-amber-600">
        {formatNumber(price, locale)} {t('currency')}
      </p>

      {details && (
        <div className="mb-8 rounded-xl bg-amber-50 p-6">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <ForkKnifeCrossed className="h-5 w-5" />
            {t('includes')}
          </h2>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {details[locale].map((item, index) => (
              <li key={index} className="flex items-center gap-3 rounded-lg bg-white p-3">
                <span className="rounded-md bg-amber-100 p-2">
                  {item.type === 'Tomato Sauce' || item.type === 'صلصة' ? (
                    <Soup className="h-4 w-4 text-amber-600" />
                  ) : item.type === 'Garlic Sauce' || item.type === 'دقة' ? (
                    <Droplet className="h-4 w-4 text-amber-600" />
                  ) : item.type === 'Hot Sauce' || item.type === 'شطة' ? (
                    <Flame className="h-4 w-4 text-amber-600" />
                  ) : item.type === 'Fried Onions' || item.type === 'تقلية' ? (
                    <Carrot className="h-4 w-4 text-amber-600" />
                  ) : item.type === 'Spoon' || item.type === 'ملعقة' ? (
                    <Utensils className="h-4 w-4 text-amber-600" />
                  ) : (
                    <Utensils className="h-4 w-4 text-amber-600" />
                  )}
                </span>
                <div>
                  <p className="font-medium">{item.type}</p>
                  <p className="text-sm text-gray-600">{item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
