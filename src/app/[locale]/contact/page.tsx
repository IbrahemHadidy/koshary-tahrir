import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Contact from './_components/Contact';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('metadata.contact');

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://kosharyaltahrir.com/${locale}/contact`,
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://kosharyaltahrir.com/${locale}/contact`,
      siteName: 'Koshary Al-Tahrir',
      type: 'website',
    },
  };
}

export default function ContactPage() {
  return <Contact />;
}
