import styles from './Button.module.scss';

const Button = ({
  onClick,
  onKeyDown,
  text,
  minWidth,
}: {
  onClick: () => void;
  onKeyDown: (code: string) => void;
  text: string;
  minWidth?: number; // rem
}) => {
  return (
    <div
      className={styles.reset}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => onKeyDown(e.code)}
      style={{ minWidth: `${minWidth}rem` }}
    >
      {text}
    </div>
  );
};

export default Button;
