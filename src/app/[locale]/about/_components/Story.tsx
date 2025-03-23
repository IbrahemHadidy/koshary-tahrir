import Exterior from '@images/branches/branch-2.webp';
import type { getTranslations } from 'next-intl/server';
import Image from 'next/image';

interface StoryProps {
  t: Awaited<ReturnType<typeof getTranslations<'about'>>>;
}

export default function Story({ t }: StoryProps) {
  return (
    <section className="mb-24">
      <div className="grid animate-[slideUpFade_0.5s_ease-out] items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="border-amber-500 text-3xl font-bold text-gray-900 ltr:border-l-4 ltr:pl-4 rtl:border-r-4 rtl:pr-4">
            {t('ourStory')}
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">{t('storyContent')}</p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
          <Image
            src={Exterior}
            alt="exterior"
            fill
            priority
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
