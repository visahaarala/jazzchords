import styles from './Info.module.scss';

const Info = () => (
  <>
    <h2>jazzchords</h2>
    <div className={styles.info}>
      <p>A simple tool for practicing random jazz chords.</p>
      <p>
        Designed for portrait mobile phone, but also works on desktop. On
        desktop, use <code>(shift-)tab</code>, <code>space</code>,{' '}
        <code>esc</code> and <code>arrow</code> keys for navigation while
        playing an instrument.
      </p>
      <p>
        Play button might not work on older iOS versions. Using tab to navigate
        on desktop might not work in Safari.
      </p>
      <p>
        More info at{' '}
        <a href='https://github.com/visahaarala/jazzchords'>GitHub</a>.
      </p>
    </div>
  </>
);

export default Info;
