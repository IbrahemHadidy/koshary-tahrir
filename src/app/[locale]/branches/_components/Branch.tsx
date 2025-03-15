import type { Branch } from '@data/branches';
import { motion } from 'framer-motion';
import { ArrowUpLeft, ArrowUpRight, MapPin } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

interface BranchProps {
  branch: Branch;
  idx: number;
}

export default function BranchesPage({ branch, idx }: BranchProps) {
  const t = useTranslations('branches');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <motion.a
      href={`https://www.google.com/maps/search/?api=1&query=${branch.coordinates.lat},${branch.coordinates.lng}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg"
      whileHover={{
        y: -5,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    >
      {/* Image container with zoom effect */}
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 0.5) 90%, rgba(255, 255, 255, 1)), url(${branch.image})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent/80 to-black/50" />
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
    </motion.a>
  );
}
