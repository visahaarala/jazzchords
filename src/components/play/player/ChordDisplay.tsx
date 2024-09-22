import { useContext } from 'react';
import styles from './ChordDisplay.module.scss';
import { ChordsContext } from '../../../context/ChordsContext';
import ChordSymbol from '../../chord/ChordSymbol';
import Notation from '../../svg/notation/Notation';
import { randomTopNoteToKeyIndex } from '../../../functions/noteFunctions';

const ChordDisplay = ({
  indexOffset,
  size,
}: {
  indexOffset: number;
  size: number;
}) => {
  const {
    chords,
    chordIndex,
    showRandomTopNote,
    playerClef,
    randomTopNoteMin,
    randomTopNoteMax,
  } = useContext(ChordsContext).state;

  const thisChordIndex = chordIndex + indexOffset;

  if (showRandomTopNote) {
    let topNote = chords[thisChordIndex].randomTopNote;
    if (playerClef === 'bass') {
      topNote = { ...topNote, octaveIndex: topNote.octaveIndex - 1 };
    }

    return (
      <div className={styles.chord}>
        <ChordSymbol chord={chords[thisChordIndex]} size={size * 0.8} />
        <Notation
          notes={[topNote]}
          clef={playerClef}
          width={size * 2.5}
          minWhiteKeyIndex={randomTopNoteToKeyIndex(randomTopNoteMin)}
          maxWhiteKeyIndex={randomTopNoteToKeyIndex(randomTopNoteMax)}
        />
      </div>
    );
  } else {
    return (
      <div className={styles.chord}>
        <ChordSymbol chord={chords[thisChordIndex]} size={size} />
      </div>
    );
  }
};

export default ChordDisplay;
