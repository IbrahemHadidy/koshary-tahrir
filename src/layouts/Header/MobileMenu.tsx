'use client';

import headerNavigation from '@/data/navigation';
import { Link } from '@i18n/navigation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function MobileMenu() {
  const t = useTranslations('header');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
      <nav className="pt-4 pb-2">
        <div className="space-y-2">
          {headerNavigation.map((item) => (
            <Link
              key={t(item.name)}
              href={item.href}
              className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-amber-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
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
  );
}
