import { KeyboardEvent } from 'react';
import styles from './Reset.module.scss';
import { useSearchParams } from 'react-router-dom';
import { defaults } from '../../context/Context';

const Reset = () => {
  const setParams = useSearchParams()[1];

  const reset = () => {
    setParams({});
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
