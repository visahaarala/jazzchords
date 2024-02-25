import { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
/*
Modified from icons (volume-high-outline and volume-mute-outline),
downloaded from ionic.io with MIT license.
*/
const Volume = () => {
  const ctx = useContext(Context);
  const [isOn, setIsOn] = useState(true);

  useEffect(() => {
    ctx.volumeIsOnState[1](isOn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOn]);

  return (
    <div className='volume' onClick={setIsOn.bind(null, !isOn)}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
        <path
          d='M126 192H56a8 8 0 00-8 8v112a8 8 0 008 8h69.65a15.93 15.93 0 0110.14 3.54l91.47 74.89A8 8 0 00240 392V120a8 8 0 00-12.74-6.43l-91.47 74.89A15 15 0 01126 192zM320 320c9.74-19.38 16-40.84 16-64 0-23.48-6-44.42-16-64M368 368c19.48-33.92 32-64.06 32-112s-12-77.74-32-112M416 416c30-46 48-91.43 48-160s-18-113-48-160'
          fill='none'
          stroke={isOn ? 'black' : 'var(--color-gray)'}
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='32'
        />
        <path
          fill='none'
          stroke={isOn ? 'none' : 'white'}
          stroke-linecap='round'
          stroke-miterlimit='10'
          stroke-width='128'
          d='M416 432L64 80'
        />
        <path
          fill='none'
          stroke={isOn ? 'none' : 'var(--color-gray)'}
          stroke-linecap='round'
          stroke-miterlimit='10'
          stroke-width='32'
          d='M416 432L64 80'
        />
      </svg>
    </div>
  );
};

export default Volume;
