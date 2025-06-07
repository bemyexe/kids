import {useId} from 'react';
import {useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router';

import ExclamationMarkIcon from '../../../assets/exclamation-mark.svg?react';
import RightIcon from '../../../assets/right-arrow.svg?react';
import {useAppDispatch} from '../../../shared/model/store/store';
import {uploadSelectors} from '../../../shared/model/store/upload/upload.selectors';
import {uploadImages} from '../../../shared/model/store/upload/upload.thunk';
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
    handleSubmit,
    formState: {isValid},
  } = useForm<FormData>({
    mode: 'onChange',
  });
  const id = useId();
  const houseTreePerson = watch('houseTreePerson');
  const nonexistentAnimal = watch('nonexistentAnimal');
  const selfPortrait = watch('selfPortrait');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loading = useSelector(uploadSelectors.selectUploadLoading);
  const error = useSelector(uploadSelectors.selectUploadError);

  const handleSubmitForm = async (data: FormData) => {
    const formData = new FormData();

    if (data.houseTreePerson?.[0]) {
      formData.append('files', data.houseTreePerson[0]);
    }
    if (data.nonexistentAnimal?.[0]) {
      formData.append('files', data.nonexistentAnimal[0]);
    }
    if (data.selfPortrait?.[0]) {
      formData.append('files', data.selfPortrait[0]);
    }

    try {
      const result = await dispatch(uploadImages(formData)).unwrap();

      if (result) {
        navigate('/questions');
      }
    } catch (error) {
      console.error('Ошибка при загрузке:', error);
    }
  };

  return (
    <main className="upload-page">
      <div className="upload-page__top">
        <Typography tag="h3" size="20" weight="bold">
          Загрузите фотографии рисунков
        </Typography>
        <Chip
          variant="warning"
          label={CHIP_LABEL}
          leftIcon={<ExclamationMarkIcon />}
        />
      </div>

      <form
        id={id}
        className="upload-page__content"
        onSubmit={handleSubmit(handleSubmitForm)}>
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
      </form>

      {error && (
        <Typography className="upload-page__error" size="20">
          {error}
        </Typography>
      )}

      <div className="upload-page__bottom">
        <Typography
          className="upload-page__bottom-text"
          size="14"
          weight="bold">
          Шаг 1/3
        </Typography>
        <Button
          form={id}
          rightIcon={<RightIcon stroke={isValid ? 'white' : '#44537180'} />}
          type="submit"
          disabled={!isValid}>
          {loading ? 'Отправка...' : 'Далее'}
        </Button>
      </div>
    </main>
  );
};
