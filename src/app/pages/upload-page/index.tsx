import {useForm} from 'react-hook-form';

import ExclamationMarkIcon from '../../../assets/exclamation-mark.svg?react';
import RightIcon from '../../../assets/right-arrow.svg?react';
import {Button} from '../../../shared/ui/button';
import {Chip} from '../../../shared/ui/chip';
import {Typography} from '../../../shared/ui/typography';
import {Upload} from '../../../shared/ui/upload';

import './style.scss';

const CHIP_LABEL =
  'Допустимые форматы файлов: jpg, jpeg, png, pdf. Размер не более 5 Мб';

type FormData = {
  houseTreePerson: FileList;
  nonexistentAnimal: FileList;
  selfPortrait: FileList;
};

export const UploadPage = () => {
  const {
    register,
    watch,
    formState: {isValid},
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const houseTreePerson = watch('houseTreePerson');
  const nonexistentAnimal = watch('nonexistentAnimal');
  const selfPortrait = watch('selfPortrait');

  return (
    <main className="upload-page">
      <div className="upload-page__top">
        <Typography tag="h3" size="20">
          Загрузите фотографии рисунков
        </Typography>
        <Chip
          variant="warning"
          label={CHIP_LABEL}
          leftIcon={<ExclamationMarkIcon />}
        />
      </div>

      <section className="upload-page__content">
        <Upload
          label={'Дом, дерево, человек'}
          {...register('houseTreePerson', {required: true})}
          file={houseTreePerson?.[0]}
        />
        <Upload
          label={'Несуществующее животное'}
          {...register('nonexistentAnimal', {required: true})}
          file={nonexistentAnimal?.[0]}
        />
        <Upload
          label={'Автопортрет'}
          {...register('selfPortrait', {required: true})}
          file={selfPortrait?.[0]}
        />
      </section>

      <div className="upload-page__bottom">
        <Typography
          className="upload-page__bottom-text"
          size="14"
          weight="bold">
          Шаг 1/3
        </Typography>
        <Button
          rightIcon={<RightIcon stroke={isValid ? 'white' : '#44537180'} />}
          disabled={!isValid}>
          Далее
        </Button>
      </div>
    </main>
  );
};
