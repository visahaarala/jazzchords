import styles from './Info.module.scss';

const Info = () => (
  <>
    <h2>jazzchords</h2>
    <div className={styles.info}>
      <p>A tool for practicing random jazz chords.</p>
      <p>
        <b>settings</b>: Set the range of sharps & flats below{' '}
        <code>accidentals</code>, the chord complexity level under{' '}
        <code>difficulty</code>, and tempo & time signature under{' '}
        <code>metronome</code>.
      </p>
      <p>
        <b>playback</b>: Randomly generate and go back and forth between chords
        using the <code>next</code> & <code>previous</code> buttons, or{' '}
        <code>play</code> through random chords with metronome.
      </p>
      <p>
        More info at{' '}
        <a href='https://github.com/visahaarala/jazzchords/blob/main/README.md'>
          GitHub
        </a>
        .
      </p>
    </div>
  </>
);

export default Info;
