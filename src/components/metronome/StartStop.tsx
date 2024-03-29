import { Dispatch, SetStateAction } from 'react';
import Button from '../div-buttons/Button';

const StartStop = ({
  play,
  setPlay,
}: {
  play: boolean;
  setPlay: Dispatch<SetStateAction<boolean>>;
}) => {
  const clickHandler = () => {
    setPlay(!play);
  };

  const keyDownHandler = () => {};

  return (
    <Button
      onClick={clickHandler}
      onKeyDown={keyDownHandler}
      text={play ? 'Stop' : 'Start'}
      minWidth={8}
    />
  );
};

export default StartStop;
