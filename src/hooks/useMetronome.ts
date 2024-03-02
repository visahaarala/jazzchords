/*
Play the metronome sounds from inside this hook.
Use the hook's callback function to update DOM
*/

import { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../context/Context';

// -----------------
// TEMPORARY TESTING
// -----------------
// const nextText = (text: string) => {
//   document.getElementById('next')!.innerHTML = text;
// };

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

  const [isMuted] = useContext(Context).isMutedState;
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
      let previousScheduleTime = 0;
      let animationFrameId: number | undefined = undefined;
      // let frameCount = 0;
      const loop = () => {
        // --- this works on iPhone ---
        // frameCount++;
        // if (audioContext && frameCount % 60 === 0) {
        //   savedCallback.current();
        // }

        // --- this doesn't work on iPhone ---
        // because audioContext.currentTime is always 0
        // nextText('' + audioContext.currentTime);
        if (audioContext && delay) {
          const now = audioContext.currentTime;
          if (now > previousScheduleTime + schedulingInterval) {
            scheduleClicks();
            previousScheduleTime = now;
          }

          // update DOM visual click when it is time
          if (
            clicksRef.current.length &&
            // AnimationFrame is about 60Hz (~17ms per frame).
            // 0.008 is about half of that
            clicksRef.current[0].time < now + 0.008
          ) {
            savedCallback.current();
            clicksRef.current = clicksRef.current.slice(1);
          }
        }
        animationFrameId = requestAnimationFrame(loop);
      };

      // metronome runs only when delay is not undefined
      let intervalId: NodeJS.Timer;
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
        clearInterval(intervalId);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [delay, audioContext]
  );
}
