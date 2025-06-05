import { Input } from '../shared/ui/input';
import { RadioButton } from '../shared/ui/radio-button';
import { Typography } from '../shared/ui/typography';

export const App = () => {
  return (
    <>
      app
      <Typography>HELLO</Typography>
      <RadioButton name="radio" label="Всегда" labelSize="14" />
      <RadioButton name="radio" label="Иногда" labelSize="14" />
      <Input label="Имя ребенка" placeholder=" " />
    </>
  );
};
