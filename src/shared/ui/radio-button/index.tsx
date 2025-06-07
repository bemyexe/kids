import {type ChangeEvent, type ComponentProps, useId} from 'react';
import clsx from 'clsx';

import './style.scss';

type LabelSize = '12' | '14';

interface Props extends ComponentProps<'input'> {
  name: string;
  labelSize?: LabelSize;
  label: string;
  value?: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const RadioButton = ({
  name,
  label,
  value,
  checked,
  onChange,
  labelSize = '12',
  className,
  ...props
}: Props) => {
  const id = useId();
  return (
    <div className={clsx('radio-button', className)}>
      <input
        name={name}
        id={id}
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <label
        htmlFor={id}
        className={clsx('radio-button__label', `labelSize-${labelSize}`)}>
        {label}
      </label>
    </div>
  );
};
