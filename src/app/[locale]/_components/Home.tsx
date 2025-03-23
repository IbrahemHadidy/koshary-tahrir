import { Link } from '@i18n/navigation';
import hero from '@images/hero.webp';
import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function Home() {
  const locale = await getLocale();
  const t = await getTranslations('home');

  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={hero}
          alt="hero"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60" />
      </div>

      <div className="relative z-10 max-w-4xl px-4 text-center">
        <h1 className="font-logo mb-6 animate-[slideUpFade_0.5s_ease-out] text-5xl font-bold text-white [text-shadow:_2px_2px_6px_rgba(0,0,0,0.7)] md:text-7xl">
          {t('welcome')}
        </h1>

        <p className="mx-auto mb-8 max-w-2xl animate-[fadeIn_0.5s_ease-out_0.2s_both] text-xl text-amber-100 [text-shadow:_2px_2px_6px_rgba(0,0,0,0.7)]">
          {t('description')}
        </p>

        <div className="flex animate-[fadeIn_0.5s_ease-out_0.4s_both] flex-col justify-center gap-4 sm:flex-row">
          {/* Primary CTA Buttons */}
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link href="/menu" className="w-full sm:w-auto">
              <button
                name="menu"
                className="w-full cursor-pointer rounded-lg bg-amber-600 px-8 py-4 font-semibold text-white shadow-lg shadow-amber-700/40 transition-all duration-300 hover:bg-amber-700 hover:shadow-amber-700/50 active:scale-95"
              >
                {t('viewMenu')} {locale === 'en' ? '→' : '←'}
              </button>
            </Link>

            <Link href="/branches" className="w-full sm:w-auto">
              <button
                name="branches"
                className="w-full cursor-pointer rounded-lg border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white shadow-md shadow-white/20 transition-all duration-300 hover:bg-white/20 hover:shadow-white/40 active:scale-95"
              >
                {t('findUs')} 📍
              </button>
            </Link>
          </div>

          {/* About Us Link */}
          <div className="relative mt-4 flex animate-[fadeIn_0.5s_ease-out_0.6s_both] items-center justify-center sm:mt-0 sm:ml-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}
