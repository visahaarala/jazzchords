import { KeyboardEvent } from 'react';
import styles from './Reset.module.scss';
import { useSearchParams } from 'react-router-dom';

const Reset = () => {
  const [params, setParams] = useSearchParams();

  const reset = () => {
    console.log('reset');
    // window.location.href = window.location.origin + '/settings';
    setParams({ q: '321' });
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
