import {useState} from 'react';
import clsx from 'clsx';

import {RadioButtonGroup} from '../../../shared/components/radio-button-group';
import {SectionQuestions} from '../../../shared/components/section-questions';
import {Input} from '../../../shared/ui/input';
import {TextArea} from '../../../shared/ui/textarea';
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

const EVALUATION_OPTIONS = [
  {value: 'Отличное', label: 'Отличное'},
  {value: 'Хорошее', label: 'Хорошее'},
  {value: 'Удовлетворительное', label: 'Удовлетворительное'},
  {value: 'Неудовлетворительное', label: 'Неудовлетворительное'},
  {value: 'Очень плохое', label: 'Очень плохое'},
];

export const QuestionsPage = ({className}: Props) => {
  const [gender, setGender] = useState<string>('');
  const [frequency, setFrequency] = useState<string>('');

  return (
    <main className={clsx('questions-page', className)}>
      <div className="questions-page__content">
        <div className="questions-page__content-top">
          <Typography
            className="questions-page__content-top-title"
            tag="h3"
            size="20"
            weight="bold">
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
          <Input label="Имя родителя, заполняющего анкету" />
        </div>

        <SectionQuestions title="Раздел 1. Эмоциональная сфера">
          <RadioButtonGroup
            legend="Ребенок часто выражает радость:"
            options={FREQUENCY_OPTIONS}
            name="Ребенок часто выражает радость:"
            value={frequency}
            onChange={setFrequency}
          />
          <RadioButtonGroup
            legend="Ребенок часто выражает удовольствие:"
            options={FREQUENCY_OPTIONS}
            name="Ребенок часто выражает удовольствие:"
            value={frequency}
            onChange={setFrequency}
          />
          <RadioButtonGroup
            legend="Ребенок часто грустит без видимой причины:"
            options={FREQUENCY_OPTIONS}
            name="Ребенок часто грустит без видимой причины:"
            value={frequency}
            onChange={setFrequency}
          />
          <RadioButtonGroup
            legend="Ребенок часто плачет без видимой причины:"
            options={FREQUENCY_OPTIONS}
            name="Ребенок часто плачет без видимой причины:"
            value={frequency}
            onChange={setFrequency}
          />
        </SectionQuestions>

        <SectionQuestions title="Раздел 2. Социальное взаимодействие">
          <RadioButtonGroup
            legend="Ребенок легко заводит друзей:"
            options={FREQUENCY_OPTIONS}
            name="Ребенок легко заводит друзей:"
            value={frequency}
            onChange={setFrequency}
          />
          <RadioButtonGroup
            legend="Ребенок тяжело заводит друзей:"
            options={FREQUENCY_OPTIONS}
            name="Ребенок тяжело заводит друзей:"
            value={frequency}
            onChange={setFrequency}
          />
          <RadioButtonGroup
            legend="Ребенок предпочитает играть один, а не с другими детьми:"
            options={FREQUENCY_OPTIONS}
            name="Ребенок предпочитает играть один, а не с другими детьми:"
            value={frequency}
            onChange={setFrequency}
          />
          <RadioButtonGroup
            legend="Ребенок предпочитает играть с другими детьми:"
            options={FREQUENCY_OPTIONS}
            name="Ребенок предпочитает играть с другими детьми:"
            value={frequency}
            onChange={setFrequency}
          />
        </SectionQuestions>

        <SectionQuestions title="Раздел 3. Саморегуляция и поведение">
          <RadioButtonGroup
            legend="Ребенок умеет следовать правилам:"
            options={FREQUENCY_OPTIONS}
            name="Ребенок умеет следовать правилам:"
            value={frequency}
            onChange={setFrequency}
          />
          <RadioButtonGroup
            legend="Ребенок умеет следовать инструкциям:"
            options={FREQUENCY_OPTIONS}
            name="Ребенок умеет следовать инструкциям:"
            value={frequency}
            onChange={setFrequency}
          />
          <RadioButtonGroup
            legend="Ребенку трудно контролировать свои импульсы:"
            options={FREQUENCY_OPTIONS}
            name="Ребенку трудно контролировать свои импульсы:"
            value={frequency}
            onChange={setFrequency}
          />
          <RadioButtonGroup
            legend="Ребенку легко контролировать свои импульсы:"
            options={FREQUENCY_OPTIONS}
            name="Ребенку легко контролировать свои импульсы:"
            value={frequency}
            onChange={setFrequency}
          />
        </SectionQuestions>

        <SectionQuestions title="Раздел 4. Самооценка и уверенность в себе">
          <RadioButtonGroup
            legend="Ребенок уверен в своих силах:"
            options={FREQUENCY_OPTIONS}
            name="Ребенок уверен в своих силах:"
            value={frequency}
            onChange={setFrequency}
          />
          <RadioButtonGroup
            legend="Ребенок уверен в своих способностях:"
            options={FREQUENCY_OPTIONS}
            name="Ребенок уверен в своих способностях:"
            value={frequency}
            onChange={setFrequency}
          />
          <RadioButtonGroup
            legend="Ребенок часто сомневается в себе:"
            options={FREQUENCY_OPTIONS}
            name="Ребенок часто сомневается в себе:"
            value={frequency}
            onChange={setFrequency}
          />
          <RadioButtonGroup
            legend="Ребенок редко сомневается в себе:"
            options={FREQUENCY_OPTIONS}
            name="Ребенок редко сомневается в себе:"
            value={frequency}
            onChange={setFrequency}
          />
        </SectionQuestions>

        <SectionQuestions title="Раздел 5. Общие вопросы">
          <RadioButtonGroup
            legend="Как Вы оцениваете общее эмоциональное состояние вашего ребенка?"
            options={EVALUATION_OPTIONS}
            name="Как Вы оцениваете общее эмоциональное состояние вашего ребенка?"
            value={frequency}
            onChange={setFrequency}
          />
          <TextArea label="Есть ли у Вашего ребенка какие-либо особенности развития или поведения, о которых Вы хотели бы сообщить дополнительно?" />
          <TextArea label="Какие, на Ваш взгляд, сильные стороны и таланты есть у Вашего ребенка?" />
          <TextArea label="Какие, на Ваш взгляд, области требуют особого внимания и развития у Вашего ребенка?" />
          <TextArea label="Обращались ли Вы ранее к специалистам (психологу, неврологу, логопеду) по поводу развития или поведения Вашего ребенка?" />
        </SectionQuestions>
      </div>
    </main>
  );
};
