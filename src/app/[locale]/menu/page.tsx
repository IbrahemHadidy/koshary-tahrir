import metadata from '@data/metadata';
import type { Metadata } from 'next';
import Menu from './_components/Menu';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: 'en' | 'ar' }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: metadata.menu[locale]?.title,
    description: metadata.menu[locale]?.description,
    alternates: {
      canonical: `https://kosharyaltahrir.com/${locale}/menu`,
    },
    openGraph: {
      title: metadata.menu[locale]?.title,
      description: metadata.menu[locale]?.description,
      url: `https://kosharyaltahrir.com/${locale}/menu`,
      siteName: 'Koshary Al-Tahrir',
      type: 'website',
    },
  };
}

export default function MenuPage() {
  return <Menu />;
}
