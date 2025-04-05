'use client';

import { useCart } from '@context/CartContext';
import headerNavigation from '@data/navigation';
import { Link, usePathname } from '@i18n/navigation';
import Logo from '@images/logo.webp';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('header');

  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const isRTL = locale === 'ar';
  const isCartPage = pathname.includes('/cart');

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 overflow-x-hidden bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-3 py-3 sm:px-4 sm:py-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            name="menu"
            className="-ml-1 cursor-pointer p-2.5 text-gray-600 hover:text-amber-600 lg:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Logo + Title */}
          <Link
            href="/"
            className="absolute left-2/3 flex w-1/2 -translate-x-2/3 transform items-center gap-2 md:hidden"
          >
            <Image src={Logo} alt="logo" priority className="h-10 w-10" />
            <span className="font-logo text-xl font-bold text-gray-900">{t('title')}</span>
          </Link>

          {/* Centered Title for medium screens */}
          <Link
            href="/"
            className="absolute left-1/2 hidden -translate-x-1/2 transform items-center gap-2 md:flex lg:hidden"
          >
            <Image src={Logo} alt="logo" priority className="h-10 w-10" />
            <span className="font-logo text-2xl font-bold text-gray-900">{t('title')}</span>
          </Link>

          {/* Desktop Logo + Title */}
          <Link href="/" className="hidden items-center gap-2 lg:flex">
            <Image src={Logo} alt="logo" priority className="h-10 w-10" />
            <span className="font-logo text-2xl font-bold text-gray-900">{t('title')}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 transform items-center gap-8 lg:flex">
            {headerNavigation.map((item) => {
              const isActive = pathname.includes(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative transition-colors hover:text-amber-600 ${
                    isActive ? 'font-semibold text-amber-600' : 'text-gray-600'
                  }`}
                >
                  {t(item.name)}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-amber-600 transition-all ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Cart Icon + Language Switcher */}
          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <Link
              href="/cart"
              aria-label="Cart"
              className="relative rounded-full p-2 transition-colors hover:bg-amber-50"
            >
              <div className="relative">
                <ShoppingCart
                  className={`h-6 w-6 ${
                    isCartPage ? 'text-amber-600' : 'text-gray-600'
                  } transition-colors hover:text-amber-600`}
                />

                {/* Cart Counter Badge */}
                {itemCount > 0 && (
                  <span className="absolute -top-[2px] -right-[2px] flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-amber-600 px-1 text-[0.65rem] leading-none text-white ring-1 ring-white">
                    {itemCount > 99 ? '99+' : itemCount}
                  </span>
                )}
              </div>
            </Link>

            {/* Language Switcher */}
            <Link
              href={`/${pathname.split('/').slice(1).join('/')}`}
              locale={isRTL ? 'en' : 'ar'}
              className="rounded-md bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800 transition-colors hover:bg-amber-200 sm:px-3 sm:text-sm"
            >
              {isRTL ? 'EN' : 'ع'}
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="pt-4 pb-2">
            <div className="space-y-2">
              {headerNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-amber-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.name)}
                </Link>
              ))}

              {/* Add Cart Link to Mobile Menu */}
              <Link
                href="/cart"
                className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-amber-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('cart')}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
