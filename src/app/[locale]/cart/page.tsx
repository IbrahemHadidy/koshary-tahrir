import metadata from '@data/metadata';
import type { Metadata } from 'next';
import Cart from './_components/Cart';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: 'en' | 'ar' }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: metadata.cart[locale]?.title,
    description: metadata.cart[locale]?.description,
    alternates: {
      canonical: `https://kosharyaltahrir.com/${locale}/cart`,
    },
    openGraph: {
      title: metadata.cart[locale]?.title,
      description: metadata.cart[locale]?.description,
      url: `https://kosharyaltahrir.com/${locale}/cart`,
      siteName: 'Koshary Al-Tahrir',
      type: 'website',
    },
  };
}

export default function CartPage() {
  return <Cart />;
}
