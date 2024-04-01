import { useContext } from 'react';
import { ReducerContext } from '../../context/ReducerContext';
import Button from '../div-buttons/Button';

const Reset = () => {
  const { dispatch } = useContext(ReducerContext);

  const reset = () => {
    dispatch({ type: 'RESET_SETTINGS' });
  };

  const keyDownHandler = (code: string) => {
    if (code === 'Space' || code === 'Enter') {
      reset();
    }
  };

  return <Button onClick={reset} onKeyDown={keyDownHandler} text='Reset' minWidth={10}/>;
};

export default Reset;
