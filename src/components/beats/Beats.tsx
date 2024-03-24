import styles from './Beats.module.scss';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import BeatCirle from './BeatCircle';

const Beats = () => {
  const ctx = useContext(Context);
  const numBeats = Number(ctx.beatsPerChordState[0]);
  const beatCircles: JSX.Element[] = [];

  if (!isNaN(numBeats) && numBeats !== 1) {
    for (let beat = 1; beat <= numBeats; beat++) {
      beatCircles.push(<BeatCirle beatNumber={beat} key={beat} />);
    }
  }

  return <div className={styles.beats}>{beatCircles}</div>;
};

export default Beats;
