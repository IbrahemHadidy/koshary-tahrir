export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-16 h-96 animate-pulse rounded-2xl bg-amber-100" />

      {/* Contact Content */}
      <div className="grid gap-12 md:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="h-8 w-48 animate-pulse rounded bg-amber-100" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse rounded-xl bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-amber-100" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-32 rounded bg-amber-100" />
                    <div className="h-3 w-48 rounded bg-amber-100" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="animate-pulse space-y-6 rounded-xl bg-white p-6 shadow-md">
          <div className="h-8 w-48 rounded bg-amber-100" />

          <div className="space-y-4">
            <div className="h-12 rounded-lg bg-amber-100" />
            <div className="h-12 rounded-lg bg-amber-100" />
            <div className="h-12 rounded-lg bg-amber-100" />
            <div className="h-32 rounded-lg bg-amber-100" />
            <div className="h-12 rounded-lg bg-amber-100" />
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-12 h-96 animate-pulse rounded-2xl bg-amber-100" />
    </div>
  );
}
