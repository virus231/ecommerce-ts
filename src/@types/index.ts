export type NoopType = () => void;

export type DefaultComponent = {
  children?: React.ReactNode;
  className?: string;
  onClick?: NoopType;
};
