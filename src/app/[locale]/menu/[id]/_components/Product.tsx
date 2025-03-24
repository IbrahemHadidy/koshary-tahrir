import type { MenuItem } from '@data/menu';
import Actions from './Actions';
import Details from './Details';
import Gallery from './Gallery';

interface ProductProps {
  product: MenuItem;
}

export default function Product({ product }: ProductProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid animate-[fadeIn_0.5s_ease-out] grid-cols-1 gap-12 lg:grid-cols-2">
        <Gallery images={product.images} />

        <div className="space-y-8">
          <Details
            name={product.name}
            description={product.description}
            price={product.price}
            details={product.details}
          />
          <Actions product={product} />
        </div>
      </div>
    </div>
  );
}
