import { Clef, Note } from '../../../@types';
import {
  noteToWhiteKeyIndex,
  stringToKey,
  whiteKeys,
} from '../../../functions/noteFunctions';
import AccidentalsPath from './AccidentalsPath';
import TrebleClefPath from './TrebleClefPath';
import NotesPath from './NotesPath';
import StaffLinesPath from './StaffLinesPath';
import LedgerLinesPath from './LedgerLinesPath';
import BassClefPath from './BassClefPath';

const Notation = ({
  notes,
  clef,
  width,
  minWhiteKeyIndex,
  maxWhiteKeyIndex,
}: {
  notes: Note[];
  clef: Clef;
  width: number;
  minWhiteKeyIndex?: number;
  maxWhiteKeyIndex?: number;
}) => {
  const oneNote = notes.length === 1;
  const yListStaff = [-20, -10, 0, 10, 20];
  const noteBelowOffsetX = 12;
  const notesCx = oneNote ? 75 : 108;

  // treble clef C below staff
  // same note as bass clef C above staff
  // or "C4" in scientific/international octave names
  const yLowC = clef === 'treble' ? 30 : -30;

  //
  // if noteName is at or above treshold, drop an octave
  const dropOctaveTresholdWhiteKeyIndex = clef === 'treble' ? 4 : 3;
  const dropOctave =
    whiteKeys.indexOf(stringToKey(notes[0].noteName).base) >=
    dropOctaveTresholdWhiteKeyIndex
      ? true
      : false;
  const adjustedNotes = notes.map((note) => {
    if (oneNote) return note;
    return {
      ...note,
      octaveIndex: dropOctave ? note.octaveIndex - 1 : note.octaveIndex,
    };
  });

  if (minWhiteKeyIndex !== undefined) {
    for (const note of adjustedNotes) {
      while (noteToWhiteKeyIndex(note) < minWhiteKeyIndex) {
        note.octaveIndex++;
      }
    }
  }

  if (maxWhiteKeyIndex !== undefined) {
    for (const note of adjustedNotes) {
      while (noteToWhiteKeyIndex(note) > maxWhiteKeyIndex) {
        note.octaveIndex--;
      }
    }
  }

  return (
    <div style={{ width: width + 'rem' }}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox={oneNote ? '10 -55 80 110' : '10 -80 125 140'}
        style={{ backgroundColor: 'orangered' }}
      >
        <StaffLinesPath x={10} yList={yListStaff} h={oneNote ? 90 : 125} />
        {clef === 'bass' && <BassClefPath />}
        {clef === 'treble' && <TrebleClefPath />}
        <NotesPath
          notes={adjustedNotes}
          yLowC={yLowC}
          noteBelowOffsetX={noteBelowOffsetX}
          notesCx={notesCx}
        />
        <LedgerLinesPath
          notes={adjustedNotes}
          clef={clef}
          yLowC={yLowC}
          notesCx={notesCx}
          noteBelowOffsetX={noteBelowOffsetX}
        />
        <AccidentalsPath
          notes={adjustedNotes}
          yLowC={yLowC}
          notesCx={notesCx}
        />
      </svg>
    </div>
  );
};

export default Notation;
