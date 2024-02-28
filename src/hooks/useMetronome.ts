/*
Help from Dan Abramov:
https://overreacted.io/making-setinterval-declarative-with-react-hooks/
*/

import { useEffect, useRef } from 'react';
import { createMetronomeInstance } from '../workers/metronomeWorker';

export function useMetronome(callback: () => void, delay: number | undefined) {
  // update callback from every tick
  const savedCallback = useRef(callback);
  // const savedPerformanceNowTime = useRef(Math.round(performance.now()));

  useEffect(() => {
    // console.log('saving callback every re-render');
    // console.log(savedPerformanceNowTime, Math.round(performance.now()));
    savedCallback.current = callback;
  });

  useEffect(() => {
    const metronome = createMetronomeInstance();
    const testP = document.getElementById('test')!;

    metronome.postMessage(delay);

    metronome.onmessage = (message) => {
      testP.innerHTML = message.data;
      savedCallback.current();
    };

    // cleanup
    return () => metronome.terminate();

    // function tick() {
    //   savedCallback.current();
    // }

    // let id = setInterval(tick, delay);
    // return () => clearInterval(id);
  }, [delay]);
}
