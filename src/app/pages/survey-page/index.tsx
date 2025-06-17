import DatePicker from 'react-datepicker';
import {useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router';
import clsx from 'clsx';

import {Pagination} from '../../../shared/components/pagination';
import {RadioButtonGroup} from '../../../shared/components/radio-button-group';
import {SectionQuestions} from '../../../shared/components/section-questions';
import {paginationSelectors} from '../../../shared/model/store/pagination/pagination.selectors';
import {prevPage} from '../../../shared/model/store/pagination/pagination.slice';
import {useAppDispatch} from '../../../shared/model/store/store';
import {Input} from '../../../shared/ui/input';
import {TextArea} from '../../../shared/ui/textarea';
import {Typography} from '../../../shared/ui/typography';
import {RadioGroupController} from '../../../shared/view-model/radio-group-controller';

import './style.scss';
import 'react-datepicker/dist/react-datepicker.css';

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

export interface FormValues {
  childName: string;
  childDOB: string;
  childGender: string;
  parentName: string;
}

export const SurveyPage = ({className}: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: {isValid, isSubmitting},
  } = useForm<FormValues>({
    mode: 'onChange',
  });
  const page = useSelector(paginationSelectors.selectPaginationPage);
  const totalPages = useSelector(paginationSelectors.selectPaginationTotal);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClickPrevButton = () => {
    dispatch(prevPage());
    navigate('/upload');
  };
  const onSubmit = (data: FormValues) => {
    console.log('Form data:', data);
  };
  return (
    <main className={clsx('questions-page', className)}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="questions-page__content">
        <div className="questions-page__content-top">
          <Typography
            className="questions-page__content-top-title"
            tag="h3"
            size="20"
            weight="bold">
            Общая информация о ребенке
          </Typography>
          <Input
            label="Имя ребенка"
            {...register('childName', {required: true})}
          />
          <RadioGroupController
            name="childDOB"
            control={control}
            rules={{required: true}}>
            {({value, onChange}) => (
              <>
                <Typography tag="p" size="16" weight="regular">
                  Дата рождения ребенка
                </Typography>
                <DatePicker
                  selected={value}
                  onChange={onChange}
                  dateFormat="dd.MM.yyyy"
                />
              </>
            )}
          </RadioGroupController>
          <RadioGroupController
            name="childGender"
            control={control}
            rules={{required: true}}>
            {({value, onChange}) => (
              <RadioButtonGroup
                legend="Пол ребенка"
                options={GENDER_OPTIONS}
                name="childGender"
                value={value}
                onChange={onChange}
              />
            )}
          </RadioGroupController>
          <Input
            label="Имя родителя, заполняющего анкету"
            {...register('parentName', {required: true})}
          />
        </div>

        <SectionQuestions title="Раздел 1. Эмоциональная сфера">
          <RadioGroupController
            name="q1_1"
            control={control}
            rules={{required: true}}>
            {({value, onChange}) => (
              <RadioButtonGroup
                legend="Ребенок часто выражает радость:"
                options={FREQUENCY_OPTIONS}
                name="Ребенок часто выражает радость:"
                value={value}
                onChange={onChange}
              />
            )}
          </RadioGroupController>
          <RadioGroupController
            name="q1_2"
            control={control}
            rules={{required: true}}>
            {({value, onChange}) => (
              <RadioButtonGroup
                legend="Ребенок часто выражает удовольствие:"
                options={FREQUENCY_OPTIONS}
                name="Ребенок часто выражает удовольствие:"
                value={value}
                onChange={onChange}
              />
            )}
          </RadioGroupController>
          <RadioGroupController
            name="q1_3"
            control={control}
            rules={{required: true}}>
            {({value, onChange}) => (
              <RadioButtonGroup
                legend="Ребенок часто грустит без видимой причины:"
                options={FREQUENCY_OPTIONS}
                name="Ребенок часто грустит без видимой причины:"
                value={value}
                onChange={onChange}
              />
            )}
          </RadioGroupController>
          <RadioGroupController
            name="q1_4"
            control={control}
            rules={{required: true}}>
            {({value, onChange}) => (
              <RadioButtonGroup
                legend="Ребенок часто плачет без видимой причины:"
                options={FREQUENCY_OPTIONS}
                name="Ребенок часто плачет без видимой причины:"
                value={value}
                onChange={onChange}
              />
            )}
          </RadioGroupController>
        </SectionQuestions>

        <SectionQuestions title="Раздел 2. Социальное взаимодействие">
          <RadioGroupController
            name="q1_5"
            control={control}
            rules={{required: true}}>
            {({value, onChange}) => (
              <RadioButtonGroup
                legend="Ребенок легко заводит друзей:"
                options={FREQUENCY_OPTIONS}
                name="Ребенок легко заводит друзей:"
                value={value}
                onChange={onChange}
              />
            )}
          </RadioGroupController>
          <RadioGroupController
            name="q1_6"
            control={control}
            rules={{required: true}}>
            {({value, onChange}) => (
              <RadioButtonGroup
                legend="Ребенок тяжело заводит друзей:"
                options={FREQUENCY_OPTIONS}
                name="Ребенок тяжело заводит друзей:"
                value={value}
                onChange={onChange}
              />
            )}
          </RadioGroupController>
          <RadioGroupController
            name="Ребенок предпочитает играть один, а не с другими детьми:"
            control={control}
            rules={{required: true}}>
            {({value, onChange}) => (
              <RadioButtonGroup
                legend="Ребенок предпочитает играть один, а не с другими детьми:"
                options={FREQUENCY_OPTIONS}
                name="Ребенок предпочитает играть один, а не с другими детьми:"
                value={value}
                onChange={onChange}
              />
            )}
          </RadioGroupController>
          <RadioGroupController
            name="Ребенок предпочитает играть с другими детьми:"
            control={control}
            rules={{required: true}}>
            {({value, onChange}) => (
              <RadioButtonGroup
                legend="Ребенок предпочитает играть с другими детьми:"
                options={FREQUENCY_OPTIONS}
                name="Ребенок предпочитает играть с другими детьми:"
                value={value}
                onChange={onChange}
              />
            )}
          </RadioGroupController>
        </SectionQuestions>

        <SectionQuestions title="Раздел 3. Саморегуляция и поведение">
          <RadioGroupController
            name="Ребенок умеет следовать правилам:"
            control={control}
            rules={{required: true}}>
            {({value, onChange}) => (
              <RadioButtonGroup
                legend="Ребенок умеет следовать правилам:"
                options={FREQUENCY_OPTIONS}
                name="Ребенок умеет следовать правилам:"
                value={value}
                onChange={onChange}
              />
            )}
          </RadioGroupController>
          <RadioGroupController
            name="Ребенок умеет следовать инструкциям:"
            control={control}
            rules={{required: true}}>
            {({value, onChange}) => (
              <RadioButtonGroup
                legend="Ребенок умеет следовать инструкциям:"
                options={FREQUENCY_OPTIONS}
                name="Ребенок умеет следовать инструкциям:"
                value={value}
                onChange={onChange}
              />
            )}
          </RadioGroupController>
          <RadioGroupController
            name="Ребенку трудно контролировать свои импульсы:"
            control={control}
            rules={{required: true}}>
            {({value, onChange}) => (
              <RadioButtonGroup
                legend="Ребенку трудно контролировать свои импульсы:"
                options={FREQUENCY_OPTIONS}
                name="Ребенку трудно контролировать свои импульсы:"
                value={value}
                onChange={onChange}
              />
            )}
          </RadioGroupController>
          <RadioGroupController
            name="Ребенку легко контролировать свои импульсы:"
            control={control}
            rules={{required: true}}>
            {({value, onChange}) => (
              <RadioButtonGroup
                legend="Ребенку легко контролировать свои импульсы:"
                options={FREQUENCY_OPTIONS}
                name="Ребенку легко контролировать свои импульсы:"
                value={value}
                onChange={onChange}
              />
            )}
          </RadioGroupController>
        </SectionQuestions>

        <SectionQuestions title="Раздел 4. Самооценка и уверенность в себе">
          <RadioGroupController
            name="Ребенок уверен в своих силах:"
            control={control}
            rules={{required: true}}>
            {({value, onChange}) => (
              <RadioButtonGroup
                legend="Ребенок уверен в своих силах:"
                options={FREQUENCY_OPTIONS}
                name="Ребенок уверен в своих силах:"
                value={value}
                onChange={onChange}
              />
            )}
          </RadioGroupController>
          <RadioGroupController
            name="Ребенок уверен в своих способностях:"
            control={control}
            rules={{required: true}}>
            {({value, onChange}) => (
              <RadioButtonGroup
                legend="Ребенок уверен в своих способностях:"
                options={FREQUENCY_OPTIONS}
                name="Ребенок уверен в своих способностях:"
                value={value}
                onChange={onChange}
              />
            )}
          </RadioGroupController>
          <RadioGroupController
            name="Ребенок часто сомневается в себе:"
            control={control}
            rules={{required: true}}>
            {({value, onChange}) => (
              <RadioButtonGroup
                legend="Ребенок часто сомневается в себе:"
                options={FREQUENCY_OPTIONS}
                name="Ребенок часто сомневается в себе:"
                value={value}
                onChange={onChange}
              />
            )}
          </RadioGroupController>
          <RadioGroupController
            name="Ребенок редко сомневается в себе:"
            control={control}
            rules={{required: true}}>
            {({value, onChange}) => (
              <RadioButtonGroup
                legend="Ребенок редко сомневается в себе:"
                options={FREQUENCY_OPTIONS}
                name="Ребенок редко сомневается в себе:"
                value={value}
                onChange={onChange}
              />
            )}
          </RadioGroupController>
        </SectionQuestions>

        <SectionQuestions title="Раздел 5. Общие вопросы">
          <RadioGroupController
            name="Как Вы оцениваете общее эмоциональное состояние вашего ребенка?"
            control={control}
            rules={{required: true}}>
            {({value, onChange}) => (
              <RadioButtonGroup
                legend="Как Вы оцениваете общее эмоциональное состояние вашего ребенка?"
                options={EVALUATION_OPTIONS}
                name="Как Вы оцениваете общее эмоциональное состояние вашего ребенка?"
                value={value}
                onChange={onChange}
              />
            )}
          </RadioGroupController>

          <TextArea label="Есть ли у Вашего ребенка какие-либо особенности развития или поведения, о которых Вы хотели бы сообщить дополнительно?" />
          <TextArea label="Какие, на Ваш взгляд, сильные стороны и таланты есть у Вашего ребенка?" />
          <TextArea label="Какие, на Ваш взгляд, области требуют особого внимания и развития у Вашего ребенка?" />
          <TextArea label="Обращались ли Вы ранее к специалистам (психологу, неврологу, логопеду) по поводу развития или поведения Вашего ребенка?" />
        </SectionQuestions>
        <Pagination
          textPrevButton="К загрузке рисунков"
          textNextButton={'Узнать результаты'}
          currentPage={page}
          totalPages={totalPages}
          onClickPrevButton={handleClickPrevButton}
          isDisabled={!isValid || isSubmitting}
        />
      </form>
    </main>
  );
};
