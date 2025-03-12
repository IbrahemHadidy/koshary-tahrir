type Additional = {
  type: string;
  quantity: number;
};

export type MenuItem = {
  id: string;
  category: 'koshary' | 'additional' | 'drinks' | 'desserts';
  name: {
    en: string;
    ar: string;
  };
  price: number;
  images: string[];
  details?: {
    en: Additional[];
    ar: Additional[];
  };
};

export const menu: MenuItem[] = [
  {
    id: 'tahrir',
    category: 'koshary',
    name: { en: 'Tahrir', ar: 'علبة تحرير' },
    price: 32,
    images: ['/images/koshary/tahrir-box.jpg', '/images/koshary/tahrir-dish.jpg'],
    details: {
      en: [
        { type: 'Tomato Sauce', quantity: 1 },
        { type: 'Garlic Sauce', quantity: 1 },
        { type: 'Hot Sauce', quantity: 1 },
        { type: 'Fried Onions', quantity: 1 },
        { type: 'Spoon', quantity: 1 },
      ],
      ar: [
        { type: 'صلصة', quantity: 1 },
        { type: 'دقة', quantity: 1 },
        { type: 'شطة', quantity: 1 },
        { type: 'تقلية', quantity: 1 },
        { type: 'ملعقة', quantity: 1 },
      ],
    },
  },
  {
    id: 'top-tahrir',
    category: 'koshary',
    name: { en: 'Top Tahrir', ar: 'علبة توب' },
    price: 42,
    images: ['/images/koshary/top-tahrir-box.jpg', '/images/koshary/top-tahrir-dish.jpg'],
    details: {
      en: [
        { type: 'Tomato Sauce', quantity: 1 },
        { type: 'Garlic Sauce', quantity: 1 },
        { type: 'Hot Sauce', quantity: 1 },
        { type: 'Fried Onions', quantity: 1 },
        { type: 'Spoon', quantity: 1 },
      ],
      ar: [
        { type: 'صلصة', quantity: 1 },
        { type: 'دقة', quantity: 1 },
        { type: 'شطة', quantity: 1 },
        { type: 'تقلية', quantity: 1 },
        { type: 'ملعقة', quantity: 1 },
      ],
    },
  },
  {
    id: 'large-tahrir',
    category: 'koshary',
    name: { en: 'Large Tahrir', ar: 'علبة لارج' },
    price: 50,
    images: ['/images/koshary/large-tahrir-box.jpg', '/images/koshary/large-tahrir-dish.jpg'],
    details: {
      en: [
        { type: 'Tomato Sauce', quantity: 1 },
        { type: 'Garlic Sauce', quantity: 1 },
        { type: 'Hot Sauce', quantity: 1 },
        { type: 'Fried Onions', quantity: 1 },
        { type: 'Spoon', quantity: 1 },
      ],
      ar: [
        { type: 'صلصة', quantity: 1 },
        { type: 'دقة', quantity: 1 },
        { type: 'شطة', quantity: 1 },
        { type: 'تقلية', quantity: 1 },
        { type: 'ملعقة', quantity: 1 },
      ],
    },
  },
  {
    id: 'king-tahrir',
    category: 'koshary',
    name: { en: 'Large Tahrir', ar: 'علبة كينج' },
    price: 65,
    images: ['/images/koshary/king-tahrir-box.jpg', '/images/koshary/king-tahrir-dish.jpg'],
    details: {
      en: [
        { type: 'Tomato Sauce', quantity: 1 },
        { type: 'Garlic Sauce', quantity: 2 },
        { type: 'Hot Sauce', quantity: 2 },
        { type: 'Fried Onions', quantity: 2 },
        { type: 'Spoon', quantity: 1 },
      ],
      ar: [
        { type: 'صلصة', quantity: 1 },
        { type: 'دقة', quantity: 2 },
        { type: 'شطة', quantity: 2 },
        { type: 'تقلية', quantity: 2 },
        { type: 'ملعقة', quantity: 1 },
      ],
    },
  },
  {
    id: 'mega-meal',
    category: 'koshary',
    name: { en: 'Mega Meal For 3', ar: 'ميجا فويل ل٣ أفراد' },
    price: 140,
    images: ['/images/koshary/mega-meal-for-3.jpg'],
    details: {
      en: [
        { type: 'Tomato Sauce', quantity: 4 },
        { type: 'Garlic Sauce', quantity: 4 },
        { type: 'Hot Sauce', quantity: 4 },
        { type: 'Fried Onions', quantity: 3 },
        { type: 'Spoon', quantity: 4 },
      ],
      ar: [
        { type: 'صلصة', quantity: 4 },
        { type: 'دقة', quantity: 4 },
        { type: 'شطة', quantity: 4 },
        { type: 'تقلية', quantity: 3 },
        { type: 'ملعقة', quantity: 4 },
      ],
    },
  },
  {
    id: 'family-meal',
    category: 'koshary',
    name: { en: 'Family Meal For 5', ar: 'فاميلي فويل ل٥ أفراد' },
    price: 225,
    images: ['/images/koshary/family-meal-for-5.jpg'],
    details: {
      en: [
        { type: 'Tomato Sauce', quantity: 6 },
        { type: 'Garlic Sauce', quantity: 8 },
        { type: 'Hot Sauce', quantity: 8 },
        { type: 'Fried Onions', quantity: 6 },
        { type: 'Spoon', quantity: 6 },
      ],
      ar: [
        { type: 'صلصة', quantity: 6 },
        { type: 'دقة', quantity: 8 },
        { type: 'شطة', quantity: 8 },
        { type: 'تقلية', quantity: 6 },
        { type: 'ملعقة', quantity: 6 },
      ],
    },
  },

  {
    id: 'fried-onions',
    category: 'additional',
    name: { en: 'Fried Onions', ar: 'باكيت تقلية' },
    price: 12,
    images: ['/images/additionals/fried-onion.jpg'],
  },
  {
    id: 'garlic-sauce',
    category: 'additional',
    name: { en: 'Garlic Sauce', ar: 'باكيت دقة' },
    price: 2,
    images: ['/images/additionals/garlic-sauce.jpg'],
  },
  {
    id: 'hot-sauce',
    category: 'additional',
    name: { en: 'Hot Sauce', ar: 'باكيت شطة' },
    price: 2,
    images: ['/images/additionals/hot-sauce.jpg'],
  },
  {
    id: 'tomato-sauce',
    category: 'additional',
    name: { en: 'Tomato Sauce', ar: 'صلصة إضافية' },
    price: 7,
    images: ['/images/additionals/tomato-sauce.jpg'],
  },
  {
    id: 'chickpeas',
    category: 'additional',
    name: { en: 'Chickpeas', ar: 'حمص' },
    price: 7,
    images: ['/images/additionals/chickpeas.jpg'],
  },
  {
    id: 'lentils',
    category: 'additional',
    name: { en: 'Lentils', ar: 'عدس' },
    price: 7,
    images: ['/images/additionals/lentils.jpg'],
  },

  {
    id: 'mirinda-apple',
    category: 'drinks',
    name: { en: 'Mirinda Apple', ar: 'ميريندا تفاح' },
    price: 20,
    images: ['/images/drinks/mirinda-apple.jpg'],
  },
  {
    id: 'mirinda-orange',
    category: 'drinks',
    name: { en: 'Mirinda Orange', ar: 'ميريندا برتقال' },
    price: 20,
    images: ['/images/drinks/mirinda-orange.jpg'],
  },
  {
    id: '7-up-diet',
    category: 'drinks',
    name: { en: '7 Up Diet', ar: 'سڤن أب دايت' },
    price: 20,
    images: ['/images/drinks/7-up-diet.jpg'],
  },
  {
    id: '7-up',
    category: 'drinks',
    name: { en: '7 Up', ar: 'سڤن أب' },
    price: 20,
    images: ['/images/drinks/7-up.jpg'],
  },
  {
    id: 'pepsi-diet',
    category: 'drinks',
    name: { en: 'Pepsi Diet', ar: 'بيبسي دايت' },
    price: 20,
    images: ['/images/drinks/pepsi-diet.jpg'],
  },
  {
    id: 'pepsi',
    category: 'drinks',
    name: { en: 'Pepsi', ar: 'بيبسي' },
    price: 20,
    images: ['/images/drinks/pepsi.jpg'],
  },
  {
    id: 'mineral-water-small',
    category: 'drinks',
    name: { en: 'Mineral Water Small', ar: 'مياه معدنية صغيرة' },
    price: 6,
    images: ['/images/drinks/mineral-water-small.jpg'],
  },
  {
    id: 'mineral-water-large',
    category: 'drinks',
    name: { en: 'Mineral Water Large', ar: 'مياه معدنية كبيرة' },
    price: 10,
    images: ['/images/drinks/mineral-water-large.png'],
  },

  {
    id: 'rice-pudding',
    category: 'desserts',
    name: { en: 'Rice Pudding', ar: 'أرز باللبن' },
    price: 25,
    images: ['/images/desserts/rice-pudding.jpg'],
  },
  {
    id: 'pudding',
    category: 'desserts',
    name: { en: 'Pudding', ar: 'مهلبية' },
    price: 25,
    images: ['/images/desserts/pudding.jpg'],
  },
];
