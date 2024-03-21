import styles from './Icon.module.scss';

const ChordIcon = () => {
  return (
    <div className={styles.icon}>
      <span className='base'>C</span>
      <span className='extension'>7</span>
    </div>
  );
};

export default ChordIcon;
