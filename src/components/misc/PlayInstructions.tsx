import styles from './PlayInstructions.module.scss';

const DisplaySleepComment = () => {
  const isMobile = matchMedia('(pointer:coarse)').matches;

  return (
    <>
      {isMobile ? (
        <p className={styles.comment}>
          Prevent screen timout / sleep / auto-lock from settings if necessary.
          Turn off silent mode to hear the click.
        </p>
      ) : (
        ''
      )}
    </>
  );
};

export default DisplaySleepComment;
