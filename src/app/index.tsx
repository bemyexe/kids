import Download from '../assets/download.svg?react';
import Export from '../assets/export.svg?react';
import LeftArrow from '../assets/left-arrow.svg?react';
import RightArrow from '../assets/right-arrow.svg?react';
import RightDoubleArrow from '../assets/right-double-arrow.svg?react';
import { Button } from '../shared/ui/button';
import { Input } from '../shared/ui/input';
import { RadioButton } from '../shared/ui/radio-button';
import { TextArea } from '../shared/ui/textarea';
import { Typography } from '../shared/ui/typography';

export const App = () => {
  return (
    <>
      app
      <Typography>HELLO</Typography>
      <RadioButton name="radio" label="Всегда" labelSize="14" />
      <RadioButton name="radio" label="Иногда" labelSize="14" />
      <Input label="Имя ребенка" />
      <TextArea
        label="Есть ли у Вашего ребенка какие-либо особенности развития или поведения, о которых Вы хотели бы сообщить дополнительно?"
        name="fafa"
      />
      <LeftArrow stroke="red" />
      <RightArrow stroke="red" />
      <RightDoubleArrow stroke="red" />
      <Download stroke="red" />
      <Export stroke="red" />
      <Button type="button">Submit</Button>
    </>
  );
};
