'use client';

import Hero from './Hero';
import Info from './Info';
import Map from './Map';

export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Hero />
      <Info />
      <Map />
    </div>
  );
}
