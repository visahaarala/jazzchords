import styles from './BeatCircle.module.scss';

import { useContext } from 'react';
import { ChordsContext } from '../../../context/ChordsContext';

const BeatCirle = ({ beatNumber }: { beatNumber: number }) => {
  const beat = useContext(ChordsContext).state.beat;

  const style: React.CSSProperties = {
    backgroundColor:
      beat >= beatNumber ? 'var(--color-white)' : 'var(--color-black)',
  };

  return <div className={styles.beatCircle} style={style} />;
};

export default BeatCirle;
