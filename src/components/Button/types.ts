import type { DefaultComponent } from '@/@types';

export type ButtonUse = `primary` | `secondary` | `destructive`;
export type ButtonSize = `xs` | `sm` | `md`;
export type ButtonType = `button` | `submit`;

export type ButtonProps = DefaultComponent & {
  size?: ButtonSize;
  type?: ButtonType;
  use?: ButtonUse;
  arrowLeft?: boolean;
  arrowRight?: boolean;
};
