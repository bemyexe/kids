import {type ComponentProps, useId} from 'react';
import clsx from 'clsx';

import './style.scss';

interface Props extends ComponentProps<'input'> {
  type?: string;
  label: string;
  placeholder?: string;
  className?: string;
}

export const Input = ({
  type = 'text',
  placeholder = ' ',
  label,
  className,
  ...props
}: Props) => {
  const id = useId();
  return (
    <div className={clsx('input-container', className)}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...props}
        className="input-container__input"
      />
    </div>
  );
};
