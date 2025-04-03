import { menu, type MenuItem } from '@data/menu';
import type en from '@messages/en.json';
import { useTranslations } from 'next-intl';
import Product from './Product';

interface ResultsProps {
  filter: { query: string; category: MenuItem['category'] | 'all' };
}

type CategoryTitle = keyof typeof en.menu.categories;

export default function Results({ filter }: ResultsProps) {
  const t = useTranslations('menu.categories');

  // Filter menu
  let filteredMenu;
  if (filter.category === 'all') {
    // Filter by query
    filteredMenu = menu.filter(
      (item) =>
        item.name.en.toLowerCase().includes(filter.query.toLowerCase()) ||
        item.name.ar.includes(filter.query)
    );
  } else {
    // Filter by query and category
    filteredMenu = menu.filter(
      (item) =>
        item.category === filter.category &&
        (item.name.en.toLowerCase().includes(filter.query.toLowerCase()) ||
          item.name.ar.includes(filter.query))
    );
  }

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
          <h2 className="mb-8 animate-[slideUpFade_0.5s_ease-out] text-3xl font-semibold text-gray-800 ltr:border-l-4 ltr:border-amber-500 ltr:pl-4 rtl:border-r-4 rtl:border-amber-500 rtl:pr-4">
            {t(category as CategoryTitle)}
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, idx) => (
              <Product key={item.id} idx={idx} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
