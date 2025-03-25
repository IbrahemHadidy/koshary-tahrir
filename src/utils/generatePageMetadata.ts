import fallbackOgImage from '@images/og-image.webp';
import { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

type MetadataConfig = {
  locale: Locale;
  namespace:
    | 'metadata.home'
    | 'metadata.menu'
    | 'metadata.product'
    | 'metadata.about'
    | 'metadata.contact'
    | 'metadata.branches'
    | 'metadata.cart';
  path: string;
  ogImage?: {
    src?: string;
    width?: number;
    height?: number;
  };
  dynamicData?: {
    title?: string;
    description?: string;
    price?: number;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
    }>;
  };
  robots?: { index?: boolean; follow?: boolean };
  other?: Record<string, unknown>;
};

export default async function generatePageMetadata(config: MetadataConfig): Promise<Metadata> {
  const { locale, namespace, path, ogImage, dynamicData } = config;
  const t = await getTranslations(namespace);
  const brand = (await getTranslations('metadata'))('brand');

  const baseUrl = 'https://koshary-tahrir.vercel.app';
  const currentUrl = `/${locale}${path}`;

  const title = dynamicData?.title || t('title');
  const description = dynamicData?.description || t('description');
  const images = dynamicData?.images || [
    {
      url: new URL(ogImage?.src ?? fallbackOgImage.src, baseUrl).toString(),
      width: ogImage?.width ?? 1200,
      height: ogImage?.height ?? 630,
      alt: title,
    },
  ];

  return {
    title: {
      default: title,
      template: `%s | ${brand}`,
    },
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages: {
        en: '/en' + (path === '/' ? '' : path),
        ar: '/ar' + (path === '/' ? '' : path),
      },
      types: {
        'application/rss+xml': `${baseUrl}/rss.xml`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${currentUrl}`,
      siteName: brand,
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      type: 'website',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images,
    },
    robots: {
      index: config.robots?.index ?? true,
      follow: config.robots?.follow ?? true,
    },
    other: {
      'geo.region': 'EG',
      'geo.placename': 'Cairo',
      'og:locale:alternate': locale === 'ar' ? 'en_US' : 'ar_EG',
      ...(dynamicData?.price && {
        'product:price:amount': dynamicData.price.toString(),
        'product:price:currency': 'EGP',
      }),
      ...config.other,
    },
  };
}
