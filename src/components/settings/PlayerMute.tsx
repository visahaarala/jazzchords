import styles from './PlayerMute.module.scss';
import { KeyboardEvent, useContext } from 'react';
import { ChordsContext } from '../../context/ChordsContext';
import MuteIcon from '../icons/MuteIcon';

const PlayerMute = () => {
  const isMobile = matchMedia('(pointer:coarse)').matches;

  const { state, dispatch } = useContext(ChordsContext);
  const isMuted = state.isMuted;

  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') setIsMuted(!isMuted);
    if (e.code === 'ArrowUp') setIsMuted(false);
    if (e.code === 'ArrowDown') setIsMuted(true);
  };

  const setIsMuted = (muted: boolean) => {
    dispatch({ type: 'SET_MUTED', payload: { isMuted: muted } });
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

export default PlayerMute;
