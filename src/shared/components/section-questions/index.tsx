import type {ReactNode} from 'react';
import clsx from 'clsx';

import {Typography} from '../../ui/typography';

import './style.scss';

interface Props {
  title: string;
  className?: string;
  children: ReactNode;
}

export const SectionQuestions = ({title, className, children}: Props) => {
  return (
    <section className={clsx('section-questions', className)}>
      <Typography tag="h3" size="20" weight="bold">
        {title}
      </Typography>
      {children}
    </section>
  );
};
