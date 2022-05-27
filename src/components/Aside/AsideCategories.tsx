import { Button } from '../Button';

type Props = {
  title: string;
  options: string[];
  actionButtonText: string;
};

export const AsideCategories = (props: Props) => {
  const { title, options, actionButtonText } = props;
  return (
    <>
      <h3 className="mb-2 font-semibold text-secondary-700">{title}</h3>
      <ul>
        {options.map((option: string) => (
          <li key={option}>
            <span className="text-sm font-normal text-primary-500 underline underline-offset-1">
              {option}
            </span>
          </li>
        ))}
      </ul>
      <Button className="mt-7" use="destructive" size="md" arrowRight>
        {actionButtonText}
      </Button>
    </>
  );
};
