import teamMembers from '@data/team-members';
import type { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';

interface TeamProps {
  t: Awaited<ReturnType<typeof getTranslations<'about'>>>;
  locale: Awaited<ReturnType<typeof getLocale>>;
}

export default function Team({ t, locale }: TeamProps) {
  const isRTL = locale === 'ar';

  return (
    <section className="mb-24">
      <h2 className="mb-12 text-center text-3xl font-bold">{t('ourTeam')}</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className={`group text-center animate-[slideUpFade_0.5s_ease-out_${index * 0.1}s_both]`}
          >
            <div className="relative mx-auto mb-6 aspect-square h-64 w-64 overflow-hidden rounded-full shadow-lg">
              <Image
                src={member.image}
                alt={member.role}
                fill
                loading="lazy"
                placeholder="blur"
                className="object-cover grayscale transition-all group-hover:grayscale-0"
              />
            </div>
            <h3 className="text-xl font-semibold">{isRTL ? member.name.ar : member.name.en}</h3>
            <p className="text-amber-600">{t(member.role)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
