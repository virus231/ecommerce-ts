import type { IProduct } from '@/@types/IProduct';

import { ProductCard } from './components/Product/ProductCard';

type Props = {
  products: IProduct[];
};

export const Products = (props: Props) => {
  const { products } = props;

  console.log(products);

  return (
    <>
      {products.map((product: IProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};
