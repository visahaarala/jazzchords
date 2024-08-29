import styles from './Icon.module.scss';
import { KeyboardEvent, useContext } from 'react';
import LightIcon from '../icons/LightIcon';
import { MetronomeContext } from '../../context/MetronomeContext';

const MetronomeLight = () => {
  const isMobile = matchMedia('(pointer:coarse)').matches;

  const ctx = useContext(MetronomeContext);
  const [flashIsOn, setFlashIsOn] = ctx.flashState;

  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault();
      setFlashIsOn(!flashIsOn);
    }
    if (e.code === 'ArrowUp') setFlashIsOn(true);
    if (e.code === 'ArrowDown') setFlashIsOn(false);
  };

  return (
    <div
      className={styles.icon}
      onClick={setFlashIsOn.bind(null, !flashIsOn)}
      onKeyDown={keyDownHandler}
      tabIndex={isMobile ? -1 : 0}
    >
      <LightIcon isOn={flashIsOn} />
    </div>
  );
};

export default MetronomeLight;
