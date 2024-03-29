import { KeyboardEvent, useContext } from 'react';
import { ReducerContext } from '../../context/ReducerContext';
import Button from '../div-buttons/Button';

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

  return <Button onClick={reset} onKeyDown={keyDownHandler} text='Reset' />;
};

export default Reset;
