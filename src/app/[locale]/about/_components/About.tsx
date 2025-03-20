'use client';

import Contact from './Contact';
import CoreValues from './CoreValues';
import Hero from './Hero';
import Story from './Story';
import Team from './Team';

export default function About() {
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
