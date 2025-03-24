import { Link } from '@i18n/navigation';
import { ShoppingBag } from 'lucide-react';
import type { useTranslations } from 'next-intl';

interface EmptyCartProps {
  t: ReturnType<typeof useTranslations<'cart'>>;
}

export default function EmptyCart({ t }: EmptyCartProps) {
  return (
    <div className="animate-[fadeIn_0.5s_ease-out] py-20 text-center">
      <ShoppingBag className="mx-auto mb-6 h-24 w-24 text-gray-300" />
      <p className="mb-8 text-xl text-gray-600">{t('empty')}</p>
      <Link
        href="/menu"
        className="rounded-full bg-amber-600 px-8 py-3 text-white transition-colors hover:bg-amber-700"
      >
        {t('backToMenu')}
      </Link>
    </div>
  );
}
