import {type ComponentProps, useEffect, useId, useState} from 'react';
import clsx from 'clsx';

import Download from '../../../assets/download.svg?react';
import Refresh from '../../../assets/refresh.svg?react';
import {Typography} from '../typography';

import './style.scss';

const MAX_FILE_SIZE = 5 * 1024 * 1024;

interface Props extends ComponentProps<'input'> {
  label: string;
  file?: File;
  className?: string;
}

export const Upload = ({label, file, className, ...props}: Props) => {
  const id = useId();
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    setPreview(null);

    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        alert('Файл слишком большой. Максимальный размер: 5 МБ');
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target?.result as string);
      reader.readAsDataURL(file);

      return () => {
        reader.abort();
      };
    }
  }, [file]);

  return (
    <div className={clsx('upload-container', className)}>
      <div className="input-container">
        {preview && (
          <img className="input-container__image" src={preview} alt="preview" />
        )}
        <label htmlFor={id}>
          <div className="input-container__wrapper">
            {file ? (
              <Refresh
                className="input-container__wrapper-icon--refresh"
                stroke="#293244"
              />
            ) : (
              <Download
                className="input-container__wrapper-icon--download"
                stroke="#293244"
              />
            )}
          </div>
          <input
            id={id}
            type="file"
            hidden
            accept="image/jpeg,image/png,image/jpg,application/pdf"
            {...props}
          />
        </label>
      </div>
      <Typography>{label}</Typography>
    </div>
  );
};
