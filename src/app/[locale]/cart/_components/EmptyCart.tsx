import { Link } from '@i18n/navigation';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function EmptyCart() {
  const t = useTranslations('cart');

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center">
      <ShoppingBag className="mx-auto mb-6 h-24 w-24 text-gray-300" />
      <p className="mb-8 text-xl text-gray-600">{t('empty')}</p>
      <Link
        href="/menu"
        className="rounded-full bg-amber-600 px-8 py-3 text-white transition-colors hover:bg-amber-700"
      >
        {t('backToMenu')}
      </Link>
    </motion.div>
  );
}
