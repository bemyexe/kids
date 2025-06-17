import {useId} from 'react';
import {useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router';

import ExclamationMarkIcon from '../../../assets/exclamation-mark.svg?react';
import {Pagination} from '../../../shared/components/pagination';
import {paginationSelectors} from '../../../shared/model/store/pagination/pagination.selectors';
import {nextPage} from '../../../shared/model/store/pagination/pagination.slice';
import {useAppDispatch} from '../../../shared/model/store/store';
import {uploadSelectors} from '../../../shared/model/store/upload/upload.selectors';
import {uploadImages} from '../../../shared/model/store/upload/upload.thunk';
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
  const page = useSelector(paginationSelectors.selectPaginationPage);
  const totalPages = useSelector(paginationSelectors.selectPaginationTotal);
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
        dispatch(nextPage());
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
      <Pagination
        textNextButton="Далее"
        totalPages={totalPages}
        currentPage={page}
        formId={id}
        isDisabled={!isValid}
        loading={loading}
      />
    </main>
  );
};
