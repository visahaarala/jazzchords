import styles from './Chords.module.scss';
import { useContext } from 'react';
import { ChordsContext } from '../../context/ChordsContext';
import Chord from './Chord';
import Lock from '../icons/Lock';

const Chords = () => {
  const { state, dispatch } = useContext(ChordsContext);

  const switchExtensionLock = () => {
    dispatch({ type: 'SWITCH_EXTENSION_LOCK' });
  };

  return (
    <div className={styles.chords}>
      <div className={styles.extensionLock}>
        <div style={{ fontSize: '3.7rem', height: '1.4em' }}></div>
        <div style={{ fontSize: '2rem', height: '1.4em' }}>
          <Lock
            isLocked={state.extensionLocked}
            onClick={switchExtensionLock}
          />
        </div>
      </div>
      <Chord size={3.7} />
      <Chord indexOffset={1} size={2} contrast={50} />
    </div>
  );
};

export default Chords;
