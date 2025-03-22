'use client';

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Image Gallery Skeleton */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity }}
            className="aspect-square animate-pulse rounded-2xl bg-amber-100"
          />

          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square animate-pulse rounded-lg bg-amber-50" />
            ))}
          </div>
        </div>

        {/* Product Details Skeleton */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="h-8 w-1/3 animate-pulse rounded bg-amber-100" />
            <div className="h-4 w-4/5 animate-pulse rounded bg-amber-100" />
            <div className="h-8 w-2/5 animate-pulse rounded bg-amber-100" />

            <div className="space-y-6">
              <div className="h-6 w-1/4 animate-pulse rounded-lg bg-amber-100" />
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-10 w-10 animate-pulse rounded-md bg-amber-100" />
                    <div className="space-y-1">
                      <div className="h-4 w-32 animate-pulse rounded bg-amber-100" />
                      <div className="h-3 w-16 animate-pulse rounded bg-amber-100" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Actions Skeleton */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-32 animate-pulse rounded-full bg-amber-100" />
              <div className="h-12 flex-1 animate-pulse rounded-full bg-amber-100" />
            </div>

            <div className="h-12 w-full animate-pulse rounded-full bg-amber-100" />
          </div>
        </div>
      </div>

      {/* Loading Spinner */}
      <div className="mt-12 flex justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <Loader2 className="h-12 w-12 text-amber-600" />
        </motion.div>
      </div>
    </div>
  );
}
