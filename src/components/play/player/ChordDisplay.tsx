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
}: {
  indexOffset: number;
  size: number;
  minWhiteKeyIndex?: number;
  maxWhiteKeyIndex?: number;
}) => {
  const { state } = useContext(ChordsContext);
  const { chords, chordIndex, showRandomTopNote, playerClef } = state;

  const index = chordIndex + indexOffset;
  const topNote = chords[index].randomTopNote;
  if (topNote && showRandomTopNote) {
    return (
      <div className={styles.chord}>
        <ChordSymbol chord={chords[index]} size={size * 0.8} />
        <Notation
          notes={[topNote]}
          clef={playerClef}
          width={size * 2.5}
          minWhiteKeyIndex={minWhiteKeyIndex}
          maxWhiteKeyIndex={maxWhiteKeyIndex}
        />
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
