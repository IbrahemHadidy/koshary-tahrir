export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section Skeleton */}
      <div className="mb-16 h-96 animate-pulse rounded-2xl bg-amber-100" />

      {/* Story Section Skeleton */}
      <section className="mb-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="h-8 w-48 animate-pulse rounded bg-amber-100" />
            <div className="space-y-4">
              <div className="h-4 w-full animate-pulse rounded bg-amber-100" />
              <div className="h-4 w-4/5 animate-pulse rounded bg-amber-100" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-amber-100" />
            </div>
          </div>
          <div className="aspect-video animate-pulse rounded-xl bg-amber-100" />
        </div>
      </section>

      {/* Core Values Skeleton */}
      <section className="mb-24">
        <div className="mx-auto mb-12 h-8 w-48 animate-pulse rounded bg-amber-100" />
        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse rounded-xl bg-amber-50 p-8">
              <div className="mb-4 h-12 w-12 rounded-lg bg-amber-100" />
              <div className="mb-2 h-6 w-3/4 rounded bg-amber-100" />
              <div className="h-4 w-full rounded bg-amber-100" />
            </div>
          ))}
        </div>
      </section>

      {/* Team Section Skeleton */}
      <section className="mb-24">
        <div className="mx-auto mb-12 h-8 w-48 animate-pulse rounded bg-amber-100" />
        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-6 h-64 w-64 animate-pulse rounded-full bg-amber-100" />
              <div className="mx-auto mb-2 h-6 w-32 animate-pulse rounded bg-amber-100" />
              <div className="mx-auto h-4 w-24 animate-pulse rounded bg-amber-100" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section Skeleton */}
      <section className="animate-pulse rounded-2xl bg-amber-50 p-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="h-8 w-48 rounded bg-amber-100" />
            <div className="space-y-4">
              <div className="h-6 w-64 rounded bg-amber-100" />
              <div className="h-6 w-64 rounded bg-amber-100" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-12 rounded-lg bg-amber-100" />
            <div className="h-12 rounded-lg bg-amber-100" />
            <div className="h-32 rounded-lg bg-amber-100" />
            <div className="h-12 rounded-lg bg-amber-100" />
          </div>
        </div>
      </section>
    </div>
  );
}
