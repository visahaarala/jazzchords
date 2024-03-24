import styles from './Info.module.scss';
// import GitHub from "../components/logos/GitHub";

const Info = () => (
  <>
    <h2>jazzchords</h2>
    <div className={styles.info}>
      <p>A simple tool for practicing random jazz chords.</p>
      <p>Designed for portrait mobile phone, but also works on desktop.</p>
      <p>
        On desktop, use <code>(shift-)tab</code>, <code>space</code>,
        <code>esc</code> and <code>arrow</code> keys for navigation while
        playing an instrument.
      </p>
      <p>
        Play button might not work on iPhone iOS ver. 16.x because of problems
        with audioContext. Using tab to navigate on desktop might not work in
        Safari.
      </p>
    </div>
    {/* <p>More at <GitHub /></p> */}
  </>
);

export default Info;
