import { KeyboardEvent } from 'react';
import styles from './PlayButton.module.scss';

const PlayButton = ({
  id,
  type,
  onClick,
}: {
  id?: string;
  type: 'next' | 'prev' | 'play' | 'pause';
  onClick: () => void;
}) => {
  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    const code = e.code;
    if (code === 'Space' || code === 'Enter') {
      onClick();
    }
  };

  return (
    <div
      className={styles.playButton}
      onClick={onClick}
      onKeyDown={keyDownHandler}
      tabIndex={1}
      id={id}
    >
      <div
        className={styles.icon}
        style={{ transform: type === 'prev' ? 'rotate(180deg)' : '' }}
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          {type === 'play' ? (
            <path d='M2 2 L 18 10 L 2 18 z' fill='currentColor' />
          ) : type === 'next' || type === 'prev' ? (
            <>
              <path d='M2 2 L 18 10 L 2 18 z' fill='currentColor' />
              <path d='M18 2v16' stroke='white' strokeWidth='2' fill='none' />
            </>
          ) : type === 'pause' ? (
            <path
              d='M5 2v16m10 0v-16'
              fill='none'
              stroke='currentColor'
              strokeWidth='5'
            />
          ) : (
            ''
          )}
        </svg>
      </div>
    </div>
  );
};

export default PlayButton;
