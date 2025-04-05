import { useCart } from '@context/CartContext';
import type { MenuItem } from '@data/menu';
import { Link } from '@i18n/navigation';
import formatNumber from '@utils/formatNumber';
import { Trash2 } from 'lucide-react';
import type { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

interface CartItemProps {
  t: ReturnType<typeof useTranslations<'cart'>>;
  locale: ReturnType<typeof useLocale>;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  item: MenuItem;
  quantity: number;
}

export default function CartItem({ t, locale, item, quantity }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="mt-4 flex animate-[fadeIn_0.5s_ease-out] flex-col items-center gap-3 p-4 sm:mt-0 sm:flex-row sm:gap-0 sm:p-6">
      <div className="flex w-full items-center gap-3">
        <Link href={`/menu/${item.id}`} className="relative aspect-square h-20 sm:h-24">
          <Image
            src={item.images[0]}
            alt="product"
            fill
            loading="lazy"
            className="object-contain px-1"
          />
        </Link>

        <div className="ml-6 flex-1">
          <Link href={`/menu/${item.id}`}>
            <h3 className="text-xl font-semibold text-gray-900">{item.name[locale ?? 'en']}</h3>
          </Link>
          <p className="text-gray-600">
            {formatNumber(item.price, locale)} {t('currency')}
          </p>
        </div>
      </div>

      <div className="flex w-full items-center justify-between sm:w-auto">
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border">
            <button
              onClick={() => updateQuantity(item.id, quantity - 1)}
              disabled={quantity === 1}
              name="decrement"
              className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent ltr:rounded-l-full rtl:rounded-r-full"
            >
              -
            </button>
            <span className="w-12 text-center">{formatNumber(quantity, locale)}</span>
            <button
              onClick={() => updateQuantity(item.id, quantity + 1)}
              disabled={quantity === 99}
              name="increment"
              className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent ltr:rounded-r-full rtl:rounded-l-full"
            >
              +
            </button>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            name="remove"
            className="cursor-pointer text-red-500 transition-colors hover:text-red-700"
          >
            <Trash2 className="h-6 w-6" />
          </button>
        </div>

        <div className="w-28 ltr:text-right rtl:text-left">
          <p className="text-lg font-semibold">
            {formatNumber((item.price * quantity).toFixed(2), locale)} {t('currency')}
          </p>
        </div>
      </div>
    </div>
  );
}
