import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const AsideLayout = (props: Props) => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-8 lg:gap-6">
      {props.children}
    </div>
  );
};
