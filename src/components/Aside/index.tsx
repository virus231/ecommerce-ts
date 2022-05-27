import { PromoBanner } from '../Banner';
import { AsideCategories } from './AsideCategories';

export const categories = [
  'Bakery',
  'Fruit and vegetables',
  'Meat and fish',
  'Drinks',
  'Kitchen',
];

export const AsideWithPromo = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-8 lg:gap-6">
      <div className="col-span-2 rounded-lg">
        <AsideCategories
          title="Category menu"
          options={categories}
          actionButtonText={'Hello'}
        />
      </div>
      <div className="col-span-3 rounded-lg font-bold ">
        <PromoBanner subTitle={'sub title'} title={'title'} />
      </div>
      <div className="col-span-3 rounded-lg font-bold ">
        <PromoBanner subTitle={'sub title'} title={'title'} />
      </div>
    </div>
  );
};
