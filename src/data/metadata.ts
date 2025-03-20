type PageNames = 'home' | 'menu' | 'about' | 'contact' | 'branches' | 'cart' | 'product';
type Locales = 'en' | 'ar';

type Metadata = Record<PageNames, Record<Locales, { title: string; description: string }>>;

const metadata: Metadata = {
  home: {
    en: {
      title: 'Koshary Al-Tahrir | Authentic Egyptian Cuisine',
      description: 'Experience the taste of authentic Egyptian koshary since 1952.',
    },
    ar: {
      title: 'كشري التحرير | الطعم المصري الأصيل',
      description: 'استمتع بمذاق الكشري المصري الأصيل منذ عام ١٩٥٢.',
    },
  },
  menu: {
    en: {
      title: 'Menu | Koshary Al-Tahrir',
      description: 'Browse our authentic Egyptian menu featuring koshary, drinks, and desserts.',
    },
    ar: {
      title: 'قائمة الطعام | كشري التحرير',
      description: 'تصفح قائمتنا التي تضم أطباق الكشري والمشروبات والحلويات الأصيلة.',
    },
  },
  about: {
    en: {
      title: 'About Us | Koshary Al-Tahrir',
      description: 'Learn more about our history and commitment to quality food.',
    },
    ar: {
      title: 'معلومات عنا | كشري التحرير',
      description: 'تعرف على تاريخنا والتزامنا بتقديم طعام عالي الجودة.',
    },
  },
  contact: {
    en: {
      title: 'Contact Us | Koshary Al-Tahrir',
      description: 'Get in touch with us for inquiries, orders, or feedback.',
    },
    ar: {
      title: 'اتصل بنا | كشري التحرير',
      description: 'تواصل معنا للاستفسارات أو الطلبات أو إرسال ملاحظاتك.',
    },
  },
  branches: {
    en: {
      title: 'Our Branches | Koshary Al-Tahrir',
      description: 'Find our nearest branches and visit us today.',
    },
    ar: {
      title: 'فروعنا | كشري التحرير',
      description: 'اعثر على أقرب فرع لك وقم بزيارتنا اليوم.',
    },
  },
  cart: {
    en: {
      title: 'Your Cart | Koshary Al-Tahrir',
      description: 'Review your selected items before placing your order.',
    },
    ar: {
      title: 'عربة التسوق | كشري التحرير',
      description: 'راجع العناصر المختارة قبل إتمام الطلب.',
    },
  },
  product: {
    en: {
      title: '{name} | Koshary Al-Tahrir',
      description: 'Discover {name}, made with authentic Egyptian ingredients and flavors.',
    },
    ar: {
      title: '{name} | كشري التحرير',
      description: 'اكتشف {name} المحضر بمكونات ونكهات مصرية أصيلة.',
    },
  },
};

export default metadata;
