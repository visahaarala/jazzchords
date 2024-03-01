/*
Play the metronome sounds from inside this hook.
Use the hook's callback function to update DOM
*/

import { 
  // useContext, 
  useEffect, useRef, useState } from 'react';
// import { Context } from '../context/Context';

export function useMetronome({
  callBack,
  delay,
}: {
  callBack: () => void;
  delay: number | undefined;
}) {
  //
  // A way to update callback after every call.
  // (it is a problem with loop iterations inside useEffect)
  // Thanks to Dan Abramov for the idea!
  const savedCallback = useRef(callBack);
  useEffect(() => {
    savedCallback.current = callBack;
  });

  // const [isMuted] = useContext(Context).isMutedState;
  const [audioContext, setAudioContext] = useState<AudioContext>();

  // const volumeRef = useRef<GainNode>();
  const clicksRef = useRef<{ osc: OscillatorNode | undefined; time: number }[]>(
    []
  );

  // useEffect(() => {
  //   if (audioContext) {
  //     volumeRef.current = audioContext.createGain();
  //   }
  // }, [audioContext]);

  // useEffect(() => {
  //   if (volumeRef.current) {
  //     console.log('changeIsMuted');
  //     if (isMuted) {
  //       volumeRef.current.gain.value = 0.5;
  //     } else {
  //       volumeRef.current.gain.value = 1;
  //     }
  //   }
  // }, [isMuted]);

  //
  // Do the scheduling on 1 second interval
  // Schedule clicks 3 seconds ahead of time
  const schedulingInterval = 1; // seconds
  const schedulingPeriod = 3; // seconds
  const scheduleClicks = () => {
    const now = audioContext!.currentTime;
    let latestClick = now;
    if (clicksRef.current.length) {
      latestClick = clicksRef.current.slice(-1)[0].time;
    }
    while (latestClick < now + schedulingPeriod) {
      latestClick = latestClick + delay! / 1000;
      const osc = createOscillator(latestClick);
      clicksRef.current.push({ osc, time: latestClick });
    }
  };

  // set up clicks for playing
  const clickLength = 0.02; // seconds
  const createOscillator = (time: number): OscillatorNode | undefined => {
    // console.log('volume', volumeRef.current);
    if (
      audioContext
      // && volumeRef.current
    ) {
      var osc = audioContext.createOscillator();
      osc.connect(audioContext.destination);
      // osc.connect(volumeRef.current);
      osc.frequency.value = 880;
      osc.start(time);
      osc.stop(time + clickLength);
      return osc;
    }
  };

  useEffect(
    () => {
      let animationFrameId: number | undefined = undefined;
      let previousScheduleTime = 0;
      const loop = () => {
        if (audioContext && delay) {
          const now = audioContext.currentTime;
          if (now > previousScheduleTime + schedulingInterval) {
            scheduleClicks();
            previousScheduleTime = now;
          }

          // update DOM visual click when it is time
          if (
            clicksRef.current.length &&
            // AnimationFrame is 60Hz or more.
            // Thus below, animationframe can be almost 17ms late.
            // The "0.01" will give the visual metronome 10ms back.
            clicksRef.current[0].time < now + 0.01
          ) {
            savedCallback.current();
            clicksRef.current = clicksRef.current.slice(1);
          }
        }
        animationFrameId = requestAnimationFrame(loop);
      };

      // metronome runs only when delay is not undefined
      if (delay) {
        // start audioContext from first user play button click
        // (change in this useEffect's delay value)
        if (!audioContext) setAudioContext(new AudioContext());

        animationFrameId = requestAnimationFrame(loop);
      }

      // whenever delay changes
      return () => {
        clicksRef.current.forEach((c) => {
          c.osc?.stop();
        });
        clicksRef.current = [];
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [delay, audioContext]
  );
}
