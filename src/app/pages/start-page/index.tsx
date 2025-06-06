import { useNavigate } from 'react-router';

import { Button } from '../../../shared/ui/button';
import { Typography } from '../../../shared/ui/typography';

import './style.scss';

export const StartPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/upload');
  };

  return (
    <main className="start-page">
      <Typography tag="h3" size="20">
        Психологический тест
      </Typography>
      <Button type="button" onClick={handleClick}>
        Начать тест
      </Button>
    </main>
  );
};
