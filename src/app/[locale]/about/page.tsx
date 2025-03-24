import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import About from './_components/About';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('metadata.about');

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://kosharyaltahrir.com/${locale}/about`,
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://kosharyaltahrir.com/${locale}/about`,
      siteName: 'Koshary Al-Tahrir',
      type: 'website',
    },
  };
}

export default function AboutPage() {
  return <About />;
}
