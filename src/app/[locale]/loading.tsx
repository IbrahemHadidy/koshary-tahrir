export default function Loading() {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      {/* Hero Image Skeleton */}
      <div className="absolute inset-0 z-0 animate-pulse bg-amber-100">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60" />
      </div>

      {/* Content Skeleton */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center justify-center px-4">
        {/* Title Skeleton */}
        <div className="mx-auto mb-6 h-12 w-full animate-pulse rounded-full bg-amber-200 md:h-16" />

        {/* Description Skeleton */}
        <div className="mx-auto mb-8 flex w-full max-w-2xl flex-col items-center space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-amber-200" />
          <div className="h-4 w-4/5 animate-pulse rounded bg-amber-200" />
        </div>

        {/* CTA Buttons Skeleton */}
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="h-14 w-48 animate-pulse rounded-lg bg-amber-600" />
          <div className="h-14 w-48 animate-pulse rounded-lg bg-gray-200" />
          <div className="hidden h-6 w-px animate-pulse bg-white/20 sm:block" />
          <div className="h-7 w-24 animate-pulse rounded-full bg-amber-300" />
        </div>
      </div>
    </div>
  );
}
