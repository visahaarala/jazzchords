import styles from './Chords.module.scss';
import { KeyboardEvent, useContext } from 'react';
import { ChordsContext } from '../../../context/ChordsContext';
import ChordSymbol from '../../chord/ChordSymbol';
import Lock from '../../svg/icons/LockIcon';
import { ReducerActionType } from '../../../@types';
import Notation from '../../svg/notation/Notation';
import { noteToWhiteKeyIndex } from '../../../functions/noteFunctions';

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

  const { chords, chordIndex } = state;
  const showTopNote = state.randomTopNoteMode === 'show';

  const setupChord = ({
    indexOffset,
    size,
    minWhiteKeyIndex,
    maxWhiteKeyIndex,
    randomOctave,
  }: {
    indexOffset: number;
    size: number;
    minWhiteKeyIndex?: number;
    maxWhiteKeyIndex?: number;
    randomOctave?: boolean;
  }): JSX.Element => {
    const index = chordIndex + indexOffset;
    const topNote = chords[index].randomTopNote;
    if (topNote && showTopNote) {
      return (
        <div className={styles.chord}>
          <ChordSymbol chord={chords[index]} size={size * 0.8} />
          <div style={{ width: size * 2.5 + 'rem' }}>
            <Notation
              notes={[topNote]}
              minWhiteKeyIndex={minWhiteKeyIndex}
              maxWhiteKeyIndex={maxWhiteKeyIndex}
              randomOctave={randomOctave}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.chord}>
          <ChordSymbol chord={chords[index]} size={size} />
        </div>
      );
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
        {setupChord({
          indexOffset: 0,
          size: 2.8,
          minWhiteKeyIndex,
          maxWhiteKeyIndex,
          randomOctave,
        })}
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
        {setupChord({
          indexOffset: 1,
          size: 1.8,
          minWhiteKeyIndex,
          maxWhiteKeyIndex,
          randomOctave,
        })}
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
