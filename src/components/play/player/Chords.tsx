import styles from './Chords.module.scss';
import { KeyboardEvent, useContext } from 'react';
import { ChordsContext } from '../../../context/ChordsContext';
import Lock from '../../svg/icons/LockIcon';
import { ReducerActionType } from '../../../@types';
import { noteToWhiteKeyIndex } from '../../../functions/noteFunctions';
import ChordDisplay from './ChordDisplay';

const Chords = () => {
  const { state, dispatch } = useContext(ChordsContext);

  const onClick = (type: ReducerActionType) => {
    dispatch({ type });
  };

  const keyDownHandler = (
    e: KeyboardEvent<HTMLDivElement>,
    type: ReducerActionType
  ) => {
    if ((e.code === 'Space' || e.code === 'Enter') && onClick) {
      e.preventDefault();
      onClick(type);
    }
  };

  // make these modifiable in settings
  const minWhiteKeyIndex = 7; // middle C
  const maxWhiteKeyIndex = 14; // high C
  const randomOctave = undefined;

  console.log(
    'noteToIndex G0:',
    noteToWhiteKeyIndex({ noteName: 'G', octave: 0, hasNoteBelow: false })
  );
  console.log(
    'noteToIndex G1:',
    noteToWhiteKeyIndex({ noteName: 'G', octave: 1, hasNoteBelow: false })
  );

  return (
    <div className={styles.chords}>
      <div className={styles.now}>
        <ChordDisplay
          indexOffset={0}
          size={2.8}
          minWhiteKeyIndex={minWhiteKeyIndex}
          maxWhiteKeyIndex={maxWhiteKeyIndex}
          randomOctave={randomOctave}
        />
      </div>
      <div className={styles.next}>
        <div
          className={`iconButton ${styles.lock}`}
          onClick={() => onClick('SWITCH_KEY_LOCK')}
          onKeyDown={(e) => keyDownHandler(e, 'SWITCH_KEY_LOCK')}
          tabIndex={0}
        >
          <Lock isLocked={state.keyLocked} />
        </div>
        <ChordDisplay
          indexOffset={1}
          size={1.8}
          minWhiteKeyIndex={minWhiteKeyIndex}
          maxWhiteKeyIndex={maxWhiteKeyIndex}
          randomOctave={randomOctave}
        />
        <div
          className={`iconButton ${styles.lock}`}
          onClick={() => onClick('SWITCH_EXTENSION_LOCK')}
          onKeyDown={(e) => keyDownHandler(e, 'SWITCH_EXTENSION_LOCK')}
          tabIndex={0}
        >
          <Lock isLocked={state.extensionLocked} />
        </div>
      </div>
    </div>
  );
};

export default Chords;
