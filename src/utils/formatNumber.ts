const formatNumber = (num: number | string, locale: string = 'en'): string => {
  if (locale === 'ar') {
    const digits = '٠١٢٣٤٥٦٧٨٩';
    return String(num).replace(/\d/g, (d) => digits[+d]);
  }
  return String(num);
};

export default formatNumber;
