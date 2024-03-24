import styles from './PlayControls.module.scss';
import { useContext, useEffect, useReducer, useRef, useState } from 'react';
import { Context } from '../../context/Context';
import { generateChords } from '../../data/harmonies';
import { useMetronome } from '../../hooks/useMetronome';
import PlayButton from './PlayButton';

const PlayControls = () => {
  const ctx = useContext(Context);
  const [chordList, setChordList] = ctx.chordListState;
  const [chordIndex, setChordIndex] = ctx.chordIndexState;
  const [beatsPerMinute] = ctx.beatsPerMinuteState;
  const [beatsPerChord] = ctx.beatsPerChordState;
  const [play, setPlay] = useState<boolean>(false);
  const [beat, setBeat] = ctx.beatState;

  const wakeLock = useRef<WakeLockSentinel>();

  // prevent display sleep while metronome playing
  // works on newer desktop browsers (not Firefox)
  useEffect(() => {
    if ('wakeLock' in navigator && play) {
      try {
        navigator.wakeLock.request().then((wl) => {
          wakeLock.current = wl;
          // console.log('setup', wakeLock.current);
        });
      } catch (e) {
        console.log(e);
      }
    }
    return () => {
      wakeLock.current?.release();
      // console.log('close', wakeLock.current);
    };
  }, [play]);

  const nextHandler = () => {
    // increment chord index,
    // add new chords to array if necessary
    if (chordIndex >= chordList.length - 2) {
      setChordList((prevList) => [
        ...prevList,
        generateChords({
          extensionRange: ctx.extensionRange,
          accidentalRange: ctx.accidentalRange,
          numberOfChords: 1,
        })[0],
      ]);
    }
    setChordIndex((prevIndex) => prevIndex + 1);
  };

  const previousHandler = () => {
    // decrement chord index unless it is 0
    if (chordIndex > 0) setChordIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    // when bpc changes, reset beat
    setBeat(0);
  }, [beatsPerChord]);

  useMetronome({
    callBack: () => {
      if (play) {
        const playButton = document.getElementById('play')!;
        playButton.style.filter = 'brightness(1.4)';
        setTimeout(() => {
          playButton.style.filter = 'brightness(1)';
          if (beatsPerChord != '∞') {
            const bpc = beatsPerChord as number;
            if (beat !== 0 && beat % bpc === 0) {
              nextHandler();
              setBeat(1);
            } else {
              setBeat((prevBeat) => prevBeat + 1);
            }
          }
        }, 50);
      }
    },
    delay: play ? (60 / beatsPerMinute) * 1000 : undefined,
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
