import { KeyboardEvent, useContext } from 'react';
import { ChordsContext } from '../../../context/ChordsContext';
import MuteIcon from '../../svg/icons/MuteIcon';

const PlayerMute = () => {
  const { state, dispatch } = useContext(ChordsContext);
  const isMuted = state.isMuted;

  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault();
      setIsMuted(!isMuted);
    }
    if (e.code === 'ArrowUp') setIsMuted(false);
    if (e.code === 'ArrowDown') setIsMuted(true);
  };

  const setIsMuted = (muted: boolean) => {
    dispatch({ type: 'SET_MUTED', payload: { isMuted: muted } });
  };

  return (
    <div
      className={`iconButton ${isMuted && 'iconButton__disabled'}`}
      onClick={setIsMuted.bind(null, !isMuted)}
      onKeyDown={keyDownHandler}
      tabIndex={0}
    >
      <MuteIcon isOn={!isMuted} />
    </div>
  );
};

export default PlayerMute;
