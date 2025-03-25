import generatePageMetadata from '@utils/generatePageMetadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Menu from './_components/Menu';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    namespace: 'metadata.menu',
    path: '/menu',
    other: {
      'og:price:amount': '32-225',
      'og:price:currency': 'EGP',
    },
  });
}

export default function MenuPage() {
  return <Menu />;
}
