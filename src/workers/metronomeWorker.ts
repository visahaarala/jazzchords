const metronomeWorker = () => {
  // eslint-disable-next-line no-restricted-globals
  self.onmessage = (message) => {
    const delay = message.data as number;

    if (delay) {
      let previousNow = performance.now();
      // let previousNow = startTime;
      setInterval(() => {
        postMessage(Math.round(performance.now() - previousNow));
        previousNow = performance.now();
      }, delay);
    }
  };
};

export const createMetronomeInstance = () => {
  const code = metronomeWorker.toString();
  const blob = new Blob([`(${code})()`]);
  const instance = new Worker(URL.createObjectURL(blob));
  return instance;
};
