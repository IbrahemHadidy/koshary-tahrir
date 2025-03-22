import type en from '@messages/en.json';

export type Additional = {
  type: string;
  quantity: number;
};

export type MenuItem = {
  id: string;
  category: keyof typeof en.menu.categories;
  name: {
    en: string;
    ar: string;
  };
  description: {
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
  // Koshary Items
  {
    id: 'tahrir',
    category: 'koshary',
    name: { en: 'Tahrir', ar: 'علبة تحرير' },
    description: {
      en: 'A classic koshary box with lentils, rice, pasta, and crispy onions.',
      ar: 'علبة كشري تقليدية تحتوي على العدس، الأرز، المكرونة، والبصل المقرمش.',
    },
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
    description: {
      en: 'A larger portion of our classic koshary, perfect for a hearty meal.',
      ar: 'وجبة كشري بحجم أكبر، مثالية لوجبة مشبعة.',
    },
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
    description: {
      en: 'A generous serving of koshary for those who love extra portions.',
      ar: 'وجبة كشري بحجم كبير لعشاق الحصص الكبيرة.',
    },
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
    name: { en: 'King Tahrir', ar: 'علبة كينج' },
    description: {
      en: 'A king-size koshary box packed with extra sauces and toppings.',
      ar: 'علبة كشري بحجم كينج مع صلصات وإضافات أكثر.',
    },
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
    description: {
      en: 'A family-sized koshary meal, perfect for sharing with friends.',
      ar: 'وجبة كشري بحجم عائلي، مثالية للمشاركة مع الأصدقاء.',
    },
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
    description: {
      en: 'A feast-sized koshary meal made to serve up to five people.',
      ar: 'وجبة كشري بحجم كبير تكفي حتى خمسة أشخاص.',
    },
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

  // Additional Items
  {
    id: 'fried-onions',
    category: 'additional',
    name: { en: 'Fried Onions', ar: 'باكيت تقلية' },
    description: {
      en: 'Crispy fried onions to add a crunchy texture to your koshary.',
      ar: 'بصل مقرمش يضيف ملمسًا رائعًا لوجبتك.',
    },
    price: 12,
    images: ['/images/additionals/fried-onion.jpg'],
  },
  {
    id: 'garlic-sauce',
    category: 'additional',
    name: { en: 'Garlic Sauce', ar: 'باكيت دقة' },
    description: {
      en: 'Traditional Egyptian garlic sauce to enhance your koshary experience.',
      ar: 'صلصة الدقة المصرية التقليدية لإضافة نكهة غنية.',
    },
    price: 2,
    images: ['/images/additionals/garlic-sauce.jpg'],
  },
  {
    id: 'hot-sauce',
    category: 'additional',
    name: { en: 'Hot Sauce', ar: 'باكيت شطة' },
    description: {
      en: 'A spicy chili sauce for those who love an extra kick of heat.',
      ar: 'صلصة شطة حارة لمحبي النكهات الحارة.',
    },
    price: 2,
    images: ['/images/additionals/hot-sauce.jpg'],
  },
  {
    id: 'tomato-sauce',
    category: 'additional',
    name: { en: 'Tomato Sauce', ar: 'صلصة إضافية' },
    description: {
      en: 'A rich and flavorful tomato sauce to mix with your koshary.',
      ar: 'صلصة طماطم غنية بالنكهة لإضافتها إلى الكشري.',
    },
    price: 7,
    images: ['/images/additionals/tomato-sauce.jpg'],
  },
  {
    id: 'chickpeas',
    category: 'additional',
    name: { en: 'Chickpeas', ar: 'حمص' },
    description: {
      en: 'A serving of chickpeas for extra protein and flavor.',
      ar: 'وجبة من الحمص لإضافة البروتين والنكهة.',
    },
    price: 7,
    images: ['/images/additionals/chickpeas.jpg'],
  },
  {
    id: 'lentils',
    category: 'additional',
    name: { en: 'Lentils', ar: 'عدس' },
    description: {
      en: 'Nutritious lentils to add more depth and flavor to your meal.',
      ar: 'عدس مغذي لإضافة عمق ونكهة لوجبتك.',
    },
    price: 7,
    images: ['/images/additionals/lentils.jpg'],
  },

  // Drinks
  {
    id: 'mirinda-apple',
    category: 'drinks',
    name: { en: 'Mirinda Apple', ar: 'ميريندا تفاح' },
    description: {
      en: 'A refreshing apple-flavored soda to complement your meal.',
      ar: 'مشروب غازي بنكهة التفاح المنعشة لإكمال وجبتك.',
    },
    price: 20,
    images: ['/images/drinks/mirinda-apple.jpg'],
  },
  {
    id: 'mirinda-orange',
    category: 'drinks',
    name: { en: 'Mirinda Orange', ar: 'ميريندا برتقال' },
    description: {
      en: 'A sweet and tangy orange-flavored soda.',
      ar: 'مشروب غازي حلو ومنعش بنكهة البرتقال.',
    },
    price: 20,
    images: ['/images/drinks/mirinda-orange.jpg'],
  },
  {
    id: '7-up-diet',
    category: 'drinks',
    name: { en: '7 Up Diet', ar: 'سڤن أب دايت' },
    description: {
      en: 'A sugar-free lemon-lime soda for a lighter taste.',
      ar: 'مشروب غازي خالٍ من السكر بنكهة الليمون والليم المنعش.',
    },
    price: 20,
    images: ['/images/drinks/7-up-diet.jpg'],
  },
  {
    id: '7-up',
    category: 'drinks',
    name: { en: '7 Up', ar: 'سڤن أب' },
    description: {
      en: 'A classic lemon-lime soda for a refreshing taste.',
      ar: 'مشروب غازي كلاسيكي بنكهة الليمون والليم.',
    },
    price: 20,
    images: ['/images/drinks/7-up.jpg'],
  },
  {
    id: 'pepsi-diet',
    category: 'drinks',
    name: { en: 'Pepsi Diet', ar: 'بيبسي دايت' },
    description: {
      en: 'The sugar-free version of Pepsi for a lighter cola experience.',
      ar: 'النسخة الخالية من السكر من بيبسي لمن يفضل طعم الكولا الأخف.',
    },
    price: 20,
    images: ['/images/drinks/pepsi-diet.jpg'],
  },
  {
    id: 'pepsi',
    category: 'drinks',
    name: { en: 'Pepsi', ar: 'بيبسي' },
    description: {
      en: 'A classic cola drink that pairs perfectly with any meal.',
      ar: 'مشروب كولا كلاسيكي يناسب جميع الوجبات.',
    },
    price: 20,
    images: ['/images/drinks/pepsi.jpg'],
  },
  {
    id: 'mineral-water-small',
    category: 'drinks',
    name: { en: 'Mineral Water Small', ar: 'مياه معدنية صغيرة' },
    description: {
      en: 'A small bottle of pure mineral water.',
      ar: 'زجاجة صغيرة من المياه المعدنية النقية.',
    },
    price: 6,
    images: ['/images/drinks/mineral-water-small.jpg'],
  },
  {
    id: 'mineral-water-large',
    category: 'drinks',
    name: { en: 'Mineral Water Large', ar: 'مياه معدنية كبيرة' },
    description: {
      en: 'A large bottle of pure mineral water.',
      ar: 'زجاجة كبيرة من المياه المعدنية النقية.',
    },
    price: 10,
    images: ['/images/drinks/mineral-water-large.png'],
  },

  // Desserts
  {
    id: 'rice-pudding',
    category: 'desserts',
    name: { en: 'Rice Pudding', ar: 'أرز باللبن' },
    description: {
      en: 'A creamy rice pudding dessert, topped with nuts and cinnamon.',
      ar: 'أرز باللبن الكريمي، مزين بالمكسرات والقرفة.',
    },
    price: 25,
    images: ['/images/desserts/rice-pudding.jpg'],
  },
  {
    id: 'pudding',
    category: 'desserts',
    name: { en: 'Pudding', ar: 'مهلبية' },
    description: {
      en: 'A smooth and creamy Middle Eastern dessert made with milk and sugar.',
      ar: 'مهلبية ناعمة وكريمية محضرة بالحليب والسكر.',
    },
    price: 25,
    images: ['/images/desserts/pudding.jpg'],
  },
] as const;
