/*
Icon fodified from "volume-high-outline" and "volume-mute-outline",
downloaded from https://ionic.io/ionicons with MIT license.
*/

import { KeyboardEvent, useContext } from 'react';
import { Context } from '../context/Context';

const isMobile =
  window.matchMedia && !window.matchMedia('(pointer: fine)').matches;

const Volume = () => {
  const ctx = useContext(Context);
  const [isOn, setIsOn] = ctx.volumeIsOnState;

  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') setIsOn(!isOn);
    if (e.code === 'ArrowUp') setIsOn(true);
    if (e.code === 'ArrowDown') setIsOn(false);
  };

  const onClickHandler = () => {
    !isMobile && setIsOn(!isOn);
  };

  return (
    <div
      className='volume'
      onClick={() => !isMobile && setIsOn(!isOn)}
      tabIndex={0}
      onKeyDown={keyDownHandler}
    >
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
        <path
          d='M126 192H56a8 8 0 00-8 8v112a8 8 0 008 8h69.65a15.93 15.93 0 0110.14 3.54l91.47 74.89A8 8 0 00240 392V120a8 8 0 00-12.74-6.43l-91.47 74.89A15 15 0 01126 192zM320 320c9.74-19.38 16-40.84 16-64 0-23.48-6-44.42-16-64M368 368c19.48-33.92 32-64.06 32-112s-12-77.74-32-112M416 416c30-46 48-91.43 48-160s-18-113-48-160'
          fill='none'
          stroke={isOn ? 'var(--color-black)' : 'var(--color-gray-dark)'}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='38'
        />
        <path
          fill='none'
          stroke={isOn ? 'none' : 'var(--color-white)'}
          strokeLinecap='round'
          strokeMiterlimit='10'
          strokeWidth='128'
          d='M416 432L64 80'
        />
        <path
          fill='none'
          stroke={isOn ? 'none' : 'var(--color-black)'}
          strokeLinecap='round'
          strokeMiterlimit='10'
          strokeWidth='32'
          d='M416 432L64 80'
        />
      </svg>
      {isMobile && (
        <span className='volume__tooltip'>
          Volume not yet available in mobile.
        </span>
      )}
    </div>
  );
};

export default Volume;
