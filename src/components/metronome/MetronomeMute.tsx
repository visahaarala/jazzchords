import { KeyboardEvent, useContext } from 'react';
import MuteIcon from '../svg/icons/MuteIcon';
import { MetronomeContext } from '../../context/MetronomeContext';

const MetronomeMute = () => {
  const ctx = useContext(MetronomeContext);
  const [isMuted, setIsMuted] = ctx.mutedState;

  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault();
      setIsMuted(!isMuted);
    }
    if (e.code === 'ArrowUp') setIsMuted(false);
    if (e.code === 'ArrowDown') setIsMuted(true);
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

export default MetronomeMute;
