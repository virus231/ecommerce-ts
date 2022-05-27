import type { IProduct } from '@/@types/IProduct';

import { Button } from '../Button';

type Props = {
  product: IProduct;
};

export const ProductCard = (props: Props) => {
  const { product } = props;
  return (
    <a href="" className="block rounded-lg border border-gray-300 p-4">
      <img
        alt="123 Wallaby Avenue, Park Road"
        src={product.image}
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Title</dt>

            <dd className="font-medium">{product.title}</dd>
          </div>

          <div>
            <dt className="sr-only">Description</dt>

            <dd className="text-sm text-gray-500">{product.description}</dd>
          </div>
        </dl>

        <dl className="mt-6 flex items-center space-x-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center">
            <div className="mt-1.5 sm:ml-3 sm:mt-0">
              <dt className="sr-only text-gray-500">Price</dt>

              <dd className="font-medium">${product.amount}</dd>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center">
            <div className="mt-1.5 sm:ml-3 sm:mt-0">
              <Button className="pr-0" use="primary" size="xs">
                Buy now
              </Button>
            </div>
          </div>
        </dl>
      </div>
    </a>
  );
};
