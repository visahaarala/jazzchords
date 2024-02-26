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

  useEffect(() => {
    setChordList([generateChordSorted(generatorProps)]);
    setChordIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctx.extensionLevelsState[0], ctx.accidentalLevelsState[0]]);

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
              <button onClick={setPlay.bind(null, !play)}>
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
