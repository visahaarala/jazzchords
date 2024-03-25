import { Context } from '../../../context/Context';
import styles from './Icon.module.scss';
import { KeyboardEvent, useContext, useEffect, useState } from 'react';

const CopyIcon = () => {
  const ctx = useContext(Context);

  const [showToolTip, setShowTooltip] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTooltip(false);
    }, 3000);
  }, [showToolTip]);

  const copyUrlToClipboard = () => {
    console.log(window.location);
    let url = window.location.origin + window.location.pathname;
    url += '?bpc=' + ctx.beatsPerChord;
    url += '&bpm=' + ctx.beatsPerMinute;
    url += '&isMuted=' + ctx.isMuted;
    url += '&dmin=' + ctx.extensionRange[0];
    url += '&dmax=' + ctx.extensionRange[1];
    url += '&amin=' + ctx.accidentalRange[0];
    url += '&amax=' + ctx.accidentalRange[1];
    navigator.clipboard.writeText(url);
    setShowTooltip(true);
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
