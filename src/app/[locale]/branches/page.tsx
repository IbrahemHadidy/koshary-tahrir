import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Branches from './_components/Branches';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('metadata.branches');

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://kosharyaltahrir.com/${locale}/branches`,
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://kosharyaltahrir.com/${locale}/branches`,
      siteName: 'Koshary Al-Tahrir',
      type: 'website',
    },
  };
}

export default function BranchesPage() {
  return <Branches />;
}
