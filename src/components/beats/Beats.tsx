import styles from './Beats.module.scss';
import BeatCirle from './BeatCircle';
import { useContext } from 'react';
import { ReducerContext } from '../../context/ReducerContext';

const Beats = () => {
  // const ctx = useContext(Context);
  const { state, dispatch } = useContext(ReducerContext);
  // const numBeats = Number(ctx.beatsPerChordState[0]);
  const numBeats = Number(state.beatsPerChord);
  const beatCircles: JSX.Element[] = [];

  if (!isNaN(numBeats) && numBeats !== 1) {
    for (let beat = 1; beat <= numBeats; beat++) {
      beatCircles.push(<BeatCirle beatNumber={beat} key={beat} />);
    }
  }

  const clickHandler = () => {
    dispatch({ type: 'RESET_BEAT', payload: { beat: 0 } });
  };

  return (
    <div className={styles.beats} onClick={clickHandler}>
      {beatCircles}
    </div>
  );
};

export default Beats;
