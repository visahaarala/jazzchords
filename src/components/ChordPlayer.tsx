import { useState } from 'react';
import { generateChord } from '../data/harmonies';

const ChordPlayer = () => {
  const [chord, setChord] = useState<string[]>([
    generateChord(),
    generateChord(),
  ]);

  const nextHandler = () => {
    setChord([chord[1], generateChord()]);
  };

  return (
    <div className='section'>
      <h1>{chord[0]}</h1>
      <h2>{chord[1]}</h2>
      <button>Play/stop</button>
      <button onClick={nextHandler}>Previous</button>
      <button>Next</button>
      <button>Reset chord memory</button>
    </div>
  );
};

export default ChordPlayer;
