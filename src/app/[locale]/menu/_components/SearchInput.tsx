import { menu, type MenuItem } from '@data/menu';
import { useTranslations } from 'next-intl';
import {
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';

interface SearchInputProps {
  filter: { query: string; category: MenuItem['category'] | 'all' };
  setFilter: Dispatch<SetStateAction<{ query: string; category: MenuItem['category'] | 'all' }>>;
}

const filters = [...new Set(menu.map((item) => item.category)), 'all'] as const;

export default function SearchInput({ filter, setFilter }: SearchInputProps) {
  const t = useTranslations('menu');

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchInputRef.current) searchInputRef.current.focus();

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategoryChange = (category: MenuItem['category'] | 'all') => {
    setFilter((prev) => ({ ...prev, category }));
    setIsOpen(false);
  };

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter((prev) => ({ ...prev, query: e.target.value }));
  };

  return (
    <div className="mx-auto max-w-md animate-[slideUpFade_0.5s_ease-out_0.2s_both]">
      <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-3 focus-within:ring-2 focus-within:ring-amber-500">
        {/* Custom Select Dropdown */}
        <div className="relative flex-shrink-0" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium hover:bg-gray-200 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            aria-haspopup="true"
          >
            {filter.category === 'all' ? t('categories.all') : t(`categories.${filter.category}`)}
            <svg
              className={`h-4 w-4 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute mt-2 w-48 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black/5 ltr:left-0 rtl:right-0">
              <div className="py-1">
                {filters.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category as MenuItem['category'] | 'all')}
                    className={`block w-full cursor-pointer px-4 py-2 text-sm ltr:text-left rtl:text-right ${
                      filter.category === category
                        ? 'bg-amber-100 text-amber-900'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category === 'all' ? t('categories.all') : t(`categories.${category}`)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder={t('searchPlaceholder')}
          value={filter.query}
          ref={searchInputRef}
          onChange={handleQueryChange}
          className="flex-1 bg-transparent focus:outline-none"
        />
      </div>
    </div>
  );
}
