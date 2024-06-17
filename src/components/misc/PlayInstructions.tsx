import styles from './PlayInstructions.module.scss';

const DisplaySleepComment = () => {
  const isMobile = matchMedia('(pointer:coarse)').matches;

  return (
    <>
      {isMobile ? (
        <>
          <p className={styles.comment}>
            Turn off silent mode to hear the click.
          </p>
          <p className={styles.comment}>
            Prevent screen timeout / sleep / auto-lock from settings if
            necessary.
          </p>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default DisplaySleepComment;
