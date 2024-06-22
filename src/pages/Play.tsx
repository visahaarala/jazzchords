import styles from './Play.module.scss';
import DisplaySleepComment from '../components/misc/PlayInstructions';
import Chords from '../components/chords/Chords';
import Beats from '../components/beats/Beats';
import PlayControls from '../components/player/PlayControls';

const Play = () => {
  return (
    <div className={styles.play}>
      <div>
        <DisplaySleepComment />
        <Chords />
        <Beats />
      </div>
      <div>
        <PlayControls />
      </div>
    </div>
  );
};

export default Play;
