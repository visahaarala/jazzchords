import { useContext } from 'react';
import { Context } from '../context/Context';

const Chord = () => {
  const ctx = useContext(Context);

  return (
      <div className='section'>
        <div className='chord'>
          <h1>{ctx.chordState[0]}</h1>
        </div>
      </div>
  );
};

export default Chord;
