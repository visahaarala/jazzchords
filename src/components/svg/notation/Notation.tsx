import { useContext } from 'react';
import { ChordsContext } from '../../../context/ChordsContext';
import { extensionToString, keyToString } from '../../../data/chordFunctions';

const Notation = () => {
  const { state } = useContext(ChordsContext);
  const key = state.notationKey;
  const extension = state.notationExtension;

  return (
    <p>
      {keyToString(key)}
      {extensionToString(extension)}
    </p>
  );
};

export default Notation;
