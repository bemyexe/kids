import type { ComponentProps, ReactNode } from 'react';
import clsx from 'clsx';

import './style.scss';

interface Props extends ComponentProps<'button'> {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  letfIcon?: ReactNode;
  rightIcon?: ReactNode;
  routeBack?: boolean;
  className?: string;
  children: ReactNode;
}

export const Button = ({
  type,
  letfIcon,
  rightIcon,
  routeBack,
  onClick,
  className,
  children,
  ...props
}: Props) => {
  return (
    <button
      className={clsx('button', { routeBack: routeBack }, className)}
      type={type}
      onClick={onClick}
      {...props}
    >
      {letfIcon}
      {children}
      {rightIcon}
    </button>
  );
};
