'use client';

import { useCart } from '@context/CartContext';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import formatNumber from '@utils/formatNumber';
import { motion } from 'framer-motion';
import { ShoppingBag, Trash2 } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const t = useTranslations('cart');
  const locale = useLocale() as 'en' | 'ar';
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');

  const hasKoshary = cart.some((item) => item.item.category === 'koshary');
  const totalPrice = cart.reduce(
    (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
    0
  );

  const handleOrderSubmit = () => {
    if (!location.trim()) {
      toast.error(t('locationRequired'));
      return;
    }

    // Simulate order submission
    toast.success(t('orderSuccess'));
    clearCart(true);
    setShowCheckoutModal(false);
    setLocation('');
    setNotes('');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Checkout Modal */}
      <Dialog
        open={showCheckoutModal}
        onClose={() => setShowCheckoutModal(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
            <DialogTitle className="mb-6 text-2xl font-bold text-gray-900">
              {t('checkout')}
            </DialogTitle>

            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  {t('location')}
                </label>
                <textarea
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 p-3 focus:border-amber-500 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  rows={3}
                  placeholder={t('locationPlaceholder')}
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">{t('notes')}</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 p-3 focus:border-amber-500 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  rows={2}
                  placeholder={t('notesPlaceholder')}
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button
                onClick={() => setShowCheckoutModal(false)}
                className="cursor-pointer rounded-lg px-6 py-2 text-gray-600 hover:bg-gray-50"
              >
                {t('back')}
              </button>
              <button
                onClick={handleOrderSubmit}
                className="cursor-pointer rounded-lg bg-amber-600 px-6 py-2 text-white hover:bg-amber-700"
              >
                {t('submitOrder')}
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Cart Content */}
      <h1 className="mb-12 text-center text-4xl font-bold text-gray-900">{t('title')}</h1>

      {cart.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center">
          <ShoppingBag className="mx-auto mb-6 h-24 w-24 text-gray-300" />
          <p className="mb-8 text-xl text-gray-600">{t('empty')}</p>
          <Link
            href={`/${locale}/menu`}
            className="rounded-full bg-amber-600 px-8 py-3 text-white transition-colors hover:bg-amber-700"
          >
            {t('backToMenu')}
          </Link>
        </motion.div>
      ) : (
        <div className="space-y-8">
          <div className="divide-y divide-gray-100 rounded-xl bg-white shadow-md">
            {cart.map(({ item, quantity }) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center p-6"
              >
                <Link
                  href={`/${locale}/menu/${item.id}`}
                  className="relative h-24 w-24 overflow-hidden rounded-lg"
                >
                  <Image
                    src={item.images[0]}
                    alt={item.name.en}
                    fill
                    loading="lazy"
                    className="object-contain px-1"
                  />
                </Link>

                <div className="ml-6 flex-1">
                  <Link href={`/${locale}/menu/${item.id}`}>
                    <h3 className="text-xl font-semibold text-gray-900">{item.name[locale]}</h3>
                  </Link>
                  <p className="text-gray-600">
                    {formatNumber(item.price, locale)} {t('currency')}
                  </p>
                </div>

                <div className="mx-6 flex items-center gap-4">
                  <div className="flex items-center rounded-full border">
                    <button
                      onClick={() => updateQuantity(item.id, quantity - 1)}
                      disabled={quantity === 1}
                      className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent ltr:rounded-l-full rtl:rounded-r-full"
                    >
                      -
                    </button>
                    <span className="w-12 text-center">{formatNumber(quantity, locale)}</span>
                    <button
                      onClick={() => updateQuantity(item.id, quantity + 1)}
                      disabled={quantity === 99}
                      className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent ltr:rounded-r-full rtl:rounded-l-full"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="cursor-pointer text-red-500 transition-colors hover:text-red-700"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>

                <div className="ml-6 text-right">
                  <p className="text-lg font-semibold">
                    {formatNumber((item.price * quantity).toFixed(2), locale)} {t('currency')}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-6 flex items-center justify-between">
              <button
                onClick={() => clearCart()}
                className="flex cursor-pointer items-center gap-2 px-6 py-3 text-red-600 transition-colors hover:text-red-700"
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
                href={`/${locale}/menu`}
                className="rounded-full border border-gray-300 px-6 py-3 text-gray-600 transition-colors hover:border-amber-600 hover:text-amber-600"
              >
                {t('continueShopping')}
              </Link>
              <button
                onClick={() => setShowCheckoutModal(true)}
                disabled={!hasKoshary}
                className={`rounded-full bg-amber-600 px-8 py-3 font-semibold text-white ${
                  !hasKoshary
                    ? 'cursor-not-allowed opacity-50'
                    : 'cursor-pointer hover:bg-amber-700'
                }`}
              >
                {t('orderNow')}
              </button>
            </div>
          </div>

          {!hasKoshary && (
            <div className="mt-4 text-right text-sm text-red-600">{t('kosharyRequired')}</div>
          )}
        </div>
      )}
    </div>
  );
}
