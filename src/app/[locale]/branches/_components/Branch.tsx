import type { Branch } from '@data/branches';
import { ArrowUpLeft, ArrowUpRight, MapPin } from 'lucide-react';
import type { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';

interface BranchProps {
  branch: Branch;
  idx: number;
  t: Awaited<ReturnType<typeof getTranslations<'branches'>>>;
  locale: Awaited<ReturnType<typeof getLocale>>;
}

export default function BranchesPage({ branch, idx, t, locale }: BranchProps) {
  const isRTL = locale === 'ar';

  return (
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${branch.coordinates.lat},${branch.coordinates.lng}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:bg-amber-50 hover:text-amber-600 hover:shadow-lg"
      style={{ animation: `slideUpFade 0.5s ease-out ${Number((idx * 0.1).toFixed(1))}s both` }}
    >
      <div className="relative h-48 overflow-hidden">
        {/* Image container with zoom effect */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={branch.image}
            alt="branch"
            fill
            loading="lazy"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 0.5) 90%, rgba(255, 255, 255, 1)), linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
            }}
          />
        </div>

        {/* MapPin - Animation tied to parent hover */}
        <div className="absolute top-4 ltr:left-4 rtl:right-4">
          <MapPin className="h-8 w-8 text-amber-600 transition-transform duration-300 group-hover:scale-110" />
        </div>

        {/* Branch name overlay - Animation tied to parent hover */}
        <div className="absolute bottom-4 space-y-1 text-white ltr:left-4 rtl:right-4">
          <h3 className="text-xl font-semibold transition-transform duration-300 group-hover:-translate-y-1">
            {branch.name.en}
          </h3>
          <p className="translate-y-2 text-sm opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            {branch.name.ar}
          </p>
        </div>
      </div>

      {/* Content section */}
      <div className="flex min-h-[160px] flex-col justify-between p-6">
        {/* Animated top border */}
        <div className="absolute top-0 right-0 left-0 h-1 origin-left scale-x-0 bg-amber-600 transition-transform duration-500 group-hover:scale-x-100" />

        <p className="text-gray-600 transition-colors duration-300 group-hover:text-amber-600">
          {branch.address.en}
        </p>
        <p className="mt-2 text-sm text-gray-600 transition-colors duration-300 group-hover:text-amber-600">
          {branch.address.ar}
        </p>

        {/* CTA - Animation tied to parent hover */}
        <div className="mt-4 flex items-center overflow-hidden text-amber-600">
          <span className="inline-block text-sm font-medium transition-transform duration-300 ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
            {t('viewOnMap')}
          </span>
          <div className="ml-2 transition-transform duration-300 ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
            {isRTL ? <ArrowUpLeft className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
          </div>
        </div>
      </div>
    </a>
  );
}
