import { useContext } from 'react';
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

  return (
    <div
      className={`${styles.toggle} ${
        state[stateKey] && styles.toggle__checked
      }`}
      onClick={toggler}
    />
  );
};

export default OnOffToggle;
