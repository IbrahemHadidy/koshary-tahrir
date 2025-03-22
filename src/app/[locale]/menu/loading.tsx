'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Search Skeleton */}
      <div className="mb-12 text-center">
        <div className="mx-auto mb-4 h-12 w-1/4 animate-pulse rounded-full bg-amber-100" />
        <div className="mx-auto max-w-md">
          <div className="h-12 w-full animate-pulse rounded-full bg-amber-100" />
        </div>
      </div>

      {/* Categories Skeleton */}
      {[1, 2, 3].map((categoryIndex) => (
        <section key={categoryIndex} className="mb-16">
          {/* Category Title Skeleton */}
          <div className="mb-8 flex items-center">
            <div className="h-8 w-32 animate-pulse rounded bg-amber-100 ltr:ml-4 rtl:mr-4" />
            <div className="h-1 flex-1 animate-pulse bg-amber-100" />
          </div>

          {/* Menu Items Grid Skeleton */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((itemIndex) => (
              <motion.div
                key={itemIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="overflow-hidden rounded-xl bg-white shadow-md"
              >
                {/* Image Skeleton */}
                <div className="relative h-64 animate-pulse bg-amber-50" />

                {/* Content Skeleton */}
                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="h-6 w-3/4 animate-pulse rounded bg-amber-100" />
                    <div className="h-6 w-1/4 animate-pulse rounded bg-amber-100" />
                  </div>

                  {/* Quantity Controls Skeleton */}
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-full animate-pulse rounded-full bg-amber-100" />
                    <div className="h-10 w-full animate-pulse rounded-full bg-amber-100" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      {/* Floating Loading Indicator */}
      <div className="fixed right-8 bottom-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="h-12 w-12 rounded-full bg-amber-600 p-3 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
