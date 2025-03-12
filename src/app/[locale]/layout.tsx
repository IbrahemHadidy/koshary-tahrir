import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { notFound } from 'next/navigation';
import { routing } from '@i18n/routing';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import CartProvider from '@context/CartContext';
import { ToastContainer } from 'react-toastify';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Koshary Al-Tahrir | Authentic Egyptian Cuisine',
  description: 'Experience the taste of authentic Egyptian koshary since 1952',
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: 'en' | 'ar' }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) notFound();

  const messages = await getMessages();
  const isRTL = locale === 'ar';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body className={`${spaceGrotesk.className} bg-gray-50`}>
        <NextIntlClientProvider messages={messages}>
          <ToastContainer position={isRTL ? 'bottom-left' : 'bottom-right'} rtl={isRTL} />
          <CartProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
