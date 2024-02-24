// import { useContext, useState } from 'react';
// import { generateChordSorted } from '../data/harmonies';
// import { Context } from '../context/Context';

import { useContext } from 'react';
import { Context } from '../context/Context';
import { generateChordSorted } from '../data/harmonies';

const ChordPlayer = () => {
  const ctx = useContext(Context);

  generateChordSorted({
    extensionLevels: ctx.extensionLevelsState[0],
    accidentalLevels: ctx.accidentalLevelsState[0],
  });

  return <h1>ChordPlayer</h1>;
};

// const ChordPlayer = () => {
//   const ctx = useContext(Context);
//   const [accidentalRange] = ctx.accidentalRangeState;

//   const [chordList, setChordList] = useState<string[]>([
//     generateChordSorted({ accidentalRange }),
//     generateChordSorted({ accidentalRange }),
//   ]);

//   const [chordIndex, setChordIndex] = useState<number>(0);

//   const nextHandler = () => {
//     if (chordIndex >= chordList.length - 2) {
//       setChordList([...chordList, generateChordSorted({ accidentalRange })]);
//     }
//     setChordIndex(chordIndex + 1);
//   };

//   const previousHandler = () => {
//     if (chordIndex > 0) setChordIndex(chordIndex - 1);
//   };

//   const resetHandler = () => {
//     setChordList([
//       generateChordSorted({ accidentalRange }),
//       generateChordSorted({ accidentalRange }),
//     ]);
//     setChordIndex(0);
//   };

//   return (
//     <div className='section'>
//       <h1>{chordList[chordIndex]}</h1>
//       <h2>{chordList[chordIndex + 1]}</h2>
//       {/* <button>Play/stop</button> */}
//       <button onClick={previousHandler}>Previous</button>
//       <button onClick={nextHandler}>Next</button>
//       <button onClick={resetHandler}>Reset</button>
//     </div>
//   );
// };

export default ChordPlayer;
