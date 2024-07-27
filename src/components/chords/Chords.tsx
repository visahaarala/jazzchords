import styles from './Chords.module.scss';
import { useContext } from 'react';
import { ReducerContext } from '../../context/ReducerContext';
import Chord from './Chord';
import A from './symbols/A';
import B from './symbols/B';
import C from './symbols/C';
import D from './symbols/D';
import E from './symbols/E';
import F from './symbols/F';
import G from './symbols/G';
import Flat from './symbols/Flat';
import Plus from './symbols/Plus';
import Sharp from './symbols/Sharp';
import Minor from './symbols/Minor';

const Chords = () => {
  const isMobile = matchMedia('(pointer:coarse)').matches;

  const { state, dispatch } = useContext(ReducerContext);
  const { chordIndex, chordList } = state;

  const nextChord = () => {
    if (isMobile) {
      if (chordIndex >= chordList.length - 2) {
        dispatch({ type: 'APPEND_CHORD_LIST' });
      } else {
        dispatch({ type: 'INCREMENT_CHORD_INDEX' });
      }
    }
  };

  return (
    <div className={styles.chords} onClick={nextChord}>
      {/* <div style={{ display: 'flex', gap: '.2rem', flexWrap: 'wrap' }}>
        <A height={3} />
        <B height={3} />
        <G height={3} />
        <Flat height={3} />
        <Minor height={3} />
      </div> */}
      <Chord size={4} />
      {/* <Chord indexOffset={1} size={0.75} contrast={50} /> */}
    </div>
  );
};

export default Chords;
