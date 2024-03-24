import styles from './PlayControls.module.scss';
import { useContext, useEffect, useState } from 'react';
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

  // increment chord index,
  // add new chords to array if necessary
  const nextHandler = () => {
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

  // decrement chord index unless it is 0
  const previousHandler = () => {
    if (chordIndex > 0) setChordIndex((prevIndex) => prevIndex - 1);
  };

  // when bpc changes, reset beat
  useEffect(() => {
    setBeat(1);
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
              console.log('setBeat else');
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