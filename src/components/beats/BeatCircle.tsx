import styles from './BeatCircle.module.scss';

import { useContext } from 'react';
import { ReducerContext } from '../../context/ReducerContext';

const BeatCirle = ({ beatNumber }: { beatNumber: number }) => {
  const beat = useContext(ReducerContext).state.beat;

  const style: React.CSSProperties = {
    backgroundColor:
      beat >= beatNumber ? 'var(--color-white)' : 'var(--color-black)',
  };

  return <div className={styles.beatCircle} style={style} />;
};

export default BeatCirle;
