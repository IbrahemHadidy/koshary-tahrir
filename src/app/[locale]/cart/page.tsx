import generatePageMetadata from '@/utils/generatePageMetadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Cart from './_components/Cart';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    namespace: 'metadata.cart',
    path: '/cart',
  });
}

export default function CartPage() {
  return <Cart />;
}
