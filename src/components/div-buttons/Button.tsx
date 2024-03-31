import styles from './Button.module.scss';

const Button = ({
  onClick,
  onKeyDown,
  text,
  minWidth,
  focus,
}: {
  onClick: () => void;
  onKeyDown: (code: string) => void;
  text: string;
  minWidth?: number; // rem
  focus?: boolean;
}) => {
  return (
    <div
      className={styles.reset}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => onKeyDown(e.code)}
      style={{ minWidth: `${minWidth}rem` }}

      // autoFocus
    >
      {text}
    </div>
  );
};

export default Button;
