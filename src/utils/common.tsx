export const NoopFn = (): void => {};

export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(` `);
};

export const getArrowButton = (use: string, place: string) => {
  const color =
    // eslint-disable-next-line no-nested-ternary
    use === 'secondary' ? '#46760A' : use === 'destructive' ? 'black' : 'white';

  return (
    <>
      {place === 'left' ? (
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.46658 1.81332L1.72658 4.55332C1.60241 4.67823 1.53271 4.84719 1.53271 5.02332C1.53271 5.19944 1.60241 5.36841 1.72658 5.49332L4.39324 8.15998"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="bevel"
          />
        </svg>
      ) : (
        <svg
          width="6"
          height="9"
          viewBox="0 0 6 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5332 7.68669L4.2732 4.94669C4.39737 4.82178 4.46706 4.65281 4.46706 4.47669C4.46706 4.30056 4.39737 4.13159 4.2732 4.00669L1.60654 1.34002"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="bevel"
          />
        </svg>
      )}
    </>
  );
};
