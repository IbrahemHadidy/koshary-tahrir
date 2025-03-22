import metadata from '@data/metadata';
import { Metadata } from 'next';
import Home from './_components/Home';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: 'en' | 'ar' }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: metadata.home[locale]?.title,
    description: metadata.home[locale]?.description,
    icons: {
      icon: '/images/favicon.ico',
    },
    alternates: {
      canonical: `https://kosharyaltahrir.com/${locale}`,
    },
    openGraph: {
      title: metadata.home[locale]?.title,
      description: metadata.home[locale]?.description,
      url: `https://kosharyaltahrir.com/${locale}`,
      siteName: 'Koshary Al-Tahrir',
      type: 'website',
      images: [
        {
          url: '/images/og-image.webp',
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
