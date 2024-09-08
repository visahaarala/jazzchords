import styles from './Chords.module.scss';
import { KeyboardEvent, useContext } from 'react';
import { ChordsContext } from '../../../context/ChordsContext';
import ChordSymbol from '../../chord/ChordSymbol';
import Lock from '../../svg/icons/LockIcon';
import { ReducerActionType } from '../../../@types';

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

  

  return (
    <div className={styles.chords}>
      <div className={styles.now}>
        <ChordSymbol size={3.3} />
      </div>
      <div className={styles.next}>
        <p>
          random top note:
          <span>{state.chords[state.chordIndex + 1].randomTopNote}</span>
        </p>
        <ChordSymbol indexOffset={1} size={1.8} />
      </div>
      <div className={styles.extensionLock}>
        <div style={{ fontSize: '3.7rem', height: '1.4em' }}></div>
        <div style={{ fontSize: '2rem', height: '1.4em' }}>
          <div
            onClick={() => onClick('SWITCH_KEY_LOCK')}
            onKeyDown={(e) => keyDownHandler(e, 'SWITCH_KEY_LOCK')}
            tabIndex={0}
          >
            <Lock isLocked={state.keyLocked} />
          </div>
          <div
            onClick={() => onClick('SWITCH_EXTENSION_LOCK')}
            onKeyDown={(e) => keyDownHandler(e, 'SWITCH_EXTENSION_LOCK')}
            tabIndex={0}
          >
            <Lock isLocked={state.extensionLocked} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chords;
