import { KeyboardEvent } from 'react';
import styles from './PlayButton.module.scss';

const PlayButton = ({
  icon,
  onClick,
  id,
}: {
  icon: JSX.Element;
  onClick: () => void;
  id?: string;
}) => {
  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    const code = e.code;
    if (code === 'Space' || code === 'Enter') {
      onClick();
    }
  };

  return (
    <div
      className={`button`}
      onClick={onClick}
      onKeyDown={keyDownHandler}
      tabIndex={0}
      id={id}
    >
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

export default PlayButton;
