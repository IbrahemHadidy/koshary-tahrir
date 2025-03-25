import type en from '@messages/en.json';
import type { StaticImageData } from 'next/image';

import chickpeas from '@images/additionals/chickpeas.webp';
import friedOnion from '@images/additionals/fried-onion.webp';
import garlicSauce from '@images/additionals/garlic-sauce.webp';
import hotSauce from '@images/additionals/hot-sauce.webp';
import lentils from '@images/additionals/lentils.webp';
import tomatoSauce from '@images/additionals/tomato-sauce.webp';
import pudding from '@images/desserts/pudding.webp';
import ricePudding from '@images/desserts/rice-pudding.webp';
import sevenUpDiet from '@images/drinks/7-up-diet.webp';
import sevenUp from '@images/drinks/7-up.webp';
import mineralWaterLarge from '@images/drinks/mineral-water-large.webp';
import mineralWaterSmall from '@images/drinks/mineral-water-small.webp';
import mirindaApple from '@images/drinks/mirinda-apple.webp';
import mirindaOrange from '@images/drinks/mirinda-orange.webp';
import pepsiDiet from '@images/drinks/pepsi-diet.webp';
import pepsi from '@images/drinks/pepsi.webp';
import familyMealFor5 from '@images/koshary/family-meal-for-5.webp';
import kingTahrirBox from '@images/koshary/king-tahrir-box.webp';
import kingTahrirDish from '@images/koshary/king-tahrir-dish.webp';
import largeTahrirBox from '@images/koshary/large-tahrir-box.webp';
import largeTahrirDish from '@images/koshary/large-tahrir-dish.webp';
import megaMealFor3 from '@images/koshary/mega-meal-for-3.webp';
import tahrirBox from '@images/koshary/tahrir-box.webp';
import tahrirDish from '@images/koshary/tahrir-dish.webp';
import topTahrirBox from '@images/koshary/top-tahrir-box.webp';
import topTahrirDish from '@images/koshary/top-tahrir-dish.webp';

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
  images: StaticImageData[];
  details?: {
    en: Additional[];
    ar: Additional[];
  };
  nutrition?: {
    calories?: string;
    carbohydrateContent?: string;
    proteinContent?: string;
    fatContent?: string;
    fiberContent?: string;
    sodiumContent?: string;
    sugarContent?: string;
    allergens?: string[];
    dietaryRestrictions?: string[];
    micronutrients?: Record<string, string>;
    servingSize?: string;
    cookingMethod?: string;
    preservatives?: string;
    additives?: string[];
    caffeineContent?: string;
    mineralContent?: string;
    pH?: string;
    calciumContent?: string;
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
    images: [tahrirBox, tahrirDish],
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
    nutrition: {
      calories: '650-700',
      carbohydrateContent: '120-130g',
      proteinContent: '20-25g',
      fatContent: '10-15g',
      fiberContent: '8-10g',
      sodiumContent: '800-900mg',
      allergens: ['gluten'],
      dietaryRestrictions: ['vegetarian'],
      micronutrients: {
        iron: '15% DV',
        calcium: '8% DV',
      },
      servingSize: '1 box (450g)',
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
    images: [topTahrirBox, topTahrirDish],
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
    nutrition: {
      calories: '850-900',
      carbohydrateContent: '150-160g',
      proteinContent: '25-30g',
      fatContent: '15-20g',
      fiberContent: '10-12g',
      sodiumContent: '1000-1100mg',
      allergens: ['gluten'],
      dietaryRestrictions: ['vegetarian'],
      micronutrients: {
        iron: '18% DV',
        calcium: '10% DV',
      },
      servingSize: '1 box (600g)',
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
    images: [largeTahrirBox, largeTahrirDish],
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
    nutrition: {
      calories: '1000-1100',
      carbohydrateContent: '180-200g',
      proteinContent: '30-35g',
      fatContent: '20-25g',
      fiberContent: '12-15g',
      sodiumContent: '1200-1300mg',
      allergens: ['gluten'],
      dietaryRestrictions: ['vegetarian'],
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
    images: [kingTahrirBox, kingTahrirDish],
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
    nutrition: {
      calories: '1200-1300',
      carbohydrateContent: '220-240g',
      proteinContent: '35-40g',
      fatContent: '25-30g',
      fiberContent: '15-18g',
      sodiumContent: '1500-1600mg',
      allergens: ['gluten'],
      dietaryRestrictions: ['vegetarian'],
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
    images: [megaMealFor3],
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
    nutrition: {
      calories: '2200-2500 (total)',
      carbohydrateContent: '400-450g',
      proteinContent: '70-80g',
      fatContent: '50-60g',
      fiberContent: '30-35g',
      sodiumContent: '3000-3200mg',
      allergens: ['gluten'],
      dietaryRestrictions: ['vegetarian'],
      servingSize: 'Serves 3',
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
    images: [familyMealFor5],
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
    nutrition: {
      calories: '3500-4000 (total)',
      carbohydrateContent: '600-650g',
      proteinContent: '100-120g',
      fatContent: '80-100g',
      fiberContent: '45-50g',
      sodiumContent: '4500-5000mg',
      allergens: ['gluten'],
      dietaryRestrictions: ['vegetarian'],
      servingSize: 'Serves 5',
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
    images: [friedOnion],
    nutrition: {
      calories: '150',
      fatContent: '10g (2g saturated)',
      carbohydrateContent: '12g',
      fiberContent: '2g',
      sodiumContent: '200mg',
      servingSize: '30g packet',
      cookingMethod: 'Deep-fried in sunflower oil',
    },
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
    images: [garlicSauce],
    nutrition: {
      calories: '80',
      fatContent: '8g',
      carbohydrateContent: '2g',
      sodiumContent: '150mg',
      allergens: ['garlic'],
      preservatives: 'None',
    },
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
    images: [hotSauce],
    nutrition: {
      calories: '20',
      carbohydrateContent: '4g',
      sodiumContent: '300mg',
      servingSize: '20ml packet',
    },
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
    images: [tomatoSauce],
    nutrition: {
      calories: '40',
      carbohydrateContent: '8g',
      proteinContent: '1g',
      sodiumContent: '400mg',
      micronutrients: {
        vitaminC: '15% DV',
        lycopene: '20% DV',
      },
    },
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
    images: [chickpeas],
    nutrition: {
      calories: '164',
      carbohydrateContent: '27g',
      proteinContent: '9g',
      fatContent: '2.6g',
      fiberContent: '8g',
      micronutrients: {
        iron: '26% DV',
        folate: '43% DV',
      },
    },
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
    images: [lentils],
    nutrition: {
      calories: '116',
      carbohydrateContent: '20g',
      proteinContent: '9g',
      fatContent: '0.4g',
      fiberContent: '8g',
      micronutrients: {
        iron: '37% DV',
        folate: '45% DV',
      },
    },
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
    images: [mirindaApple],
    nutrition: {
      calories: '160',
      sugarContent: '40g',
      carbohydrateContent: '42g',
      sodiumContent: '45mg',
      additives: ['E330', 'E211'],
    },
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
    images: [mirindaOrange],
    nutrition: {
      calories: '170',
      sugarContent: '42g',
      carbohydrateContent: '44g',
      sodiumContent: '40mg',
      additives: ['E330', 'E102'],
    },
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
    images: [sevenUpDiet],
    nutrition: {
      calories: '0',
      carbohydrateContent: '0g',
      sodiumContent: '35mg',
      additives: ['Aspartame', 'Acesulfame-K'],
    },
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
    images: [sevenUp],
    nutrition: {
      calories: '140',
      sugarContent: '38g',
      carbohydrateContent: '39g',
      sodiumContent: '40mg',
    },
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
    images: [pepsiDiet],
    nutrition: {
      calories: '0',
      carbohydrateContent: '0g',
      sodiumContent: '25mg',
      additives: ['Aspartame', 'Acesulfame-K'],
    },
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
    images: [pepsi],
    nutrition: {
      calories: '150',
      sugarContent: '41g',
      carbohydrateContent: '41g',
      sodiumContent: '30mg',
      caffeineContent: '38mg',
    },
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
    images: [mineralWaterSmall],
    nutrition: {
      calories: '0',
      sodiumContent: '10mg',
      mineralContent: 'Calcium: 20mg, Magnesium: 5mg',
      pH: '7.5',
    },
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
    images: [mineralWaterLarge],
    nutrition: {
      calories: '0',
      sodiumContent: '20mg',
      mineralContent: 'Calcium: 50mg, Magnesium: 15mg',
      pH: '7.5',
    },
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
    images: [pudding],
    nutrition: {
      calories: '300',
      carbohydrateContent: '45g',
      sugarContent: '30g',
      proteinContent: '8g',
      fatContent: '10g',
      calciumContent: '15% DV',
      allergens: ['milk', 'nuts'],
    },
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
    images: [ricePudding],
    nutrition: {
      calories: '280',
      carbohydrateContent: '40g',
      sugarContent: '25g',
      proteinContent: '6g',
      fatContent: '8g',
      calciumContent: '20% DV',
      allergens: ['milk'],
    },
  },
];
