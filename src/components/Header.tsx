'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ShoppingCart } from 'lucide-react';
import Logo from '@images/logo.png';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isRTL = locale === 'ar';

  const switchLanguage = (lang: string) => {
    router.push(`/${lang}${pathname.substring(3)}`);
  };

  const navigation = [
    { name: t('menu'), href: `/${locale}/menu` },
    { name: t('branches'), href: `/${locale}/branches` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  const isCartPage = pathname === `/${locale}/cart`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="-ml-2 cursor-pointer p-2 text-gray-600 hover:text-amber-600 md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Centered Title for Mobile */}
          <Link
            href={`/${locale}`}
            className="absolute left-1/2 flex -translate-x-1/2 transform items-center gap-2 md:hidden"
          >
            <Image src={Logo} alt="Koshary Al-Tahrir" loading="lazy" className="h-10 w-10" />
            <span className="font-logo text-2xl font-bold text-gray-900">{t('title')}</span>
          </Link>

          {/* Desktop Logo + Title */}
          <Link href={`/${locale}`} className="hidden items-center gap-2 md:flex">
            <Image src={Logo} alt="Koshary Al-Tahrir" className="h-10 w-10" />
            <span className="font-logo text-2xl font-bold text-gray-900">{t('title')}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 transform items-center gap-8 md:flex">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative transition-colors hover:text-amber-600 ${
                    isActive ? 'font-semibold text-amber-600' : 'text-gray-600'
                  }`}
                >
                  {item.name}
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
              href={`/${locale}/cart`}
              className="relative rounded-full p-2 transition-colors hover:bg-amber-50"
            >
              <ShoppingCart
                className={`h-6 w-6 ${
                  isCartPage ? 'text-amber-600' : 'text-gray-600'
                } transition-colors hover:text-amber-600`}
              />
            </Link>

            {/* Language Switcher */}
            <button
              onClick={() => switchLanguage(isRTL ? 'en' : 'ar')}
              className="cursor-pointer rounded-md bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800 transition-colors hover:bg-amber-200"
            >
              {isRTL ? 'EN' : 'ع'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="pt-4 pb-2">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-amber-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Add Cart Link to Mobile Menu */}
              <Link
                href={`/${locale}/cart`}
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
