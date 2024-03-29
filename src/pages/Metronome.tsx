import styles from './Metronome.module.scss';

import StartStop from '../components/metronome/StartStop';
import { useState } from 'react';
import TempoInput from '../components/metronome/TempoInput';

const Metronome = () => {
  const [play, setPlay] = useState(false);

  return (
    <>
      <h2>Metronome</h2>
      <div className={styles.metronome}>
        <TempoInput />
        <StartStop play={play} setPlay={setPlay} />
      </div>
    </>
  );
};

export default Metronome;
