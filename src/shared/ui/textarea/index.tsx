import {type ComponentProps, useEffect, useId, useRef} from 'react';
import clsx from 'clsx';

import './style.scss';

interface Props extends ComponentProps<'textarea'> {
  label: string;
  placeholder?: string;
  className?: string;
}

export const TextArea = ({
  label,
  placeholder = ' ',
  className,
  ...props
}: Props) => {
  const id = useId();
  const ref = useRef<HTMLTextAreaElement>(null);

  const resize = () => {
    const el = ref.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight}px`;
    }
  };

  useEffect(() => {
    resize();
  }, []);

  return (
    <div className={clsx('textarea-container', className)}>
      <label htmlFor={id}>{label}</label>
      <textarea
        ref={ref}
        className="textarea-container__textarea"
        placeholder={placeholder}
        id={id}
        onInput={resize}
        {...props}
      />
    </div>
  );
};
