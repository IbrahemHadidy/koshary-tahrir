import { menu } from '@data/menu';
import metadata from '@data/metadata';
import { Metadata } from 'next';
import Product from './_components/Product';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: 'en' | 'ar'; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;

  const product = menu.find((item) => item.id === id);

  if (!product) {
    return {
      title: metadata.product[locale]?.title.replace('{name}', 'Unknown Product'),
      description: metadata.product[locale]?.description.replace('{name}', 'this product'),
      metadataBase: new URL('https://koshary-tahrir.vercel.app'),
      icons: {
        icon: '/images/favicon.ico',
      },
      alternates: {
        canonical: `https://koshary-tahrir.vercel.app/${locale}`,
      },
    };
  }

  return {
    title: metadata.product[locale]?.title.replace('{name}', product.name[locale]),
    description: metadata.product[locale]?.description.replace(
      '{name}',
      product.description[locale]
    ),
    metadataBase: new URL('https://koshary-tahrir.vercel.app'),
    icons: {
      icon: '/images/favicon.ico',
    },
    alternates: {
      canonical: `https://koshary-tahrir.vercel.app/${locale}`,
    },
    openGraph: {
      title: product.name[locale],
      description: product.description[locale],
      url: `https://koshary-tahrir.vercel.app/${locale}/menu/${id}`,
      images: [{ url: product.images[0], width: 1200, height: 630 }],
    },
  };
}

export default function ProductPage() {
  return <Product />;
}
