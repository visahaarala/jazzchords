import { KeyboardEvent, useContext } from 'react';
import styles from './OnOffToggle.module.scss';
import { ChordsContext } from '../../context/ChordsContext';
import { ProgramState, ReducerActionType } from '../../@types';

const OnOffToggle = ({
  dispatchType,
  stateKey,
}: {
  dispatchType: ReducerActionType;
  stateKey: keyof ProgramState;
}): JSX.Element => {
  const { state, dispatch } = useContext(ChordsContext);

  const toggler = () => {
    dispatch({ type: dispatchType });
  };

  const keyHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    const code = e.code;
    if (code === 'Space' || code === 'Enter') {
      e.preventDefault();
      toggler();
    }
  }

  return (
    <div
      className={`${styles.toggle} ${
        state[stateKey] && styles.toggle__checked
      }`}
      onClick={toggler}
      onKeyDown={(e) => keyHandler(e)}
      tabIndex={0}
    />
  );
};

export default OnOffToggle;
