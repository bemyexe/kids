import { type InputHTMLAttributes, useId } from 'react';
import clsx from 'clsx';

import './style.scss';

type LabelSize = '12' | '14';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  labelSize?: LabelSize;
  label: string;
  className?: string;
}

export const RadioButton = ({
  name,
  label,
  labelSize = '12',
  className,
  ...props
}: Props) => {
  const id = useId();
  return (
    <div className={clsx('radio-button', className)}>
      <input name={name} id={id} type="radio" {...props} />
      <label
        htmlFor={id}
        className={clsx('radio-button__label', `labelSize-${labelSize}`)}
      >
        {label}
      </label>
    </div>
  );
};
