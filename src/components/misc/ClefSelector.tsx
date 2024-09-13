import styles from './ClefSelector.module.scss';
import TrebleClefIcon from '../svg/icons/TrebleClefIcon';
import { KeyboardEvent, useContext } from 'react';
import { ChordsContext } from '../../context/ChordsContext';
import { Clef, ReducerActionType } from '../../@types';
import BassClefIcon from '../svg/icons/BassClefIcon';

const ClefSelector = ({
  dispatchType,
  payloadKey,
  disabled,
}: {
  dispatchType: ReducerActionType;
  payloadKey: 'playerClef' | 'notesClef';
  disabled?: boolean;
}) => {
  const { state, dispatch } = useContext(ChordsContext);
  const clef = state[payloadKey];

  const keyHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    const code = e.code;
    if (code === 'Enter' || code === 'Space') {
      e.preventDefault();
      toggle();
    }
  };

  const toggle = () => {
    if (!disabled) {
      const newClef: Clef = clef === 'bass' ? 'treble' : 'bass';
      dispatch({
        type: dispatchType,
        payload: { ...state, [payloadKey]: newClef },
      });
    }
  };

  return (
    <div
      className={`${styles.selector} ${disabled && styles.selector__disabled}`}
      onClick={toggle}
      onKeyDown={(e) => keyHandler(e)}
      tabIndex={disabled ? -1 : 0}
    >
      <div className={styles.selector__clef}>
        <BassClefIcon hide={!(clef === 'bass')} height={2} />
      </div>
      <div className={styles.selector__clef}>
        <TrebleClefIcon hide={!(clef === 'treble')} height={2} />
      </div>

      {/* <div
        className={`${styles.clef} ${disabled && styles.clefs__disabled} ${
          useBassClef && styles.clefs__hide
        }`}
      >
      </div> */}
      {/* <div
        className={`${styles.clef} ${disabled && styles.clefs__disabled} ${
          !useBassClef && styles.clefs__hide
        }`}
        onClick={toggle}
        onKeyDown={(e) => keyHandler(e)}
        tabIndex={disabled ? -1 : 0}
      >
        <BassClefIcon height={size} scaleX={1} />
      </div> */}
    </div>
  );
};

export default ClefSelector;
