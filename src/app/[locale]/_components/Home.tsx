'use client';

import { Link } from '@i18n/navigation';
import hero from '@images/hero.jpg';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Home() {
  const locale = useLocale();
  const t = useTranslations('home');

  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image src={hero} alt="Koshary Al-Tahrir" fill loading="lazy" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60" />
      </div>

      <div className="relative z-10 max-w-4xl px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-logo mb-6 text-5xl font-bold text-white [text-shadow:_2px_2px_6px_rgba(0,0,0,0.7)] md:text-7xl"
        >
          {t('welcome')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-8 max-w-2xl text-xl text-amber-100 [text-shadow:_2px_2px_6px_rgba(0,0,0,0.7)]"
        >
          {t('description')}
        </motion.p>

        <motion.div
          className="flex flex-col justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {/* Primary CTA Buttons */}
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link href="/menu" className="w-full sm:w-auto">
              <button className="w-full cursor-pointer rounded-lg bg-amber-600 px-8 py-4 font-medium text-white shadow-lg shadow-amber-700/40 transition-all duration-300 hover:bg-amber-700 hover:shadow-amber-700/50 active:scale-95">
                {t('viewMenu')} {locale === 'en' ? '→' : '←'}
              </button>
            </Link>

            <Link href="/branches" className="w-full sm:w-auto">
              <button className="w-full cursor-pointer rounded-lg border border-white/20 bg-white/10 px-8 py-4 font-medium text-white shadow-md shadow-white/20 transition-all duration-300 hover:bg-white/20 hover:shadow-white/40 active:scale-95">
                {t('findUs')} 📍
              </button>
            </Link>
          </div>

          {/* About Us Link */}
          <motion.div
            className="relative mt-4 flex items-center justify-center sm:mt-0 sm:ml-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="absolute hidden h-6 w-px bg-white/20 sm:block ltr:-left-4 rtl:-right-1" />
            <Link
              href="/about"
              className="group relative text-lg font-semibold text-amber-300 transition-colors hover:text-amber-400"
            >
              <span className="relative px-2 py-1">
                {t('aboutUs')}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-400 transition-all duration-300 [text-shadow:_2px_2px_6px_rgba(0,0,0,0.7)] group-hover:w-full" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
