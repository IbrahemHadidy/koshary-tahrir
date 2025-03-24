import type en from '@messages/en.json';

type Navigation = {
  name: keyof typeof en.header;
  href: string;
};

const headerNavigation: Navigation[] = [
  { name: 'menu', href: '/menu' },
  { name: 'branches', href: '/branches' },
  { name: 'about', href: '/about' },
  { name: 'contact', href: '/contact' },
];

export default headerNavigation;
