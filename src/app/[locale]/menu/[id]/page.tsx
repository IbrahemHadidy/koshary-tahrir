'use client';

import { useCart } from '@context/CartContext';
import { menu } from '@data/menu';
import formatNumber from '@utils/formatNumber';
import { motion } from 'framer-motion';
import { Flame, ForkKnifeCrossed, Utensils, Wheat } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const t = useTranslations('product');
  const locale = useLocale() as 'en' | 'ar';

  const product = menu.find((item) => item.id === id);

  if (!product) {
    return <p className="text-center text-red-500">{t('notFound')}</p>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 gap-12 lg:grid-cols-2"
      >
        {/* Image Gallery */}
        <div className="space-y-4">
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative aspect-square overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              src={product.images[selectedImage]}
              alt={product.name.en}
              fill
              className="bg-white object-contain p-6"
              loading="lazy"
            />
          </motion.div>

          {product.images.length > 1 && (
            <div
              className={`grid ${
                product.images.length < 4
                  ? 'grid-cols-[repeat(auto-fit,80px)] justify-center'
                  : 'grid-cols-[repeat(auto-fit,minmax(80px,1fr))]'
              } w-full gap-4`}
            >
              {product.images.map((img, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative aspect-square max-h-32 cursor-pointer overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index
                      ? 'scale-105 border-amber-600'
                      : 'border-gray-200 hover:border-amber-400'
                  }`}
                >
                  <Image src={img} alt={product.name.en} fill className="object-contain" />
                </motion.button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-8">
          <div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900">{product.name[locale]}</h1>
            <p className="mb-6 text-3xl font-semibold text-amber-600">
              {formatNumber(product.price, locale)} {t('currency')}
            </p>

            {product.details && (
              <div className="mb-8 rounded-xl bg-amber-50 p-6">
                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                  <ForkKnifeCrossed className="h-5 w-5" />
                  {t('includes')}
                </h2>
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {product.details[locale].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 rounded-lg bg-white p-3">
                      <span className="rounded-md bg-amber-100 p-2">
                        {/* Use different icons based on type */}
                        {item.type.toLowerCase().includes('spice') ? (
                          <Flame className="h-4 w-4 text-amber-600" />
                        ) : item.type.toLowerCase().includes('grain') ? (
                          <Wheat className="h-4 w-4 text-amber-600" />
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

          {/* Quantity and Actions */}
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
              href={`/${locale}/menu`}
              className="block w-full rounded-full border border-gray-300 px-8 py-4 text-center text-gray-600 transition-colors hover:border-amber-600 hover:text-amber-600"
            >
              {t('backToMenu')}
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
