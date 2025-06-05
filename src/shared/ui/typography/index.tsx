import type { ComponentProps, ReactNode } from 'react';
import clsx from 'clsx';

import './style.scss';

type Size = '12' | '14' | '16' | '20';

type Weight = 'regular' | 'bold';

type TypographyTag = 'h3' | 'p' | 'div';

type TypographyProps<Tag extends TypographyTag> = ComponentProps<Tag> & {
  size?: Size;
  weight?: Weight;
  tag?: TypographyTag;
  children: ReactNode;
};

export const Typography = <Tag extends TypographyTag = 'p'>({
  size = '16',
  weight = 'regular',
  tag,
  children,
  className,
  ...props
}: TypographyProps<Tag>) => {
  const Component = tag ?? 'p';

  return (
    <Component
      className={clsx('typography', `size-${size}`, weight, className)}
      {...props}
    >
      {children}
    </Component>
  );
};
