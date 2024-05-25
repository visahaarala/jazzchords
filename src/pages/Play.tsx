import styles from './Play.module.scss';
import Chord from '../components/chords/Chord';
import PlayControls from '../components/player/PlayControls';
import Beats from '../components/beats/Beats';
import DisplaySleepComment from '../components/misc/PlayInstructions';

const Play = () => {
  return (
    <>
      <div className={styles.playPage}>
        <DisplaySleepComment />
        <div className={styles.chords}>
          <Chord size={1.4} />
          <Chord indexOffset={1} size={0.8} contrast={50} />
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
};

export default Play;
