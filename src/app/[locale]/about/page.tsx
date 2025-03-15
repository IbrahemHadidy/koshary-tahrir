'use client';

import Contact from './_components/Contact';
import CoreValues from './_components/CoreValues';
import Hero from './_components/Hero';
import Story from './_components/Story';
import Team from './_components/Team';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Hero />
      <Story />
      <CoreValues />
      <Team />
      <Contact />
    </div>
  );
}
