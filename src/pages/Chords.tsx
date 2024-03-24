import styles from './Chords.module.scss';
import Chord from '../components/chords/Chord';
import PlayControls from '../components/play-controls/PlayControls';
import Beats from '../components/beats/Beats';

const Chords = () => (
  <div className={styles.chordPage}>
    <div className={styles.chords}>
      <Chord size={1.6} />
      <Chord indexOffset={1} size={1.1} contrast={30} />
    </div>
    <div className={styles.beats}>
      <Beats />
    </div>
    <div className={styles.controls}>
      <PlayControls />
    </div>
  </div>
);

export default Chords;
