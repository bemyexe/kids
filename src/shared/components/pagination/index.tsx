import clsx from 'clsx';

import Export from '../../../assets/export.svg?react';
import LeftIcon from '../../../assets/left-arrow.svg?react';
import RightIcon from '../../../assets/right-arrow.svg?react';
import DoubleArrow from '../../../assets/right-double-arrow.svg?react';
import {Button} from '../../ui/button';
import {Typography} from '../../ui/typography';

import './style.scss';

interface Props {
  totalPages: number;
  currentPage: number;
  className?: string;
  isDisabled?: boolean;
  loading?: boolean;
  formId?: string;
  onClickPrevButton?: () => void;
  onClickNextButton?: () => void;
  rightButtonType?: 'submit' | 'button';
  textPrevButton?: string;
  textNextButton?: string;
}

export const Pagination = ({
  totalPages,
  currentPage,
  className,
  isDisabled,
  loading,
  formId,
  onClickPrevButton,
  onClickNextButton,
  rightButtonType = 'submit',
  textPrevButton,
  textNextButton,
}: Props) => {
  return (
    <div className={clsx('pagination', className)}>
      <Typography className="pagination__text" size="14" weight="bold">
        Шаг {currentPage}/{totalPages}
      </Typography>
      <div className="pagination__buttons-wrapper">
        {currentPage > 1 && (
          <Button
            form={formId}
            letfIcon={<LeftIcon stroke={'white'} />}
            type="button"
            onClick={onClickPrevButton}>
            {textPrevButton}
          </Button>
        )}
        <Button
          form={formId}
          rightIcon={
            currentPage === 1 ? (
              <RightIcon stroke={isDisabled ? 'white' : '#44537180'} />
            ) : currentPage === 2 ? (
              <DoubleArrow stroke={isDisabled ? 'white' : '#44537180'} />
            ) : (
              <Export stroke={'white'} />
            )
          }
          type={rightButtonType}
          disabled={isDisabled}
          onClick={onClickNextButton}>
          {loading ? 'Отправка...' : textNextButton}
        </Button>
      </div>
    </div>
  );
};
