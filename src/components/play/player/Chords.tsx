import styles from './Chords.module.scss';
import { KeyboardEvent, useContext } from 'react';
import { ChordsContext } from '../../../context/ChordsContext';
import LockIcon from '../../svg/icons/LockIcon';
import { ReducerActionType } from '../../../@types';
import ChordDisplay from './ChordDisplay';
import { randomTopNoteToKeyIndex } from '../../../functions/noteFunctions';

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

  const minWhiteKeyIndex = randomTopNoteToKeyIndex(state.randomTopNoteMin);
  const maxWhiteKeyIndex = randomTopNoteToKeyIndex(state.randomTopNoteMax);

  return (
    <div className={styles.chords}>
      <div className={styles.now}>
        <ChordDisplay
          indexOffset={0}
          size={2.5}
          minWhiteKeyIndex={minWhiteKeyIndex}
          maxWhiteKeyIndex={maxWhiteKeyIndex}
        />
      </div>

      <div className={styles.next}>
        <div
          className={`iconButton ${styles.lock}`}
          onClick={() => onClick('SWITCH_KEY_LOCK')}
          onKeyDown={(e) => keyDownHandler(e, 'SWITCH_KEY_LOCK')}
          tabIndex={0}
        >
          <LockIcon isLocked={state.keyLocked} />
        </div>

        {state.showNextChord && (
          <ChordDisplay
            indexOffset={1}
            size={1.5}
            minWhiteKeyIndex={minWhiteKeyIndex}
            maxWhiteKeyIndex={maxWhiteKeyIndex}
          />
        )}

        <div
          className={`iconButton ${styles.lock}`}
          onClick={() => onClick('SWITCH_EXTENSION_LOCK')}
          onKeyDown={(e) => keyDownHandler(e, 'SWITCH_EXTENSION_LOCK')}
          tabIndex={0}
        >
          <LockIcon isLocked={state.extensionLocked} />
        </div>
      </div>
    </div>
  );
};

export default Chords;