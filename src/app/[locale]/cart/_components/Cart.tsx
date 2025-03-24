'use client';

import { useCart } from '@context/CartContext';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import CartActions from './CartActions';
import CartItem from './CartItem';
import CheckoutModal from './CheckoutModal';
import EmptyCart from './EmptyCart';

export default function Cart() {
  const t = useTranslations('cart');
  const locale = useLocale();

  const { cart, clearCart, updateQuantity, removeFromCart } = useCart();
  const [showCheckoutModal, setShowCheckoutModal] = useState<boolean>(false);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <CheckoutModal
        t={t}
        clearCart={clearCart}
        showCheckoutModal={showCheckoutModal}
        setShowCheckoutModal={setShowCheckoutModal}
      />

      {/* Cart title */}
      <h1 className="mb-12 text-center text-4xl font-bold text-gray-900">{t('title')}</h1>

      {/* Cart content */}
      {cart.length === 0 ? (
        <EmptyCart t={t} />
      ) : (
        <div className="space-y-8">
          <div className="divide-y divide-gray-100 rounded-xl bg-white shadow-md">
            {cart.map(({ item, quantity }) => (
              <CartItem
                key={item.id}
                t={t}
                locale={locale}
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                quantity={quantity}
              />
            ))}
          </div>

          <CartActions
            t={t}
            locale={locale}
            cart={cart}
            clearCart={clearCart}
            setShowCheckoutModal={setShowCheckoutModal}
          />
        </div>
      )}
    </div>
  );
}
