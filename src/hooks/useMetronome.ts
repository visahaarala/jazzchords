/*
Help from Dan Abramov:
https://overreacted.io/making-setinterval-declarative-with-react-hooks/
*/
import { useEffect, useRef } from 'react';
import { createMetronomeInstance } from '../workers/metronomeWorker';

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
    };
    // cleanup
    return () => metronome.terminate();
  }, [delay]);
}
