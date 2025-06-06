import { type ComponentProps, useId } from 'react';
import clsx from 'clsx';

import Download from '../../../assets/download.svg?react';
import { Typography } from '../typography';

import './style.scss';

interface Props extends ComponentProps<'input'> {
  label: string;
  className?: string;
}

export const Upload = ({ label, className }: Props) => {
  const id = useId();

  return (
    <div className={clsx('upload', className)}>
      <label className="upload__label" htmlFor={id}>
        <div className="upload__label-icon-wrapper">
          <Download stroke="#293244" />
        </div>
      </label>
      <input id={id} type="file" hidden />
      <Typography>{label}</Typography>
    </div>
  );
};
