'use client';

import type { MenuItem } from '@data/menu';
import type { Locale } from 'next-intl';

interface ProductSchemaProps {
  product: MenuItem;
  locale: Locale;
}

export default function ProductSchema({ product, locale }: ProductSchemaProps) {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MenuItem',
        name: product.name[locale],
        description: product.description[locale],
        image: product.images.map((img) => ({
          '@type': 'ImageObject',
          url: img.src,
          caption: product.name[locale],
        })),
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: 'EGP',
          availability: 'https://schema.org/InStock',
          category: product.category.charAt(0).toUpperCase() + product.category.slice(1, -1),
        },
        nutrition: {
          calories: product.nutrition?.calories,
          carbohydrateContent: product.nutrition?.carbohydrateContent,
          proteinContent: product.nutrition?.proteinContent,
          fatContent: product.nutrition?.fatContent,
          fiberContent: product.nutrition?.fiberContent,
          sodiumContent: product.nutrition?.sodiumContent,
          sugarContent: product.nutrition?.sugarContent,
          ...(product.nutrition?.allergens && {
            allergens: product.nutrition.allergens.join(', '),
          }),
          ...(product.nutrition?.dietaryRestrictions && {
            dietaryRestrictions: product.nutrition.dietaryRestrictions.join(', '),
          }),
          ...(product.nutrition?.micronutrients && {
            ...product.nutrition.micronutrients,
          }),
          servingSize: product.nutrition?.servingSize,
          cookingMethod: product.nutrition?.cookingMethod,
          preservatives: product.nutrition?.preservatives,
          ...(product.nutrition?.additives && {
            additives: product.nutrition.additives.join(', '),
          }),
          caffeineContent: product.nutrition?.caffeineContent,
          mineralContent: product.nutrition?.mineralContent,
          pH: product.nutrition?.pH,
          calciumContent: product.nutrition?.calciumContent,
        },
      })}
    </script>
  );
}
