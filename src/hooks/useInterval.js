/*
Help from Dan Abramov:
https://overreacted.io/making-setinterval-declarative-with-react-hooks/
*/

import { useEffect, useRef } from 'react';

export function useInterval(callback, delay) {
  const savedCallback = useRef();
  // const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
