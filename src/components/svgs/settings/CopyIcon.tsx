import styles from './Icon.module.scss';
import { KeyboardEvent } from 'react';

const CopyIcon = () => {

  const copyUrlToClipboard = () => {
    console.log('copy');
  }

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
