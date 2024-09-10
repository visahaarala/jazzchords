import { useContext } from 'react';
import styles from './ChordDisplay.module.scss';
import { ChordsContext } from '../../../context/ChordsContext';
import ChordSymbol from '../../chord/ChordSymbol';
import Notation from '../../svg/notation/Notation';

const ChordDisplay = ({
  indexOffset,
  size,
  minWhiteKeyIndex,
  maxWhiteKeyIndex,
  randomOctave,
}: {
  indexOffset: number;
  size: number;
  minWhiteKeyIndex?: number;
  maxWhiteKeyIndex?: number;
  randomOctave?: boolean;
}): JSX.Element => {
  const {state} = useContext(ChordsContext);
  const { chords, chordIndex, showRandomTopNote } = state;

  const index = chordIndex + indexOffset;
  const topNote = chords[index].randomTopNote;
  if (topNote && showRandomTopNote) {
    return (
      <div className={styles.chord}>
        <ChordSymbol chord={chords[index]} size={size * 0.8} />
        <div style={{ width: size * 2.5 + 'rem' }}>
          <Notation
            notes={[topNote]}
            minWhiteKeyIndex={minWhiteKeyIndex}
            maxWhiteKeyIndex={maxWhiteKeyIndex}
            randomOctave={randomOctave}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.chord}>
        <ChordSymbol chord={chords[index]} size={size} />
      </div>
    );
  }
};

export default ChordDisplay;
