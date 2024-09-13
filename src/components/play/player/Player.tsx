import Beats from './Beats';
import Chords from './Chords';
import PlayControls from './PlayControls';
import styles from './Player.module.scss';

const Player = () => {
  return (
    <div className={styles.player}>
      <div className={styles.chordsArea}>
        <Chords />
        <Beats />
      </div>
      <div className={styles.controls}>
        <PlayControls />
      </div>
    </div>
  );
};

export default Player;
