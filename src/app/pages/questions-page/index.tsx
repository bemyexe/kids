import {useState} from 'react';
import clsx from 'clsx';

import {RadioButtonGroup} from '../../../shared/components/radio-button-group';
import {Input} from '../../../shared/ui/input';
import {Typography} from '../../../shared/ui/typography';

import './style.scss';

interface Props {
  className?: string;
}

const GENDER_OPTIONS = [
  {value: 'male', label: 'Мужской'},
  {value: 'female', label: 'Женский'},
];

const FREQUENCY_OPTIONS = [
  {value: '1', label: 'Очень редко'},
  {value: '2', label: 'Редко'},
  {value: '3', label: 'Иногда'},
  {value: '4', label: 'Часто'},
  {value: '5', label: 'Всегда'},
];

export const QuestionsPage = ({className}: Props) => {
  const [gender, setGender] = useState<string>('');
  const [frequency, setFrequency] = useState<string>('');

  return (
    <main className={clsx('questions-page', className)}>
      <Typography tag="h3" size="20" weight="bold">
        Общая информация о ребенке
      </Typography>

      <Input label="Имя ребенка" />
      <Input label="Дата рождения ребенка" />
      <RadioButtonGroup
        legend="Пол ребенка"
        options={GENDER_OPTIONS}
        name="gender"
        value={gender}
        onChange={setGender}
      />
      <RadioButtonGroup
        legend="Ребенок часто выражает радость и удовольствие:"
        options={FREQUENCY_OPTIONS}
        name="Ребенок часто выражает радость и удовольствие:"
        value={frequency}
        onChange={setFrequency}
      />
      <Input label="Имя родителя, заполняющего анкету" />
    </main>
  );
};
