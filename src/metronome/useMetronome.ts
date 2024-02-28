/*
Help from Dan Abramov:
https://overreacted.io/making-setinterval-declarative-with-react-hooks/
*/
import { useEffect, useRef } from 'react';
import { createMetronomeInstance } from './metronomeWorker';

export function useMetronome(callback: () => void, delay: number | undefined) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const metronome = createMetronomeInstance();
    metronome.postMessage(delay);
    metronome.onmessage = (message) => {
      savedCallback.current();
      document.getElementById('next')!.innerHTML = message.data;
    };
    // cleanup
    return () => metronome.terminate();
  }, [delay]);
}
