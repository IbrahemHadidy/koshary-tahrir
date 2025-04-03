import { useEffect, useRef } from 'react';

interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  placeholder: string;
}

export default function SearchInput({
  searchQuery,
  setSearchQuery,
  placeholder,
}: SearchInputProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchInputRef.current) searchInputRef.current.focus();
  }, []);

  return (
    <div className="mx-auto max-w-md animate-[slideUpFade_0.5s_ease-out_0.2s_both]">
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        ref={searchInputRef}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full rounded-full border border-gray-200 bg-white px-6 py-3 focus:border-transparent focus:ring-2 focus:ring-amber-500 focus:outline-none"
      />
    </div>
  );
}
