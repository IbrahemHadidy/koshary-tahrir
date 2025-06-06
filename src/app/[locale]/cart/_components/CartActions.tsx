import type { CartItem } from '@context/CartContext';
import { Link } from '@i18n/navigation';
import formatNumber from '@utils/formatNumber';
import { Trash2 } from 'lucide-react';
import type { useLocale, useTranslations } from 'next-intl';

interface CartActionsProps {
  t: ReturnType<typeof useTranslations<'cart'>>;
  locale: ReturnType<typeof useLocale>;
  cart: CartItem[];
  clearCart: (disableToast?: boolean) => void;
  setShowCheckoutModal: (value: boolean) => void;
}

export default function CartActions({
  t,
  locale,
  cart,
  clearCart,
  setShowCheckoutModal,
}: CartActionsProps) {
  const hasKoshary = cart.some((item) => item.item.category === 'koshary');
  const totalPrice = cart.reduce(
    (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
    0
  );

  return (
    <>
      <div className="rounded-xl bg-white p-4 shadow-md sm:p-6">
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => clearCart()}
            className="flex cursor-pointer items-center gap-2 rounded-full bg-amber-100 px-6 py-3 text-red-600 transition-colors hover:bg-amber-200 hover:text-red-700"
          >
            <Trash2 className="h-5 w-5" />
            {t('clearCart')}
          </button>

          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900">
              {t('total')}: {formatNumber(totalPrice.toFixed(2), locale)} {t('currency')}
            </p>
            <p className="mt-2 text-sm text-gray-600">{t('vatIncluded')}</p>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Link
            href="/menu"
            className="rounded-full border border-gray-300 px-6 py-3 text-gray-600 transition-colors hover:border-amber-600 hover:text-amber-600"
          >
            {t('continueShopping')}
          </Link>
          <button
            onClick={() => setShowCheckoutModal(true)}
            disabled={!hasKoshary}
            className={`rounded-full bg-amber-600 px-8 py-3 font-semibold text-white ${
              !hasKoshary ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-amber-700'
            }`}
          >
            {t('orderNow')}
          </button>
        </div>
      </div>

      {!hasKoshary && (
        <div className="mt-4 text-right text-sm text-red-600">{t('kosharyRequired')}</div>
      )}
    </>
  );
}
