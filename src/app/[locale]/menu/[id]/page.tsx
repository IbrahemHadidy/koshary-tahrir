import { menu } from '@data/menu';
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
    return {
      title: t('notFoundTitle'),
      description: t('notFoundDescription'),
      metadataBase: new URL('https://koshary-tahrir.vercel.app'),
      alternates: {
        canonical: `https://koshary-tahrir.vercel.app/${locale}`,
      },
      openGraph: {
        title: t('notFoundTitle'),
        description: t('notFoundDescription'),
        url: `https://koshary-tahrir.vercel.app/${locale}/menu/${id}`,
      },
    };
  }

  return {
    title: t('title', { name: product.name[locale] }),
    description: t('description', { name: product.name[locale] }),
    metadataBase: new URL('https://koshary-tahrir.vercel.app'),
    alternates: {
      canonical: `https://koshary-tahrir.vercel.app/${locale}`,
    },
    openGraph: {
      title: t('title', { name: product.name[locale] }),
      description: t('description', { name: product.name[locale] }),
      url: `https://koshary-tahrir.vercel.app/${locale}/menu/${id}`,
      images: [{ url: product.images[0].src, width: 1200, height: 630 }],
    },
  };
}

export async function generateStaticParams() {
  return menu.map((product) => ({ id: product.id }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = menu.find((p) => p.id === id);
  if (!product) notFound();
  else return <Product product={product} />;
}
