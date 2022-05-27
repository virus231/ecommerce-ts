import type { ReactElement } from 'react';

import type { DefaultComponent } from '@/@types';

export type OptionValue = number | string;

export type InputType =
  | `number`
  | `text`
  | `email`
  | `password`
  | `tel`
  | `search`;

export type InputProps = DefaultComponent & {
  id: string;
  type: InputType;
  label?: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  placeholder?: string;
  value: OptionValue;
  onChange: (value: string) => void;
  select?: boolean;
};
