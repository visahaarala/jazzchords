import styles from './Chords.module.scss';
import { useContext } from 'react';
import { ReducerContext } from '../../context/ReducerContext';
import Chord from './Chord';

const Chords = () => {
  const isMobile = matchMedia('(pointer:coarse)').matches;

  const { state, dispatch } = useContext(ReducerContext);
  const { chordIndex, chordList } = state;

  const nextChord = () => {
    if (isMobile) {
      if (chordIndex >= chordList.length - 2) {
        dispatch({ type: 'APPEND_CHORD_LIST' });
      }
      dispatch({ type: 'INCREMENT_CHORD_INDEX' });
    }
  };

  return (
    <div className={styles.chords} onClick={nextChord}>
      <Chord size={1.4} />
      <Chord indexOffset={1} size={0.8} contrast={50} />
    </div>
  );
};

export default Chords;
