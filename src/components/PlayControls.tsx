import { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import { generateChordSorted } from '../data/harmonies';

const PlayControls = () => {
  const ctx = useContext(Context);
  const setChord = ctx.chordState[1];

  const generatorProps = {
    extensionLevels: ctx.extensionLevelsState[0],
    accidentalLevels: ctx.accidentalLevelsState[0],
  };
  const [chordList, setChordList] = useState<string[]>([]);
  const [chordIndex, setChordIndex] = useState<number>(0);
  const [play, setPlay] = useState<boolean>(false);
  const [beatsPerMinute] = ctx.beatsPerMinuteState;
  const [beatsPerChord] = ctx.beatsPerChordState;

  useEffect(() => {
    setChordList([generateChordSorted(generatorProps)]);
    setChordIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctx.extensionLevelsState[0], ctx.accidentalLevelsState[0]]);

  useEffect(() => {
    if (play) {
      let beat = 1;
      const intervalId = setInterval(() => {
        console.log('changeChord');
        const play = document.getElementById('play')!;
        play.style.filter = 'brightness(2)';
        setTimeout(() => {
          play.style.filter = 'brightness(1)';
          if (beat % beatsPerChord === 0) {
            nextHandler();
          }
          beat = beat + 1;
        }, 50);
      }, (60 / beatsPerMinute) * 1000);
      return () => {
        // useEffect cleanup function
        clearInterval(intervalId);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play, beatsPerMinute, beatsPerChord]);

  useEffect(() => {
    setChord(chordList[chordIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chordList, chordIndex]);

  const nextHandler = () => {
    if (chordIndex >= chordList.length - 1) {
      setChordList([...chordList, generateChordSorted(generatorProps)]);
    }
    setChordIndex(chordIndex + 1);
  };

  const previousHandler = () => {
    if (chordIndex > 0) setChordIndex(chordIndex - 1);
  };

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
              <button onClick={setPlay.bind(null, !play)} id='play'>
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
