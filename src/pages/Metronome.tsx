import styles from './Metronome.module.scss';

import { ChangeEvent, useState } from 'react';
import Button from '../components/div-buttons/Button';

const min = 20;
const max = 300;

const Metronome = () => {
  const [play, setPlay] = useState(false);
  const [tempo, setTempo] = useState(60);

  const keyDownHandler = (code: string) => {
    console.log(code);
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
    console.log(tempo, newTempo);
    setTempo(newTempo);
  };
  const tempoDown = (number: number) => {
    const newTempo = tempo - number < min ? min : tempo - number;
    setTempo(newTempo);
  };

  const rangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTempo(Number(e.target.value));
  };

  return (
    <>
      <h2>metronome</h2>
      <div className={styles.metronome}>
        <p>Use arrow keys to change tempo.</p>
        <div className={styles.tempo}>{tempo}</div>
        <input
          tabIndex={-1}
          type='range'
          value={tempo}
          onChange={rangeHandler}
          min={min}
          max={max}
        />
        <div className={styles.plusminus}>
          <span
            tabIndex={0}
            onClick={tempoDown.bind(null, 10)}
            onKeyDown={(e) =>
              e.code === 'Space' || e.code === 'Enter'
                ? tempoDown(10)
                : keyDownHandler(e.code)
            }
          >
            -10
          </span>
          <span
            tabIndex={0}
            onClick={tempoDown.bind(null, 1)}
            onKeyDown={(e) =>
              e.code === 'Space' || e.code === 'Enter'
                ? tempoDown(1)
                : keyDownHandler(e.code)
            }
          >
            -1
          </span>
          <span
            tabIndex={0}
            onClick={tempoUp.bind(null, 1)}
            onKeyDown={(e) =>
              e.code === 'Space' || e.code === 'Enter'
                ? tempoUp(1)
                : keyDownHandler(e.code)
            }
          >
            +1
          </span>
          <span
            tabIndex={0}
            onClick={tempoUp.bind(null, 10)}
            onKeyDown={(e) =>
              e.code === 'Space' || e.code === 'Enter'
                ? tempoUp(10)
                : keyDownHandler(e.code)
            }
          >
            +10
          </span>
        </div>
        <Button
          onClick={setPlay.bind(null, !play)}
          onKeyDown={keyDownHandler}
          text={play ? 'Stop' : 'Start'}
          minWidth={8}
        />
      </div>
    </>
  );
};

export default Metronome;
