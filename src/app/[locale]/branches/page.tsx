import generatePageMetadata from '@utils/generatePageMetadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Branches from './_components/Branches';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    namespace: 'metadata.branches',
    path: '/branches',
  });
}

export default function BranchesPage() {
  return <Branches />;
}
