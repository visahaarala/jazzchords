import styles from './Chords.module.scss';
import { KeyboardEvent, Reducer, useContext } from 'react';
import { ChordsContext } from '../../context/ChordsContext';
import Chord from './Chord';
import Lock from '../icons/Lock';
import { ReducerActionType } from '../../@types';

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
      <Chord size={3.7} />
      <Chord indexOffset={1} size={2} contrast={50} />
    </div>
  );
};

export default Chords;
