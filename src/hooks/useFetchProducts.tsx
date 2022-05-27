import { useQuery } from 'react-query';

import { api } from '@/api';

export const useFetchProducts = () => {
  const query = useQuery('products', api.fetchProducts);

  return query;
};
