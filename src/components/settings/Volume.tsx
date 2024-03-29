import { KeyboardEvent, useContext } from 'react';
import { ReducerContext } from '../../context/ReducerContext';
import VolumeIcon from '../icons/settings/VolumeIcon';

const Volume = () => {
  const { state, dispatch } = useContext(ReducerContext);
  const isMuted = state.isMuted;

  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    console.log('keydown');
    if (e.code === 'Enter' || e.code === 'Space') setIsMuted(!isMuted);
    if (e.code === 'ArrowUp') setIsMuted(false);
    if (e.code === 'ArrowDown') setIsMuted(true);
  };

  const setIsMuted = (muted: boolean) => {
    dispatch({ type: 'SET_MUTED', payload: { isMuted: muted } });
  };

  return (
    <VolumeIcon
      onClick={setIsMuted.bind(null, !isMuted)}
      onKeyDown={keyDownHandler}
      isMuted={isMuted}
    />
  );
};

export default Volume;
