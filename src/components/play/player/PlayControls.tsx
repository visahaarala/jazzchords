import styles from './PlayControls.module.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import { ChordsContext } from '../../../context/ChordsContext';
import { useMetronome } from '../../../hooks/useMetronome';
import PlayButton from './PlayButton';
import PlayIcon from '../../svg/icons/PlayIcon';
import PauseIcon from '../../svg/icons/PauseIcon';
import PreviousIcon from '../../svg/icons/PreviousIcon';
import NextIcon from '../../svg/icons/NextIcon';

const PlayControls = () => {
  const { state, dispatch } = useContext(ChordsContext);
  const {
    chords: chordList,
    chordIndex,
    beatsPerMinute,
    beatsPerChord,
    beat,
    isMuted,
  } = state;
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
    } else {
      dispatch({ type: 'INCREMENT_CHORD_INDEX' });
    }
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
        playButton.style.filter = 'brightness(2)';
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
        }, 100);
      }
    },
    delay: play ? (60 / Number(beatsPerMinute)) * 1000 : undefined,
    isMuted,
  });

  return (
    <div className={styles.controls}>
      <PlayButton
        onClick={() => setPlay(!play)}
        icon={play ? <PauseIcon /> : <PlayIcon />}
        id='play' // for click light
      />
      <PlayButton
        onClick={previousHandler}
        disabled={state.chordIndex === 0}
        icon={<PreviousIcon />}
      />
      <PlayButton onClick={nextHandler} icon={<NextIcon />} />
    </div>
  );
};

export default PlayControls;
