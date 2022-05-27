import { Button } from '../Button';

type Props = {
  subTitle: string;
  title: string;
};

export const PromoBanner = (props: Props) => {
  const { subTitle, title } = props;

  return (
    <div className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 p-3">
      <h5>{subTitle}</h5>
      <h3>{title}</h3>
      <Button className="mt-12" use="secondary" arrowRight>
        Read recepies
      </Button>
    </div>
  );
};
