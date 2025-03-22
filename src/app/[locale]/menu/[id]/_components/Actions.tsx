import { useCart } from '@context/CartContext';
import type { MenuItem } from '@data/menu';
import { Link } from '@i18n/navigation';
import formatNumber from '@utils/formatNumber';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';

interface ActionsProps {
  product: MenuItem;
}

export default function Actions({ product }: ActionsProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const t = useTranslations('product');
  const locale = useLocale();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-full border bg-white">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            disabled={quantity === 1}
            className="cursor-pointer px-5 py-3 text-gray-600 hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent ltr:rounded-l-full rtl:rounded-r-full"
          >
            -
          </button>
          <span className="w-12 text-center">{formatNumber(quantity, locale)}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            disabled={quantity === 99}
            className="cursor-pointer px-5 py-3 text-gray-600 hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent ltr:rounded-r-full rtl:rounded-l-full"
          >
            +
          </button>
        </div>

        <button
          onClick={() => addToCart(product, quantity)}
          className="flex-1 cursor-pointer rounded-full bg-amber-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-amber-700"
        >
          {t('addToCart')}
        </button>
      </div>

      <Link
        href="/menu"
        className="block w-full rounded-full border border-gray-300 px-8 py-4 text-center text-gray-600 transition-colors hover:border-amber-600 hover:text-amber-600"
      >
        {t('backToMenu')}
      </Link>
    </div>
  );
}
