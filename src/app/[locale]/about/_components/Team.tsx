import Team1 from '@images/people/person-1.webp';
import Team2 from '@images/people/person-2.webp';
import Team3 from '@images/people/person-3.webp';
import type en from '@messages/en.json';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Image, { type StaticImageData } from 'next/image';

type TeamMember = {
  id: number;
  name: { en: string; ar: string };
  role: keyof typeof en.about;
  image: StaticImageData;
};

export default function AboutPage() {
  const t = useTranslations('about');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const teamMembers: TeamMember[] = [
    { id: 1, name: { en: 'Ahmed Hassan', ar: 'أحمد حسن' }, role: 'masterChef', image: Team1 },
    { id: 2, name: { en: 'Mohamed Ali', ar: 'محمد علي' }, role: 'pastryChef', image: Team2 },
    { id: 3, name: { en: 'Omar Khalil', ar: 'عمر خليل' }, role: 'manager', image: Team3 },
  ];

  return (
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
                alt={member.role}
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
  );
}
