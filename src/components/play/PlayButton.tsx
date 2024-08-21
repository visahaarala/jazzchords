import { KeyboardEvent } from 'react';
import styles from './PlayButton.module.scss';

const PlayButton = ({
  icon,
  onClick,
  id,
  disabled,
}: {
  icon: JSX.Element;
  onClick: () => void;
  id?: string;
  disabled?: boolean;
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
      style={disabled ? { filter: 'contrast(70%) brightness(.75)' } : {}}
    >
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

export default PlayButton;
