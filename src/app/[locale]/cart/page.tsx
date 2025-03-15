'use client';

import { useCart } from '@context/CartContext';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import CartActions from './_components/CartActions';
import CartItem from './_components/CartItem';
import CheckoutModal from './_components/CheckoutModal';
import EmptyCart from './_components/EmptyCart';

export default function CartPage() {
  const { cart } = useCart();
  const t = useTranslations('cart');
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <CheckoutModal
        showCheckoutModal={showCheckoutModal}
        setShowCheckoutModal={setShowCheckoutModal}
      />

      {/* Cart title */}
      <h1 className="mb-12 text-center text-4xl font-bold text-gray-900">{t('title')}</h1>

      {/* Cart content */}
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="space-y-8">
          <div className="divide-y divide-gray-100 rounded-xl bg-white shadow-md">
            {cart.map(({ item, quantity }) => (
              <CartItem key={item.id} item={item} quantity={quantity} />
            ))}
          </div>

          <CartActions setShowCheckoutModal={setShowCheckoutModal} />
        </div>
      )}
    </div>
  );
}
