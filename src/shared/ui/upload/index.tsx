import {type ComponentProps, useId} from 'react';
import clsx from 'clsx';

import Download from '../../../assets/download.svg?react';
import {Typography} from '../typography';

import './style.scss';

interface Props extends ComponentProps<'input'> {
  label: string;
  className?: string;
}

export const Upload = ({label, className}: Props) => {
  const id = useId();

  return (
    <div className={clsx('upload-container', className)}>
      <div className="upload-container__wrapper">
        <label htmlFor={id}>
          <div className="upload-container__wrapper-icon">
            <Download stroke="#293244" />
          </div>
          <input id={id} type="file" hidden />
        </label>
      </div>
      <Typography>{label}</Typography>
    </div>
  );
};
