import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Cart from './_components/Cart';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('metadata.cart');

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://kosharyaltahrir.com/${locale}/cart`,
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://kosharyaltahrir.com/${locale}/cart`,
      siteName: 'Koshary Al-Tahrir',
      type: 'website',
    },
  };
}

export default function CartPage() {
  return <Cart />;
}
