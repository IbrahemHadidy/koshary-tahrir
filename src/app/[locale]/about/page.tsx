import metadata from '@data/metadata';
import type { Metadata } from 'next';
import About from './_components/About';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: 'en' | 'ar' }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: metadata.about[locale]?.title,
    description: metadata.about[locale]?.description,
    alternates: {
      canonical: `https://kosharyaltahrir.com/${locale}/about`,
    },
    openGraph: {
      title: metadata.about[locale]?.title,
      description: metadata.about[locale]?.description,
      url: `https://kosharyaltahrir.com/${locale}/about`,
      siteName: 'Koshary Al-Tahrir',
      type: 'website',
    },
  };
}

export default function AboutPage() {
  return <About />;
}
