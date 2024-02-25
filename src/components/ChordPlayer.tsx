// import { useContext, useState } from 'react';
// import { generateChordSorted } from '../data/harmonies';
// import { Context } from '../context/Context';

import { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import { generateChordSorted } from '../data/harmonies';

const ChordPlayer = () => {
  const ctx = useContext(Context);
  const generatorProps = {
    extensionLevels: ctx.extensionLevelsState[0],
    accidentalLevels: ctx.accidentalLevelsState[0],
  };
  const [chordList, setChordList] = useState<string[]>([]);
  const [chordIndex, setChordIndex] = useState<number>(0);
  const [play, setPlay] = useState<boolean>(false);

  useEffect(() => {
    resetHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctx.extensionLevelsState[0], ctx.accidentalLevelsState[0]]);

  const nextHandler = () => {
    if (chordIndex >= chordList.length - 2) {
      setChordList([...chordList, generateChordSorted(generatorProps)]);
    }
    setChordIndex(chordIndex + 1);
  };

  const previousHandler = () => {
    if (chordIndex > 0) setChordIndex(chordIndex - 1);
  };

  const resetHandler = () => {
    setChordList([
      generateChordSorted(generatorProps),
      generateChordSorted(generatorProps),
    ]);
    setChordIndex(0);
  };

  console.log('chordList: ', chordList);

  return (
    <div className='section'>
      <div className='chords'>
        <h1>{chordList[chordIndex]}</h1>
        <h3>{chordList[chordIndex + 1]}</h3>
      </div>
      <div className='buttons'>
        <button onClick={nextHandler}>Next</button>
        <div className='buttons__half'>
          <button onClick={setPlay.bind(null, !play)}>
            {!play ? 'Play' : 'Stop'}
          </button>
          <button onClick={previousHandler}>Previous</button>
        </div>
      </div>
    </div>
  );
};

export default ChordPlayer;
