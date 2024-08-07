import styles from './Chords.module.scss';
import { useContext } from 'react';
import { ReducerContext } from '../../context/ReducerContext';
import Chord from './Chord';
import A from './symbols/keys/A';
import B from './symbols/keys/B';
import C from './symbols/keys/C';
import D from './symbols/keys/D';
import E from './symbols/keys/E';
import F from './symbols/keys/F';
import G from './symbols/keys/G';
import Flat from './symbols/extensions/Flat';
import Plus from './symbols/extensions/Plus';
import Sharp from './symbols/extensions/Sharp';
import Minor from './symbols/keys/Minor';
import Seven from './symbols/extensions/Seven';
import Six from './symbols/extensions/Six';
import Nine from './symbols/extensions/Nine';
import Five from './symbols/extensions/Five';
import Eleven from './symbols/extensions/Eleven';
import Thirteen from './symbols/extensions/Thirteen';
import Dim from './symbols/extensions/Dim';
import HalfDim from './symbols/extensions/HalfDim';
import Four from './symbols/extensions/Four';
import Maj from './symbols/extensions/Maj';
import Add from './symbols/extensions/Add';
import Sus from './symbols/extensions/Sus';
import Bracket from './symbols/extensions/Bracket';

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
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {/* <A height={6} /> */}
        {/* <B height={6} /> */}
        {/* <C height={3} /> */}
        {/* <Plus height={3} /> */}
        {/* <D height={6} /> */}
        {/* <E height={6} /> */}
        {/* <F height={6} /> */}
        {/* <G height={6} /> */}
        {/* <Minor height={6} /> */}

        {/* <Six height={3} /> */}
        {/* <Five height={3} /> */}
        {/* <Eleven height={3} /> */}
        {/* <Maj height={3} /> */}
        {/* <Add height={3} /> */}
        {/* <Sus height={3} /> */}
        {/* <Four height={3} /> */}
        {/* <Six height={10} /> */}
        {/* <Seven height={10} /> */}
        {/* <Flat height={10} /> */}
        {/* <SixNine height={10} /> */}
        {/* <Bracket height={10} />
        <Bracket height={10} flip />
        <Bracket height={10} double />
        <Bracket height={10} double flip /> */}
      </div>
      <Chord size={3.7} />
      <Chord indexOffset={1} size={2} contrast={50} />
    </div>
  );
};

export default Chords;
