import styles from './Metronome.module.scss';

import { KeyboardEvent, useContext, useEffect, useState } from 'react';
import { useMetronome } from '../hooks/useMetronome';
import { MetronomeContext } from '../context/MetronomeContext';
import MetronomeMute from '../components/metronome/MetronomeMute';
import MetronomeLight from '../components/metronome/MetronomeLight';
import { isMobile } from '../App';
import TempoSlider from '../components/metronome/TempoSlider';

export const minTempo = 10;
export const maxTempo = 600;

// no flash if tempo greater than:
export const flashTempoLimit = 180;

const Metronome = () => {
  const ctx = useContext(MetronomeContext);
  const [tempo, setTempo] = ctx.tempoState;
  const [isMuted] = ctx.mutedState;
  const [flashIsOn, setFlashIsOn] = ctx.flashState;

  const [play, setPlay] = useState(false);
  const [delay, setDelay] = useState<number>();
  const isTouchingSliderState = useState(false);
  const [isTouchingSlider] = isTouchingSliderState;

  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    const code = e.code;
    if (code === 'Space' || code === 'Enter') {
      e.preventDefault();
      setPlay(!play);
    }
    if (code === 'ArrowUp') tempoUp(10);
    if (code === 'ArrowRight') tempoUp(1);
    if (code === 'ArrowDown') tempoDown(10);
    if (code === 'ArrowLeft') tempoDown(1);
  };

  const tempoUp = (number: number) => {
    const newTempo = tempo + number > maxTempo ? maxTempo : tempo + number;
    setTempo(newTempo);
    if (newTempo > flashTempoLimit) {
      setFlashIsOn(false);
    }
  };

  const tempoDown = (number: number) => {
    const newTempo = tempo - number < minTempo ? minTempo : tempo - number;
    setTempo(newTempo);
  };

  useEffect(() => {
    if (play && !isTouchingSlider) {
      setDelay((1000 * 60) / tempo);
    } else {
      setDelay(undefined);
    }
  }, [tempo, play, isTouchingSlider]);

  useMetronome({
    callBack: () => {
      if (flashIsOn) {
        document.getElementById('main')!.style.boxShadow =
          'inset 0 0 20rem #444';
      } else {
        document.getElementById('metronomeStart')!.style.filter =
          'brightness(1.5)';
      }
      setTimeout(() => {
        document.getElementById('main')!.style.boxShadow = 'none';
        document.getElementById('metronomeStart')!.style.filter =
          'brightness(1)';
      }, 100);
    },
    delay,
    isMuted,
  });

  return (
    <div className={styles.metronome}>
      <div className={styles.top}>
        <div
          className={`${styles.tempo} ${
            play && !isMobile ? styles.tempo__play : ''
          }`}
          tabIndex={!isMobile ? 0 : -1}
          onKeyDown={(e) => keyDownHandler(e)}
          onClick={setPlay.bind(null, !play)}
        >
          {tempo}
        </div>
      </div>
      <div className={styles.bottom}>
        {isMobile ? (
          <TempoSlider
            tempoUp={tempoUp}
            tempoDown={tempoDown}
            isTouchingSliderState={isTouchingSliderState}
          />
        ) : (
          <div className={styles.text}>
            <p>
              Click <code>start/stop</code> or <code>{tempo}</code>.
            </p>
            <p>
              Use <code>tab</code>, <code>arrows</code> & <code>space</code> for
              control.
            </p>
          </div>
        )}
        <div className={styles.toggles}>
          <MetronomeLight hide={tempo > flashTempoLimit} />
          <div
            id={'metronomeStart'}
            onClick={setPlay.bind(null, !play)}
            onKeyDown={(e) => keyDownHandler(e)}
            className={`button ${styles.start}`}
            tabIndex={isMobile ? -1 : 0}
            aria-label='start'
          >
            {play ? 'Stop' : 'Start'}
          </div>
          <MetronomeMute />
        </div>
      </div>
    </div>
  );
};

export default Metronome;
