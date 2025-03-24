import ogImage from '@images/og-image.webp';
import { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Home from './_components/Home';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('metadata.home');

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://koshary-tahrir.vercel.app/${locale}`,
    },
    metadataBase: new URL('https://koshary-tahrir.vercel.app'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://koshary-tahrir.vercel.app/${locale}`,
      siteName: 'Koshary Al-Tahrir',
      type: 'website',
      images: [
        {
          url: ogImage.src,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function HomePage() {
  return <Home />;
}
