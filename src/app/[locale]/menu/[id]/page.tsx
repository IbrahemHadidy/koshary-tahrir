'use client';

import { menu } from '@data/menu';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Actions from './_components/Actions';
import Details from './_components/Details';
import Gallery from './_components/Gallery';

export default function ProductPage() {
  const { id } = useParams();
  const t = useTranslations('product');
  const locale = useLocale();

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
        <Gallery name={product.name[locale]} images={product.images} />

        <div className="space-y-8">
          <Details name={product.name} price={product.price} details={product.details} />
          <Actions product={product} />
        </div>
      </motion.div>
    </div>
  );
}
