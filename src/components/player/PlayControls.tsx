import styles from './PlayControls.module.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import { ReducerContext } from '../../context/ReducerContext';
import { useMetronome } from '../../hooks/useMetronome';
import PlayButton from './PlayButton';

const PlayControls = () => {
  const { state, dispatch } = useContext(ReducerContext);
  const { chordList, chordIndex, beatsPerMinute, beatsPerChord, beat } = state;
  const [play, setPlay] = useState<boolean>(false);
  const wakeLock = useRef<WakeLockSentinel>();

  // prevent display sleep while metronome playing
  // works on newer desktop browsers (not Firefox)
  useEffect(() => {
    if ('wakeLock' in navigator && play) {
      try {
        navigator.wakeLock.request().then((wl) => {
          wakeLock.current = wl;
        });
      } catch (e) {
        console.error('wakeLock failed:', e);
      }
    }
    return () => {
      wakeLock.current?.release();
    };
  }, [play]);

  const nextHandler = () => {
    if (chordIndex >= chordList.length - 2) {
      dispatch({ type: 'APPEND_CHORD_LIST' });
    }
    dispatch({ type: 'INCREMENT_CHORD_INDEX' });
  };

  const previousHandler = () => {
    if (chordIndex > 0) {
      dispatch({ type: 'DECREMENT_CHORD_INDEX' });
    }
  };

  useMetronome({
    callBack: () => {
      if (play) {
        const playButton = document.getElementById('play')!;
        playButton.style.filter = 'brightness(1.4)';
        setTimeout(() => {
          playButton.style.filter = 'brightness(1)';
          if (beatsPerChord != '∞') {
            const bpc = Number(beatsPerChord);
            if (beat !== 0 && beat % bpc === 0) {
              nextHandler();
              dispatch({ type: 'SET_BEAT', payload: { beat: 1 } });
            } else {
              dispatch({ type: 'INCREMENT_BEAT' });
            }
          }
        }, 50);
      }
    },
    delay: play ? (60 / Number(beatsPerMinute)) * 1000 : undefined,
  });

  return (
    <div className={styles.controls}>
      <div>
        <PlayButton
          onClick={() => setPlay(!play)}
          type={play ? 'pause' : 'play'}
          id='play'
        />
        <PlayButton onClick={previousHandler} type='prev' />
      </div>
      <div>
        <PlayButton onClick={nextHandler} type='next' />
      </div>
    </div>
  );
};

export default PlayControls;
