import type { ReactElement } from 'react';

import { classNames, getArrowButton, NoopFn } from '@/utils/common';

import type { ButtonProps, ButtonSize, ButtonUse } from './types';

const BUTTON_SIZE: { [key in ButtonSize]: string } = {
  md: `text-sm px-12 py-4`,
  sm: `text-sm px-4 py-3`,
  xs: `text-sm px-3 py-1.5`,
};

const BUTTON_COLOR: { [key in ButtonUse]: string } = {
  primary: `text-white bg-primary-500 border-primary-400 border-2`,
  secondary: `text-sky-900 border-primary-400 border-2`,
  destructive: `text-black bg-secondary-200`,
};

export const Button = (props: ButtonProps): ReactElement => {
  const {
    className = ``,
    children,
    use = `primary`,
    size = `xs`,
    type = `button`,
    onClick = NoopFn,
    arrowLeft = false,
    arrowRight = false,
  } = props;
  return (
    <button
      {...{ onClick, type }}
      className={classNames(
        `rounded-xl inline-flex items-center font-bold shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 justify-center`,
        BUTTON_SIZE[size],
        BUTTON_COLOR[use],
        className
      )}
    >
      {arrowLeft && getArrowButton(use, 'left')}
      {children}
      <span className="pl-3">{arrowRight && getArrowButton(use, 'right')}</span>
    </button>
  );
};
