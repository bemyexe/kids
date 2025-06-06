import ExclamationMarkIcon from '../../../assets/exclamation-mark.svg?react';
import RightIcon from '../../../assets/right-arrow.svg?react';
import { Button } from '../../../shared/ui/button';
import { Chip } from '../../../shared/ui/chip';
import { Typography } from '../../../shared/ui/typography';

import './style.scss';

export const UploadPage = () => {
  return (
    <div className="upload-page">
      <Typography tag="h3" size="20">
        Загрузите фотографии рисунков
      </Typography>
      <label>
        Дом, дерево, человек
        <input type="file" />
      </label>
      <label>
        Несуществующее животное
        <input type="file" />
      </label>
      <label>
        Автопортрет
        <input type="file" />
      </label>
      <Typography size="14" weight="bold">
        Шаг 1/3
      </Typography>
      <Button rightIcon={<RightIcon stroke="red" />}>Далее</Button>
      <Chip
        variant="warning"
        label="Нужно загрузить хотя бы 3 фотографии"
        leftIcon={<ExclamationMarkIcon />}
      />
    </div>
  );
};
