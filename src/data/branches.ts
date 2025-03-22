export type Branch = {
  id: string;
  image: string;
  name: {
    en: string;
    ar: string;
  };
  address: {
    en: string;
    ar: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
};

export const branches: Branch[] = [
  {
    id: 'branch-1',
    name: { en: 'Tahrir Square', ar: 'ميدان التحرير' },
    image: '/images/branches/branch-1.webp',
    address: {
      en: 'Tahrir Square, Downtown, Cairo, Egypt',
      ar: 'ميدان التحرير، وسط البلد، القاهرة، مصر',
    },
    coordinates: { lat: 30.0444, lng: 31.2357 },
  },
  {
    id: 'branch-2',
    name: { en: 'Nasr City', ar: 'مدينة نصر' },
    image: '/images/branches/branch-2.webp',
    address: {
      en: 'Omar Ibn El-Khattab St, Nasr City, Cairo, Egypt',
      ar: 'شارع عمر بن الخطاب، مدينة نصر، القاهرة، مصر',
    },
    coordinates: { lat: 30.0595, lng: 31.3378 },
  },
  {
    id: 'branch-3',
    name: { en: 'Maadi', ar: 'المعادي' },
    image: '/images/branches/branch-3.webp',
    address: {
      en: 'El Nasr St, Beside Momen, New Maadi, Cairo, Egypt',
      ar: 'شارع النصر، بجانب مؤمن، المعادي الجديدة، القاهرة، مصر',
    },
    coordinates: { lat: 29.9627, lng: 31.2769 },
  },
  {
    id: 'branch-4',
    name: { en: 'Dokki', ar: 'الدقي' },
    image: '/images/branches/branch-4.webp',
    address: {
      en: 'Dokki, Giza, Egypt',
      ar: 'الدقي، الجيزة، مصر',
    },
    coordinates: { lat: 30.0386, lng: 31.2137 },
  },
  {
    id: 'branch-5',
    name: { en: 'Al Shoqiyah', ar: 'الشقية' },
    image: '/images/branches/branch-5.webp',
    address: {
      en: 'Abdullah Bin Al Abbas Street, Al Shoqiyah, Mecca, Saudi Arabia',
      ar: 'شارع عبد الله بن العباس، الشقية، مكة، المملكة العربية السعودية',
    },
    coordinates: { lat: 21.3871, lng: 39.8579 },
  },
  {
    id: 'branch-6',
    name: { en: 'Al Wurud', ar: 'الورود' },
    image: '/images/branches/branch-6.webp',
    address: {
      en: 'King Abdullah Road, Al Wurud, Riyadh, Saudi Arabia',
      ar: 'طريق الملك عبد الله، الورود، الرياض، المملكة العربية السعودية',
    },
    coordinates: { lat: 24.7261, lng: 46.6746 },
  },
];
