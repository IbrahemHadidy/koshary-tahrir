import { Link } from '@i18n/navigation';
import { getTranslations } from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations('footer');

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">{t('brandName')}</h3>
          <p className="text-sm">{t('tagline')}</p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-amber-600"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-amber-600"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-amber-600"
              aria-label="Twitter"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-amber-600"
              aria-label="YouTube"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-medium text-white">{t('quickLinks')}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/menu" className="transition-colors hover:text-amber-500">
                {t('menu')}
              </Link>
            </li>
            <li>
              <Link href="/branches" className="transition-colors hover:text-amber-500">
                {t('branches')}
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition-colors hover:text-amber-500">
                {t('about')}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-medium text-white">{t('contact')}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="tel:19719" className="transition-colors hover:text-amber-500">
                {t('phone')}
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@kosharyaltahrir.com"
                className="transition-colors hover:text-amber-500"
              >
                contact@kosharyaltahrir.com
              </a>
            </li>
            <li>{t('support')}</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-medium text-white">{t('newsletter')}</h4>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder={t('emailPlaceholder')}
              className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 focus:border-amber-500 focus:outline-none"
            />
            <button
              type="submit"
              name="subscribe"
              className="cursor-pointer rounded-lg bg-amber-600 px-4 py-2 transition-colors hover:bg-amber-700"
            >
              {t('subscribe')}
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-800 py-6 text-center text-sm">
        <p>{t('copyright')}</p>
      </div>
    </footer>
  );
}
