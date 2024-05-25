import styles from './MetronomeIconButton.module.scss';
import { KeyboardEvent, useContext } from 'react';
import { MetronomeContext } from '../../context/MetronomeContext';
import LightIcon from '../icons/LightIcon';

const MetronomeLight = () => {
  const isMobile = matchMedia('(pointer:coarse)').matches;

  const ctx = useContext(MetronomeContext);

  const [flashIsOn, setFlashIsOn] = ctx.flashState;

  const lightKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') setFlashIsOn(!flashIsOn);
    if (e.code === 'ArrowUp') setFlashIsOn(true);
    if (e.code === 'ArrowDown') setFlashIsOn(false);
  };

  return (
    <div
      className={styles.icon}
      onClick={setFlashIsOn.bind(null, !flashIsOn)}
      onKeyDown={lightKeyDownHandler}
      tabIndex={isMobile ? -1 : 0}
    >
      <LightIcon isOn={flashIsOn} />
    </div>
  );
};

export default MetronomeLight;
