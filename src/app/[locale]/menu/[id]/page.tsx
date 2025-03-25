import ProductSchema from '@/components/ProductSchema';
import { menu } from '@data/menu';
import generatePageMetadata from '@utils/generatePageMetadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Product from './_components/Product';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  const t = await getTranslations('metadata.product');

  const product = menu.find((item) => item.id === id);

  if (!product) {
    return generatePageMetadata({
      locale,
      namespace: 'metadata.product',
      path: `/menu/${id}`,
      dynamicData: {
        title: t('notFoundTitle'),
        description: t('notFoundDescription'),
      },
      robots: {
        index: false,
        follow: false,
      },
    });
  }

  return generatePageMetadata({
    locale,
    namespace: 'metadata.product',
    path: `/menu/${id}`,
    ogImage: {
      src: product.images[0].src,
      width: 1200,
      height: 630,
    },
    dynamicData: {
      title: product.name[locale],
      description: t('description', { name: product.name[locale] }),
      images: product.images.map((img) => ({
        url: img.src,
        width: img.width,
        height: img.height,
      })),
      price: product.price,
    },
  });
}

export async function generateStaticParams() {
  return menu.map((product) => ({ id: product.id }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: Locale; id: string }>;
}) {
  const { locale, id } = await params;
  const product = menu.find((p) => p.id === id);
  if (!product) notFound();
  else
    return (
      <>
        <Product product={product} />
        <ProductSchema product={product} locale={locale} />
      </>
    );
}
