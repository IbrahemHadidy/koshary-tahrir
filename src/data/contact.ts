import type en from '@messages/en.json';
import { Clock, Mail, MapPin, Phone, type LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

type ContactTranslationKey = keyof typeof en.contact;

export type ContactMethod = {
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  title: ContactTranslationKey;
  content: ContactTranslationKey;
  link?: string;
  dir?: 'ltr' | 'rtl';
};

const contactMethods: ContactMethod[] = [
  {
    icon: MapPin,
    title: 'visitUs',
    content: 'address',
  },
  {
    icon: Phone,
    title: 'callUs',
    content: 'phone',
    link: 'tel:19719',
    dir: 'ltr',
  },
  {
    icon: Mail,
    title: 'emailUs',
    content: 'emailAddress',
    link: 'mailto:info@kosharyaltahrir.com',
  },
  {
    icon: Clock,
    title: 'openingHours',
    content: 'hours',
  },
];

export default contactMethods;
