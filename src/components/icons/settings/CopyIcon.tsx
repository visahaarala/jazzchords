/**
 * 
 * CURRENTLY NOT IN USE 
 * 
 */

// import { Context } from '../../../context/Context';
import styles from './Icon.module.scss';
import {
  KeyboardEvent,
  // useContext,
  useEffect,
  useState,
} from 'react';

const CopyIcon = () => {
  // const ctx = useContext(Context);

  const [showToolTip, setShowTooltip] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTooltip(false);
    }, 3000);
  }, [showToolTip]);

  const copyUrlToClipboard = () => {
    // console.log(window.location);
    // let url = window.location.origin + window.location.pathname;
    // url += '?bpc=' + ctx.beatsPerChordState[0];
    // url += '&bpm=' + ctx.beatsPerMinuteState[0];
    // url += '&isMuted=' + ctx.isMutedState[0];
    // url += '&dmin=' + ctx.difficultyMin;
    // url += '&dmax=' + ctx.difficultyMax;
    // url += '&amin=' + ctx.accidentalsMin;
    // url += '&amax=' + ctx.accidentalsMax;
    // navigator.clipboard.writeText(url);
    // setShowTooltip(true);
  };

  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      copyUrlToClipboard();
    }
  };

  return (
    <div
      className={styles.icon}
      onClick={copyUrlToClipboard}
      tabIndex={0}
      onKeyDown={keyDownHandler}
    >
      <div
        className={styles.tooltip}
        style={showToolTip ? { display: 'block' } : {}}
      >
        Link copied!
      </div>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'>
        <path
          d='M6 10H28V38H6z'
          fill='none'
          strokeWidth='3'
          stroke='currentColor'
        />
        <path
          d='M12 4H34V34'
          fill='none'
          strokeWidth='3'
          stroke='currentColor'
        />
      </svg>
    </div>
  );
};

export default CopyIcon;
