import { useCart } from '@context/CartContext';
import type { MenuItem } from '@data/menu';
import { Link } from '@i18n/navigation';
import formatNumber from '@utils/formatNumber';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

interface ProductProps {
  idx: number;
  item: MenuItem;
}

export default function Product({ idx, item }: ProductProps) {
  const locale = useLocale();
  const t = useTranslations('menu');
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (value: number) => {
    setQuantity(Math.max(1, value));
  };

  return (
    <div
      className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg"
      style={{
        animation: `slideUpFade 0.5s ease-out ${Number((idx * 0.1).toFixed(1))}s both`,
      }}
    >
      <Link href={`/menu/${item.id}`}>
        <div className="relative h-64">
          <Image
            src={item.images[0]}
            alt={item.name.en}
            fill
            loading="lazy"
            className="object-contain p-4 transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <h3 className="text-xl font-semibold text-gray-900">{item.name[locale ?? 'en']}</h3>
          <span className="text-lg font-medium text-amber-600">
            {formatNumber(item.price, locale)} {t('currency')}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center justify-between rounded-full border">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity === 1}
              name="decrement"
              className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent ltr:rounded-l-full rtl:rounded-r-full"
            >
              -
            </button>
            <span className="w-8 px-2 text-center">{formatNumber(quantity, locale)}</span>
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              disabled={quantity === 99}
              name="increment"
              className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent ltr:rounded-r-full rtl:rounded-l-full"
            >
              +
            </button>
          </div>
          <button
            onClick={() => addToCart(item, quantity)}
            name="addToCart"
            className="flex-1 cursor-pointer rounded-full bg-amber-600 px-6 py-2 text-white transition-colors hover:bg-amber-700"
          >
            {t('addToCart')}
          </button>
        </div>
      </div>
    </div>
  );
}
