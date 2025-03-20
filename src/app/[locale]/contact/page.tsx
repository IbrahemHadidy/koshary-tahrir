import metadata from '@data/metadata';
import type { Metadata } from 'next';
import Contact from './_components/Contact';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: 'en' | 'ar' }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: metadata.contact[locale]?.title,
    description: metadata.contact[locale]?.description,
    alternates: {
      canonical: `https://kosharyaltahrir.com/${locale}/contact`,
    },
    openGraph: {
      title: metadata.contact[locale]?.title,
      description: metadata.contact[locale]?.description,
      url: `https://kosharyaltahrir.com/${locale}/contact`,
      siteName: 'Koshary Al-Tahrir',
      type: 'website',
    },
  };
}

export default function ContactPage() {
  return <Contact />;
}
