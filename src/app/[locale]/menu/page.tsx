import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Menu from './_components/Menu';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('metadata.menu');

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://kosharyaltahrir.com/${locale}/menu`,
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://kosharyaltahrir.com/${locale}/menu`,
      siteName: 'Koshary Al-Tahrir',
      type: 'website',
    },
  };
}

export default function MenuPage() {
  return <Menu />;
}
