import { KeyboardEvent, useContext } from 'react';
import styles from './Reset.module.scss';
import { ReducerContext } from '../../context/ReducerContext';

const Reset = () => {
  const { dispatch } = useContext(ReducerContext);

  const reset = () => {
    dispatch({ type: 'RESET_SETTINGS' });
  };

  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      reset();
    }
  };

  return (
    <div
      className={styles.reset}
      tabIndex={0}
      onClick={reset}
      onKeyDown={keyDownHandler}
    >
      Reset
    </div>
  );
};

export default Reset;
