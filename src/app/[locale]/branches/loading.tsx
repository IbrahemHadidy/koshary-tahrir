export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-16 text-center">
        <div className="mx-auto mb-4 h-12 w-1/4 animate-pulse rounded-lg bg-amber-100" />
        <div className="mx-auto h-4 w-1/3 animate-pulse rounded bg-amber-100" />
      </div>

      {/* Branches Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="animate-pulse overflow-hidden rounded-xl bg-white shadow-md">
            {/* Image Section */}
            <div className="relative h-48 bg-amber-100">
              <div className="absolute top-4 left-4 h-8 w-8 rounded-full bg-amber-200" />
            </div>

            {/* Content Section */}
            <div className="p-6">
              {/* Address Lines */}
              <div className="mb-4 space-y-2">
                <div className="h-5 w-4/5 rounded bg-amber-100" />
                <div className="h-4 w-3/5 rounded bg-amber-100" />
              </div>

              {/* CTA Section */}
              <div className="mt-4 flex items-center text-amber-600">
                <div className="h-4 w-24 rounded bg-amber-100" />
                <div className="ml-2 h-4 w-4 rounded bg-amber-100" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
