import { menu, type MenuItem } from '@data/menu';
import type en from '@messages/en.json';
import { useTranslations } from 'next-intl';
import Product from './Product';

interface ResultsProps {
  searchQuery: string;
}

type CategoryTitle = keyof typeof en.menu.categories;

export default function Results({ searchQuery }: ResultsProps) {
  const t = useTranslations('menu.categories');

  // Filter and group menu items by category
  const filteredMenu = menu.filter(
    (item) =>
      item.name.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.name.ar.includes(searchQuery)
  );

  // Group menu items by category
  const categorizedMenu = filteredMenu.reduce<Record<string, MenuItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {Object.entries<MenuItem[]>(categorizedMenu).map(([category, items]) => (
        <section key={category} className="mb-16">
          <h2 className="mb-8 text-3xl font-semibold text-gray-800 ltr:border-l-4 ltr:border-amber-500 ltr:pl-4 rtl:border-r-4 rtl:border-amber-500 rtl:pr-4">
            {t(category as CategoryTitle)}
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
