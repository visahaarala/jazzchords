import styles from './Chords.module.scss';
import Chord from '../components/chord/Chord';
import PlayControls from '../components/play-controls/PlayControls';

const Chords = () => (
  <div className={styles.chordPage}>
    <div className={styles.chords}>
      <Chord size={2} />
      <Chord
        indexOffset={1}
        size={1}
        contrast={70}
      />
    </div>
    <div className={styles.controls}>
      <PlayControls />
    </div>
  </div>
);

export default Chords;
