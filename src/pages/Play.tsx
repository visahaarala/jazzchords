import styles from './Play.module.scss';
import DisplaySleepComment from '../components/misc/PlayInstructions';
import Chords from '../components/chords/Chords';
import Beats from '../components/beats/Beats';
import PlayControls from '../components/player/PlayControls';

const Play = () => {

  return (
    <>
      <div className={styles.playPage}>
        <DisplaySleepComment />
        <Chords />
        {/* <div className={styles.beats}> */}
          <Beats />
        {/* </div> */}
        <div className={styles.controls}>
          <PlayControls />
        </div>
      </div>
    </>
  );
};

export default Play;
