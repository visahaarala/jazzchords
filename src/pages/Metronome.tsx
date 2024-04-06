import styles from './Metronome.module.scss';

import { KeyboardEvent, useContext, useEffect, useState } from 'react';
import VolumeIcon from '../components/icons/settings/VolumeIcon';
import { useMetronome } from '../hooks/useMetronome';
import LightIcon from '../components/icons/settings/LightIcon';
import { MetronomeContext } from '../context/MetronomeContext';

const min = 20;
const max = 300;

const Metronome = () => {
  const isMobile = matchMedia('(pointer:coarse)').matches;

  const ctx = useContext(MetronomeContext);
  const [tempo, setTempo] = ctx.tempoState;
  const [isMuted, setIsMuted] = ctx.mutedState;
  const [flashIsOn, setFlashIsOn] = ctx.flashState;
  
  const [play, setPlay] = useState(false);
  const [delay, setDelay] = useState<number>();

  const keyDownHandler = (code: string) => {
    if (code === 'Space' || code === 'Enter') {
      setPlay(!play);
    }
    if (code === 'ArrowUp') tempoUp(10);
    if (code === 'ArrowRight') tempoUp(1);
    if (code === 'ArrowDown') tempoDown(10);
    if (code === 'ArrowLeft') tempoDown(1);
  };

  const tempoUp = (number: number) => {
    const newTempo = tempo + number > max ? max : tempo + number;
    setTempo(newTempo);
  };

  const tempoDown = (number: number) => {
    const newTempo = tempo - number < min ? min : tempo - number;
    setTempo(newTempo);
  };

  const rangeHandler = (number: string) => {
    setTempo(Number(number));
  };

  const volumeKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') setIsMuted(!isMuted);
    if (e.code === 'ArrowUp') setIsMuted(false);
    if (e.code === 'ArrowDown') setIsMuted(true);
  };

  const lightKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') setFlashIsOn(!flashIsOn);
    if (e.code === 'ArrowUp') setFlashIsOn(true);
    if (e.code === 'ArrowDown') setFlashIsOn(false);
  };

  useEffect(() => {
    if (play) {
      setDelay((1000 * 60) / tempo);
    } else {
      setDelay(undefined);
    }
  }, [tempo, play]);

  useMetronome({
    callBack: () => {
      if (flashIsOn) {
        document.getElementsByTagName('body')[0].style.filter =
          'invert(100%) hue-rotate(180deg)';
      } else {
        document.getElementById('metronomeStart')!.style.filter =
          'brightness(2)';
      }
      setTimeout(() => {
        if (flashIsOn) {
          document.getElementsByTagName('body')[0].style.filter =
            'invert(0) hue-rotate(0)';
        } else {
          document.getElementById('metronomeStart')!.style.filter =
            'brightness(1)';
        }
      }, 100);
    },
    delay,
    isMuted,
  });

  return (
    <>
      <div className={styles.metronome}>
        <div
          className={`${styles.tempo} ${
            play && !isMobile ? styles.tempo__play : ''
          }`}
          tabIndex={!isMobile ? 0 : -1}
          onKeyDown={(e) => keyDownHandler(e.code)}
        >
          {tempo}
        </div>
        {isMobile ? (
          <input
            className={styles.range}
            tabIndex={-1}
            type='range'
            value={tempo}
            onChange={(e) => rangeHandler(e.target.value)}
            min={min}
            max={max}
          />
        ) : (
          ''
        )}
        <div className={styles.grid}>
          {isMobile ? (
            <>
              <div onClick={tempoDown.bind(null, 5)} className='button'>
                -5
              </div>
              <div onClick={tempoDown.bind(null, 1)} className='button'>
                -1
              </div>
              <div onClick={tempoUp.bind(null, 1)} className='button'>
                +1
              </div>
              <div onClick={tempoUp.bind(null, 5)} className='button'>
                +5
              </div>
            </>
          ) : (
            <div className={styles.text}>
              <p>
                Click <code>start/stop</code> or <code>{tempo}</code>.
              </p>
              <p>
                Use <code>Arrows</code>, <code>Space</code>, & <code>Tab</code>{' '}
                for control.
              </p>
            </div>
          )}
          <div className={styles.icon}>
            <LightIcon
              onClick={setFlashIsOn.bind(null, !flashIsOn)}
              onKeyDown={lightKeyDownHandler}
              isOn={flashIsOn}
            />
          </div>
          <div
            id={'metronomeStart'}
            onClick={setPlay.bind(null, !play)}
            onKeyDown={(e) => keyDownHandler(e.code)}
            className={`button ${styles.start}`}
            tabIndex={isMobile ? -1 : 0}
          >
            {play ? 'Stop' : 'Start'}
          </div>
          <div className={styles.icon}>
            <VolumeIcon
              onClick={setIsMuted.bind(null, !isMuted)}
              onKeyDown={volumeKeyDownHandler}
              isMuted={isMuted}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Metronome;
