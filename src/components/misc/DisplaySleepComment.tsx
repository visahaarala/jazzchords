import styles from './DisplaySleepComment.module.scss';

const DisplaySleepComment = () => {
  const isMobile = matchMedia('(pointer:coarse)').matches;

  return isMobile ? (
    <p className={styles.comment}>
      Turn off silent mode to hear the click. Prevent screen timeout / sleep /
      auto-lock from device settings if necessary.
    </p>
  ) : (
    ''
  );
};

export default DisplaySleepComment;
