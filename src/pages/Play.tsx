import styles from './Play.module.scss';
import DisplaySleepComment from '../components/misc/DisplaySleepComment';
import Chords from '../components/play/player/Chords';
import PlayControls from '../components/play/player/PlayControls';
import Beats from '../components/play/player/Beats';

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
