import { KeyboardEvent, useContext } from 'react';
import LightIcon from '../svg/icons/LightIcon';
import { MetronomeContext } from '../../context/MetronomeContext';
import { flashTempoLimit } from '../../pages/Metronome';

const MetronomeLight = () => {
  const isMobile = matchMedia('(pointer:coarse)').matches;

  const ctx = useContext(MetronomeContext);
  const [flashIsOn, setFlashIsOn] = ctx.flashState;
  const [tempo] = ctx.tempoState;

  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault();
      flashHandler();
    }
    if (e.code === 'ArrowUp') {
      if (!flashIsOn && tempo <= flashTempoLimit) {
        setFlashIsOn(true);
      }
    }
    if (e.code === 'ArrowDown') setFlashIsOn(false);
  };

  const flashHandler = () => {
    if (tempo <= flashTempoLimit) {
      setFlashIsOn(!flashIsOn);
    }
  };

  return (
    <div
      className={`iconButton ${!flashIsOn && 'iconButton__disabled'}`}
      onClick={flashHandler}
      onKeyDown={keyDownHandler}
      tabIndex={isMobile ? -1 : 0}
      aria-label='metronomeLight'
    >
      <LightIcon isOn={flashIsOn} />
    </div>
  );
};

export default MetronomeLight;
