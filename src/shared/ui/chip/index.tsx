import type { ComponentProps, ReactNode } from 'react';
import clsx from 'clsx';

import './style.scss';

type Variant = 'warning';

interface Props extends ComponentProps<'div'> {
  leftIcon?: ReactNode;
  label: string;
  variant: Variant;
  className?: string;
}

export const Chip = ({ leftIcon, label, variant, className }: Props) => {
  return (
    <div className={clsx('chip', variant, className)}>
      {leftIcon}
      {label}
    </div>
  );
};
