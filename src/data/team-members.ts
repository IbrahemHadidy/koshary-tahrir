import Team1 from '@images/people/person-1.webp';
import Team2 from '@images/people/person-2.webp';
import Team3 from '@images/people/person-3.webp';
import type en from '@messages/en.json';
import type { StaticImageData } from 'next/image';

type TeamMember = {
  id: number;
  name: { en: string; ar: string };
  role: keyof typeof en.about;
  image: StaticImageData;
};

const teamMembers: TeamMember[] = [
  { id: 1, name: { en: 'Ahmed Hassan', ar: 'أحمد حسن' }, role: 'masterChef', image: Team1 },
  { id: 2, name: { en: 'Mohamed Ali', ar: 'محمد علي' }, role: 'pastryChef', image: Team2 },
  { id: 3, name: { en: 'Omar Khalil', ar: 'عمر خليل' }, role: 'manager', image: Team3 },
];

export default teamMembers;
