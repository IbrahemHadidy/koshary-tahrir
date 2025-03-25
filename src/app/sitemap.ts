import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrls = ['', 'branches', 'menu', 'about', 'contact', 'cart'];

  const languages = ['en', 'ar'];

  return languages.flatMap((lang) =>
    baseUrls.map((url) => ({
      url: `https://koshary-tahrir.vercel.app/${lang}/${url}`,
      lastModified: new Date(),
      priority: url === '' ? 1 : 0.8,
      changeFrequency: url === 'menu' ? 'weekly' : 'monthly',
      alternates: {
        languages: {
          en: `https://koshary-tahrir.vercel.app/en/${url}`,
          ar: `https://koshary-tahrir.vercel.app/ar/${url}`,
        },
      },
    }))
  );
}
