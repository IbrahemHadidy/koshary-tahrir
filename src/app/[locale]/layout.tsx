import Providers from '@components/Providers';
import { routing } from '@i18n/routing';
import Footer from '@layouts/Footer';
import Header from '@layouts/Header';
import { Space_Grotesk } from 'next/font/google';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: 'en' | 'ar' }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) notFound();

  const isRTL = locale === 'ar';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body className={`${spaceGrotesk.className} bg-gray-50`}>
        <Providers isRTL={isRTL}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
