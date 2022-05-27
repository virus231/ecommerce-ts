import type { ChangeEvent } from 'react';

import type { InputProps } from '@/components/Input/types';

export const Input = (props: InputProps) => {
  const {
    id = '',
    type = '',
    label,
    placeholder,
    value,
    onChange,
    rightIcon,
    leftIcon,
    select = false,
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex items-center justify-end">
      <div className="relative">
        {select && (
          <div className="absolute inset-y-0 left-0 flex items-center divide-x">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option>All categories</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
          </div>
        )}
        {label && <label htmlFor={type}> Email </label>}
        {leftIcon && (
          <span className="pointer-events-none absolute bottom-2 left-4 text-gray-500">
            {leftIcon}
          </span>
        )}
        <input
          className={`border-1 w-full rounded-xl border-secondary-400 bg-secondary-100 py-1.5 ${
            leftIcon || select ? 'pl-12' : 'pl-3'
          } pr-12 text-sm w-96`}
          id={id}
          type={type}
          value={value}
          onChange={onChangeHandler}
          placeholder={placeholder}
        />

        {rightIcon && (
          <span className="pointer-events-none absolute bottom-2 right-4  text-gray-500">
            {rightIcon}
          </span>
        )}
      </div>
    </div>
  );
};
