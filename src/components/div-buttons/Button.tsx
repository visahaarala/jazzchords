import { KeyboardEvent } from 'react';
import styles from './Button.module.scss';

const Button = ({
  onClick,
  onKeyDown,
  text,
  minWidth,
}: {
  onClick: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => void;
  text: string;
  minWidth?: number; // rem
}) => {
  return (
    <div
      className={styles.reset}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onKeyDown}
      style={{ minWidth: `${minWidth}rem` }}
    >
      {text}
    </div>
  );
};

export default Button;
