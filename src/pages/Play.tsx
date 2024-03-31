import styles from './Play.module.scss';
import Chord from '../components/chords/Chord';
import PlayControls from '../components/player/PlayControls';
import Beats from '../components/beats/Beats';

const Play = () => (
  <>
    <h2>player</h2>
    <div className={styles.playPage}>
      <div className={styles.chords}>
        <Chord size={1.6} />
        <Chord indexOffset={1} size={0.95} contrast={30} />
      </div>
      <div className={styles.beats}>
        <Beats />
      </div>
      <div className={styles.controls}>
        <PlayControls />
      </div>
    </div>
  </>
);

export default Play;
