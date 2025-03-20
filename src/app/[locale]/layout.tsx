import Footer from '@components/Footer';
import Header from '@components/Header';
import CartProvider from '@context/CartContext';
import { routing } from '@i18n/routing';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Space_Grotesk } from 'next/font/google';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
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
