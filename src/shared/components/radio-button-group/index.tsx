import clsx from 'clsx';

import {RadioButton} from '../../ui/radio-button';

import './style.scss';

interface Options {
  value: string;
  label: string;
}

interface Props {
  options: Options[];
  legend?: string;
  className?: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
}

export const RadioButtonGroup = ({
  options,
  legend,
  name,
  value,
  onChange,
  className,
}: Props) => {
  return (
    <div className={clsx('radio-button-group', className)}>
      {legend && <legend>{legend}</legend>}
      <div className="radio-button-group__options">
        {options?.map((option) => (
          <RadioButton
            key={option.value}
            name={name}
            label={option.label}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange?.(option.value)}
          />
        ))}
      </div>
    </div>
  );
};
