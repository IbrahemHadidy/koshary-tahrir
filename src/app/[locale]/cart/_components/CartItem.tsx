'use client';

import { useCart } from '@context/CartContext';
import type { MenuItem } from '@data/menu';
import formatNumber from '@utils/formatNumber';
import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

interface CartItemProps {
  item: MenuItem;
  quantity: number;
}

export default function CartItem({ item, quantity }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const t = useTranslations('cart');
  const locale = useLocale();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center p-6">
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

      <div className="ml-6 w-28 ltr:text-right rtl:text-left">
        <p className="text-lg font-semibold">
          {formatNumber((item.price * quantity).toFixed(2), locale)} {t('currency')}
        </p>
      </div>
    </motion.div>
  );
}
