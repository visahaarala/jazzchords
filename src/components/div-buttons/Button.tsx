import styles from './Button.module.scss';

const Button = ({
  onClick,
  onKeyDown,
  text,
  minWidth,
  className,
}: {
  onClick: () => void;
  onKeyDown: (code: string) => void;
  text: string;
  minWidth?: number; // rem
  className?: string;
}) => {
  return (
    <div
      className={`${styles.button} ${className}`}
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
