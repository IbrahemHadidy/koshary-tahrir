'use client';

import Hero from './_components/Hero';
import Info from './_components/Info';
import Map from './_components/Map';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Hero />
      <Info />
      <Map />
    </div>
  );
}
