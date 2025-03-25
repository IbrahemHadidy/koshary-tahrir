import ogImage from '@images/og-image.webp';
import generatePageMetadata from '@utils/generatePageMetadata';
import { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Home from './_components/Home';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    namespace: 'metadata.home',
    path: '/',
    ogImage: {
      src: ogImage.src,
      width: 1200,
      height: 630,
    },
  });
}

export default function HomePage() {
  return <Home />;
}
