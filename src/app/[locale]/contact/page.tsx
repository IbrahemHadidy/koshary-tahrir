'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import ContactImage from '@images/contact-hero.jpg';
import contactMethods from '@data/contact';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mb-16 h-96 overflow-hidden rounded-2xl"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ContactImage.src})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60" />
        </div>
        <div className="absolute inset-0 flex items-end p-8">
          <h1 className="text-4xl font-bold text-white md:text-6xl">{t('title')}</h1>
        </div>
      </motion.section>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-24 grid gap-12 md:grid-cols-2"
      >
        {/* Contact Methods */}
        <div className="space-y-8">
          <h2 className="border-amber-500 text-3xl font-bold text-gray-900 ltr:border-l-4 ltr:pl-4 rtl:border-r-4 rtl:pr-4">
            {t('getInTouch')}
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg ${
                  method.link ? 'cursor-pointer' : ''
                }`}
              >
                <a
                  href={method.link}
                  target={method.link ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4"
                >
                  <div className="rounded-lg bg-amber-50 p-3 group-hover:text-amber-600">
                    <method.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">{t(method.title)}</h3>
                    <p className="text-gray-600">{t(method.content)}</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-xl bg-white p-6 shadow-md md:p-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">{t('sendMessage')}</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder={t('name')}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder={t('email')}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder={t('subject')}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
              <textarea
                placeholder={t('message')}
                rows={5}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-700"
            >
              {t('sendMessage')}
            </button>
          </form>
        </div>
      </motion.div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="h-[400px] overflow-hidden rounded-2xl shadow-lg"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.66325428613!2d31.23594851511493!3d30.04441758188393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458409b6f5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sKoshary+Al-Tahrir!5e0!3m2!1sen!2seg!4v1234567890123!5m2!1sen!2seg"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </div>
  );
}
