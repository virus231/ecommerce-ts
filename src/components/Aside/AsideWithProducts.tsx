import { useEffect } from 'react';

import { AsideCategories } from '@/components/Aside/AsideCategories';
import { useFetchProducts } from '@/hooks/useFetchProducts';
import { Products } from '@/Products';

import { categories } from '.';

export const AsideWithProducts = () => {
  const { data: products, isLoading, isError, isSuccess } = useFetchProducts();

  // const [products, setProducts] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="my-20 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
      <div className="col-span-1">
        <AsideCategories
          title="Category menu"
          options={categories}
          actionButtonText={'Hello'}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 lg:col-span-3 lg:grid-cols-3">
        {isLoading && 'Loading....'}
        {isError && 'Error....'}
        {isSuccess && !isError && <Products products={products} />}
      </div>
    </div>
  );
};
