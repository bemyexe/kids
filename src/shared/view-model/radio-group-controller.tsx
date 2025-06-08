/* eslint-disable @typescript-eslint/no-explicit-any */
import type {JSX} from 'react';
import {useController} from 'react-hook-form';

interface Props {
  name: string;
  control: any;
  children: (props: any) => JSX.Element;
  rules: any;
}

export const RadioGroupController = ({
  name,
  control,
  children,
  rules,
}: Props) => {
  const {field} = useController({
    name,
    control,
    rules,
  });

  return children({
    value: field.value,
    onChange: field.onChange,
  });
};
