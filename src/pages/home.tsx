import { AsideWithPromo } from '@/components/Aside';
import { AsideWithProducts } from '@/components/Aside/AsideWithProducts';
import { Header } from '@/components/Header';
import { SubHeader } from '@/components/SubHeader';
import { Main } from '@/templates/Main';

const Home = () => {
  return (
    <Main>
      <Header />
      <SubHeader />
      <AsideWithPromo />
      <AsideWithProducts />
    </Main>
  );
};

export default Home;
