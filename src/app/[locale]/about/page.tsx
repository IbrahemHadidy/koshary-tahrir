'use client';

import AboutHero from '@images/about-hero.jpg';
import Interior from '@images/branches/branch-2.jpg';
import Team1 from '@images/people/person-1.jpg';
import Team2 from '@images/people/person-2.jpg';
import Team3 from '@images/people/person-3.jpg';
import { motion } from 'framer-motion';
import { Clock, HeartHandshake, MapPin, Utensils } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AboutPage() {
  const t = useTranslations('about');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const teamMembers = [
    { id: 1, name: { en: 'Ahmed Hassan', ar: 'أحمد حسن' }, role: 'masterChef', image: Team1 },
    { id: 2, name: { en: 'Mohamed Ali', ar: 'محمد علي' }, role: 'pastryChef', image: Team2 },
    { id: 3, name: { en: 'Omar Khalil', ar: 'عمر خليل' }, role: 'manager', image: Team3 },
  ];

  const coreValues = [
    { icon: Utensils, title: 'quality', description: 'qualityDesc' },
    { icon: HeartHandshake, title: 'tradition', description: 'traditionDesc' },
    { icon: Clock, title: 'consistency', description: 'consistencyDesc' },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative mb-16 h-96 overflow-hidden rounded-2xl"
      >
        <Image src={AboutHero} alt="Koshary Al-Tahrir kitchen" fill className="object-cover" />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-gray-900/60 p-8">
          <h1 className="text-4xl font-bold text-white md:text-6xl">{t('title')}</h1>
        </div>
      </motion.section>

      {/* Story Section */}
      <section className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid items-center gap-12 md:grid-cols-2"
        >
          <div className="space-y-6">
            <h2 className="border-amber-500 text-3xl font-bold text-gray-900 ltr:border-l-4 ltr:pl-4 rtl:border-r-4 rtl:pr-4">
              {t('ourStory')}
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">{t('storyContent')}</p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
            <Image src={Interior} alt="Restaurant interior" fill className="object-cover" />
          </div>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="mb-24">
        <h2 className="mb-12 text-center text-3xl font-bold">{t('coreValues')}</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl bg-white p-8 shadow-md transition-shadow hover:shadow-lg"
            >
              <value.icon className="mb-4 h-12 w-12 text-amber-600" />
              <h3 className="mb-2 text-xl font-semibold">{t(value.title)}</h3>
              <p className="text-gray-600">{t(value.description)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-24">
        <h2 className="mb-12 text-center text-3xl font-bold">{t('ourTeam')}</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mx-auto mb-6 aspect-square h-64 w-64 overflow-hidden rounded-full shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name.en}
                  fill
                  className="object-cover grayscale transition-all group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-xl font-semibold">{isRTL ? member.name.ar : member.name.en}</h3>
              <p className="text-amber-600">{t(member.role)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="rounded-2xl bg-amber-50 p-8 md:p-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">{t('visitUs')}</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-amber-600" />
                <p className="text-gray-600">{t('address')}</p>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="h-6 w-6 text-amber-600" />
                <p className="text-gray-600">{t('openingHours')}</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="mb-6 text-xl font-semibold">{t('contactForm')}</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder={t('name')}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder={t('email')}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
              <textarea
                placeholder={t('message')}
                rows={4}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
              <button className="w-full cursor-pointer rounded-lg bg-amber-600 py-3 text-white transition-colors hover:bg-amber-700">
                {t('sendMessage')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
