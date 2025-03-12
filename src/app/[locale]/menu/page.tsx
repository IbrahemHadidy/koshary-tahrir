'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { menu } from '@data/menu';
import Image from 'next/image';
import { useCart } from '@context/CartContext';
import Link from 'next/link';
import { motion } from 'framer-motion';
import formatNumber from '@utils/formatNumber';

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const locale = useLocale() as 'en' | 'ar';
  const t = useTranslations('menu');
  const { addToCart } = useCart();

  // Filter and group menu items by category
  const filteredMenu = menu.filter(
    (item) =>
      item.name.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.name.ar.includes(searchQuery)
  );

  const categorizedMenu = filteredMenu.reduce<Record<string, typeof menu>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const handleQuantityChange = (id: string, value: number) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(1, value) }));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">{t('title')}</h1>
        <div className="mx-auto max-w-md">
          <input
            type="text"
            placeholder={t('searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-gray-200 bg-white px-6 py-3 focus:border-transparent focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
        </div>
      </div>

      {Object.entries(categorizedMenu).map(([category, items]) => (
        <section key={category} className="mb-16">
          <h2 className="mb-8 text-3xl font-semibold text-gray-800 ltr:border-l-4 ltr:border-amber-500 ltr:pl-4 rtl:border-r-4 rtl:border-amber-500 rtl:pr-4">
            {t(`categories.${category}`)}
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg"
              >
                <Link href={`/${locale}/menu/${item.id}`}>
                  <div className="relative h-64">
                    <Image
                      src={item.images[0]}
                      alt={item.name[locale]}
                      fill
                      loading="lazy"
                      className="object-contain p-4 transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">{item.name[locale]}</h3>
                    <span className="text-lg font-medium text-amber-600">
                      {formatNumber(item.price, locale)} {t('currency')}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-between rounded-full border">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, (quantities[item.id] || 1) - 1)
                        }
                        disabled={quantities[item.id] === 1 || !quantities[item.id]}
                        className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent ltr:rounded-l-full rtl:rounded-r-full"
                      >
                        -
                      </button>
                      <span className="w-8 px-2 text-center">
                        {formatNumber(quantities[item.id] || 1, locale)}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, (quantities[item.id] || 1) + 1)
                        }
                        disabled={quantities[item.id] === 99}
                        className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent ltr:rounded-r-full rtl:rounded-l-full"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => addToCart(item, quantities[item.id] || 1)}
                      className="flex-1 cursor-pointer rounded-full bg-amber-600 px-6 py-2 text-white transition-colors hover:bg-amber-700"
                    >
                      {t('addToCart')}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
