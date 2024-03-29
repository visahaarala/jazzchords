import styles from './Icon.module.scss';

const MetronomeIcon = ({ style }: { style?: React.CSSProperties }) => (
  <div className={styles.icon} style={style}>
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
      <path
        d='M4 18L8 3L12 3L16 18z'
        stroke='currentColor'
        strokeWidth={2.2}
        fill='none'
      />
      <path
        d='M10 14L18 3'
        stroke='currentColor'
        strokeWidth={2.2}
        fill='none'
      />

    </svg>
  </div>
);

export default MetronomeIcon;
