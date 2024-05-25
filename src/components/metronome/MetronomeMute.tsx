import styles from './MetronomeIconButton.module.scss';
import { KeyboardEvent, useContext } from 'react';
import MuteIcon from '../icons/MuteIcon';
import { MetronomeContext } from '../../context/MetronomeContext';

const MetronomeMute = () => {
  const isMobile = matchMedia('(pointer:coarse)').matches;

  const ctx = useContext(MetronomeContext);
  const [isMuted, setIsMuted] = ctx.mutedState;

  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') setIsMuted(!isMuted);
    if (e.code === 'ArrowUp') setIsMuted(false);
    if (e.code === 'ArrowDown') setIsMuted(true);
  };

  return (
    <div
      className={styles.icon}
      onClick={setIsMuted.bind(null, !isMuted)}
      onKeyDown={keyDownHandler}
      tabIndex={isMobile ? -1 : 0}
    >
      <MuteIcon isOn={!isMuted} />
    </div>
  );
};

export default MetronomeMute;
