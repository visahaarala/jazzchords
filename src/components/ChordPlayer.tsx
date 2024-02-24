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

  useEffect(() => {
    resetHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctx]);

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
      <h1>{chordList[chordIndex]}</h1>
      <p>{chordList[chordIndex + 1]}</p>
      {/* <button>Play/stop</button> */}
      <button onClick={previousHandler}>Previous</button>
      <button onClick={nextHandler}>Next</button>
      {/* <button onClick={resetHandler}>Reset</button> */}
    </div>
  );
};

export default ChordPlayer;
