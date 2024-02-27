import { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import { generateChord, generateChords } from '../data/harmonies';
import { useInterval } from '../hooks/useInterval';

const PlayControls = () => {
  const ctx = useContext(Context);
  const [chordList, setChordList] = ctx.chordListState;
  const [chordIndex, setChordIndex] = ctx.chordIndexState;
  const [beatsPerMinute] = ctx.beatsPerMinuteState;
  const [beatsPerChord] = ctx.beatsPerChordState;
  const [play, setPlay] = useState<boolean>(false);
  const [beat, setBeat] = useState(1);

  const generatorProps = {
    extensionLevels: ctx.extensionLevelsState[0],
    accidentalLevels: ctx.accidentalLevelsState[0],
  };

  // reset chord list when chord settings are changed
  useEffect(() => {
    setChordList(generateChords({ ...generatorProps, numberOfChords: 2 }));
    setChordIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctx.extensionLevelsState[0], ctx.accidentalLevelsState[0]]);

  const nextHandler = () => {
    if (chordIndex >= chordList.length - 2) {
      setChordList((prevList) => [
        ...prevList,
        generateChord({ ...generatorProps }),
      ]);
    }
    setChordIndex((prevIndex) => prevIndex + 1);
  };

  const previousHandler = () => {
    if (chordIndex > 0) setChordIndex((prevIndex) => prevIndex - 1);
  };

  // Dan Abramov's useInterval hook
  // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  useInterval(
    () => {
      if (play) {
        const playButton = document.getElementById('play')!;
        playButton.style.filter = 'brightness(2)';
        setTimeout(() => {
          playButton.style.filter = 'brightness(1)';
          if (beat % beatsPerChord === 0) {
            nextHandler();
            setBeat(1);
          } else {
            setBeat((prevBeat) => prevBeat + 1);
          }
        }, 50);
      }
    },
    play ? (60 / beatsPerMinute) * 1000 : 9999999 // 10k seconds
  );

  return (
    <div className='section'>
      <div className='buttons'>
        <div>
          <button onClick={nextHandler} className='next'>
            Next
          </button>
          <div>
            <button onClick={previousHandler}>Previous</button>
            <div>
              <button
                onClick={() => {
                  setBeat(1);
                  setPlay(!play);
                }}
                id='play'
              >
                {!play ? 'Play' : 'Stop'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayControls;
