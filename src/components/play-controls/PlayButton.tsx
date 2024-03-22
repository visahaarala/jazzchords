import styles from './PlayButton.module.scss';

const PlayButton = ({
  id,
  type,
  onClick,
}: {
  id?: string;
  type: 'next' | 'prev' | 'play' | 'stop';
  onClick: () => void;
}) => {

  return (
    <div
      className={styles.playButton}
      onClick={onClick}
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
          ) : type === 'stop' ? (
            <path d='M2 2h16v16h-16z' fill='currentColor' />
          ) : (
            ''
          )}
        </svg>
      </div>
    </div>
  );
};

export default PlayButton;
