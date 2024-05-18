import styles from './DisplaySleepComment.module.scss';

const DisplaySleepComment = () => {
  const isMobile = matchMedia('(pointer:coarse)').matches;

  return (
    <>
      {isMobile ? (
        <p className={styles.comment}>
          Make sure display screen timout / sleep / auto-lock is prevented from
          system settings.
        </p>
      ) : (
        ''
      )}
    </>
  );
};

export default DisplaySleepComment;
