import CartProvider from '@/context/CartContext';
import { NextIntlClientProvider } from 'next-intl';
import type { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

interface ProvidersProps {
  isRTL: boolean;
  children: ReactNode;
}

export default async function Providers({ isRTL, children }: ProvidersProps) {
  return (
    <NextIntlClientProvider>
      <ToastContainer position={isRTL ? 'bottom-left' : 'bottom-right'} rtl={isRTL} />
      <CartProvider>{children}</CartProvider>
    </NextIntlClientProvider>
  );
}
