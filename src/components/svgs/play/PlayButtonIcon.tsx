import styles from './PlayButtonIcon.module.scss';

const PlayButtonIcon = ({
  type,
  style,
}: {
  type: 'next' | 'prev' | 'play' | 'pause';
  style?: React.CSSProperties;
}) => {
  return (
    <div className={styles.icon} style={style}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
        {type === 'play' ? (
          <path d='M2 2 L 18 10 L 2 18 z' fill='currentColor' />
        ) : type === 'next' ? (
          <>
            <path d='M2 2 L 18 10 L 2 18 z' fill='currentColor' />
            <path d='M17 2v16' stroke='currentColor' strokeWidth='2' fill='none' />
          </>
        ) : type === 'prev' ? (
          <>
            <path d='M18 2 L 2 10 L 18 18 z' fill='currentColor' />
            <path d='M3 2v16' stroke='currentColor' strokeWidth='2' fill='none' />
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
  );
};

export default PlayButtonIcon;
