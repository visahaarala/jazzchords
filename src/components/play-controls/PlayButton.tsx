import { KeyboardEvent } from 'react';
import styles from './PlayButton.module.scss';
import PlayButtonIcon from '../icon-buttons/play/PlayButtonIcon';

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
      <PlayButtonIcon type={type} />
    </div>
  );
};

export default PlayButton;
