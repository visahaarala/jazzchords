import styles from './Icon.module.scss';

const InfoIcon = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <div className={styles.icon} style={style}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
        <path
          d='M6 9h4v9 m-5.5 0 h 11'
          strokeWidth='3.5'
          fill='none'
          stroke='currentColor'
        />
        <circle cx='10' cy='2.5' r='2.5' stroke='none' fill='currentColor' />
      </svg>
    </div>
  );
};

export default InfoIcon;
