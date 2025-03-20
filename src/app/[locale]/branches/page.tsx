import metadata from '@data/metadata';
import type { Metadata } from 'next';
import Branches from './_components/Branches';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: 'en' | 'ar' }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: metadata.branches[locale]?.title,
    description: metadata.branches[locale]?.description,
    alternates: {
      canonical: `https://kosharyaltahrir.com/${locale}/branches`,
    },
    openGraph: {
      title: metadata.branches[locale]?.title,
      description: metadata.branches[locale]?.description,
      url: `https://kosharyaltahrir.com/${locale}/branches`,
      siteName: 'Koshary Al-Tahrir',
      type: 'website',
    },
  };
}

export default function BranchesPage() {
  return <Branches />;
}
