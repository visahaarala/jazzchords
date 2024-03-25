import styles from './Beats.module.scss';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import BeatCirle from './BeatCircle';

const Beats = () => {
  const ctx = useContext(Context);
  const numBeats = Number(ctx.beatsPerChord);
  const beatCircles: JSX.Element[] = [];

  if (!isNaN(numBeats) && numBeats !== 1) {
    for (let beat = 1; beat <= numBeats; beat++) {
      beatCircles.push(<BeatCirle beatNumber={beat} key={beat} />);
    }
  }

  const clickHandler = () => {
    ctx.beatState[1](0);
  }

  return <div className={styles.beats} onClick={clickHandler}>{beatCircles}</div>;
};

export default Beats;
