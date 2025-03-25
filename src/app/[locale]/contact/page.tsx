import generatePageMetadata from '@utils/generatePageMetadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Contact from './_components/Contact';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    namespace: 'metadata.contact',
    path: '/contact',
    other: {
      'business:contact_data:website': 'https://koshary-tahrir.vercel.app',
      'business:contact_data:phone_number': '19719',
    },
  });
}

export default function ContactPage() {
  return <Contact />;
}
