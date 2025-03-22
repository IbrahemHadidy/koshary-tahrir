export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Title */}
      <div className="mx-auto mb-12 h-12 w-1/4 animate-pulse rounded-lg bg-amber-100" />

      {/* Cart Items Skeleton */}
      <div className="space-y-8">
        <div className="divide-y divide-gray-100 rounded-xl bg-white shadow-md">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center p-6">
              {/* Image Skeleton */}
              <div className="relative h-24 w-24 animate-pulse rounded-lg bg-amber-100" />

              {/* Item Details */}
              <div className="ml-6 flex-1 space-y-2">
                <div className="h-6 w-48 animate-pulse rounded bg-amber-100" />
                <div className="h-4 w-32 animate-pulse rounded bg-amber-100" />
              </div>

              {/* Quantity Controls */}
              <div className="mx-6 flex items-center gap-4">
                <div className="h-10 w-32 animate-pulse rounded-full bg-amber-100" />
                <div className="h-5 w-5 animate-pulse rounded bg-amber-100" />
              </div>

              {/* Price */}
              <div className="ml-6 h-6 w-20 animate-pulse rounded bg-amber-100" />
            </div>
          ))}
        </div>

        {/* Total Section Skeleton */}
        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="mb-6 flex items-center justify-between">
            <div className="h-6 w-32 animate-pulse rounded bg-amber-100" />
            <div className="text-right">
              <div className="h-8 w-48 animate-pulse rounded bg-amber-100" />
              <div className="mt-2 h-4 w-32 animate-pulse rounded bg-amber-100" />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <div className="h-12 w-48 animate-pulse rounded-full bg-amber-100" />
            <div className="h-12 w-48 animate-pulse rounded-full bg-amber-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
