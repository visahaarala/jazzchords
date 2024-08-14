import styles from './Beats.module.scss';
import BeatCirle from './BeatCircle';
import { useContext } from 'react';
import { ChordsContext } from '../../context/ChordsContext';

const Beats = () => {
  const { state, dispatch } = useContext(ChordsContext);
  const numBeats = Number(state.beatsPerChord);
  const beatCircles: JSX.Element[] = [];

  if (!isNaN(numBeats) && numBeats !== 1) {
    for (let beat = 1; beat <= numBeats; beat++) {
      beatCircles.push(<BeatCirle beatNumber={beat} key={beat} />);
    }
  }

  const clickHandler = () => {
    dispatch({ type: 'SET_BEAT', payload: { beat: 0 } });
  };

  return (
    <div className={styles.beats} onClick={clickHandler}>
      {beatCircles}
    </div>
  );
};

export default Beats;
