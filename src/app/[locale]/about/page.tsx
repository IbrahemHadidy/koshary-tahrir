import ogImage from '@images/about-hero.webp';
import generatePageMetadata from '@utils/generatePageMetadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import About from './_components/About';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    namespace: 'metadata.about',
    path: '/about',
    ogImage: {
      src: ogImage.src,
      width: 1200,
      height: 630,
    },
  });
}

export default function AboutPage() {
  return <About />;
}
