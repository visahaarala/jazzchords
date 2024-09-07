import styles from './Play.module.scss';
import DisplaySleepComment from '../components/sleepComment/DisplaySleepComment';
import Chords from '../components/play/Chords';
import PlayControls from '../components/play/PlayControls';
import Beats from '../components/play/Beats';

// TOGGLE PLAYER / SETTINGS FROM HERE
// using the settings icon

const Play = () => {
  return (
    <div className={styles.play}>
      <div>
        <DisplaySleepComment />
        <Chords />
        <Beats />
      </div>
      <PlayControls />
    </div>
  );
};

export default Play;
