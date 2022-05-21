// import { useRouter } from 'next/router';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h1 className="text-primary-700">Hello</h1>
      <h1 className="text-primary-600">Hello</h1>
      <h1 className="text-primary-500">Hello</h1>
      <h1 className="text-primary-400">Hello</h1>
    </Main>
  );
};

export default Index;
