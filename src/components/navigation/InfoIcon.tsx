import styles from './Icon.module.scss';

const InfoIcon = () => {
  return (
    <div className={styles.icon}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
        <path
          d='M6 9h4v8 m-5.5 0 h 11'
          stroke='black'
          strokeWidth='3.5'
          fill='none'
        />
        <circle cx='10' cy='3.5' r='2.4' />
      </svg>
    </div>
  );
};

export default InfoIcon;
