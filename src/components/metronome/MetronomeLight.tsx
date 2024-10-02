import { KeyboardEvent, useContext } from 'react';
import LightIcon from '../svg/icons/LightIcon';
import { MetronomeContext } from '../../context/MetronomeContext';
import { flashTempoLimit } from '../../pages/Metronome';
import styles from './MetronomeLight.module.scss';

const MetronomeLight = ({ hide }: { hide: boolean }) => {
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
      className={`iconButton ${!flashIsOn && 'iconButton__disabled'} ${
        styles.metronomeLight
      } ${hide && styles['metronomeLight--hide']}`}
      onClick={flashHandler}
      onKeyDown={keyDownHandler}
      tabIndex={0}
    >
      <LightIcon isOn={flashIsOn} />
    </div>
  );
};

export default MetronomeLight;
