/*
Play the metronome sounds from inside this hook.
Use the hook's callback function to update DOM
*/

import { useEffect, useRef, useState } from 'react';

export function useMetronome({
  callBack,
  delay,
  isMuted,
}: {
  callBack: () => void;
  delay: number | undefined;
  isMuted: boolean;
}) {
  // A way to use updated callback in every render
  // Thanks Dan Abramov for the idea!
  const savedCallback = useRef(callBack);
  useEffect(() => {
    savedCallback.current = callBack;
  });

  const [audioContext, setAudioContext] = useState<AudioContext>();
  const gainNodeRef = useRef<GainNode>();
  const clicksRef = useRef<{ osc: OscillatorNode | undefined; time: number }[]>(
    []
  );

  useEffect(() => {
    if (audioContext && !gainNodeRef.current) {
      gainNodeRef.current = audioContext.createGain();
      gainNodeRef.current.connect(audioContext.destination);
      gainNodeRef.current.gain.value = isMuted ? 0 : 1;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioContext]);

  useEffect(() => {
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = isMuted ? 0 : 1;
    }
  }, [isMuted]);

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
      // if (clicksRef.current.length) {
        latestClick = latestClick + delay! / 1000;
      // }
      const osc = createOscillator(latestClick);
      clicksRef.current.push({ osc, time: latestClick });
    }
  };

  // Schedule oscillator to play click.
  const clickLength = 0.018; // seconds
  const createOscillator = (time: number): OscillatorNode | undefined => {
    if (audioContext && gainNodeRef.current) {
      var osc = audioContext.createOscillator();
      osc.connect(gainNodeRef.current);
      osc.frequency.value = 2095; // C note at A=440Hz tuning: ~2093
      osc.start(time);
      osc.stop(time + clickLength);
      return osc;
    }
  };

  useEffect(
    () => {
      let previousScheduleTime: number | undefined;
      let animationFrameId: number | undefined = undefined;
      const loop = () => {
        if (audioContext && delay) {
          const now = audioContext.currentTime;
          if (!previousScheduleTime || now > previousScheduleTime + schedulingInterval) {
            scheduleClicks();
            previousScheduleTime = now;
          }

          if (
            clicksRef.current.length &&
            // give the visual side a small head start
            clicksRef.current[0].time < now + 0.1
            ) {
            // update DOM visual click when it is time
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
      // stop and remove clicks, cancel animationFrame
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
