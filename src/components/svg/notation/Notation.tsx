import { Note } from '../../../@types';
import {
  noteToWhiteKeyIndex,
  stringToKey,
  whiteKeys,
} from '../../../functions/noteFunctions';
import Accidentals from './Accidentals';
import GClefCurve from './GClefCurve';
import LedgerLines from './LedgerLines';
import Notes from './Notes';
import StaffLines from './StaffLines';

const Notation = ({
  notes,
  minWhiteKeyIndex,
  maxWhiteKeyIndex,
  randomOctave,
}: {
  notes: Note[];
  minWhiteKeyIndex?: number;
  maxWhiteKeyIndex?: number;
  randomOctave?: boolean;
}) => {
  const oneNote = notes.length === 1;

  const yListStaff = [-20, -10, 0, 10, 20];
  const noteBelowOffsetX = 12;
  const notesCx = oneNote ? 75 : 103;
  const yLowC = 30; // the low C

  const dropOctave =
    // if base is G or above, drop an octave
    whiteKeys.indexOf(stringToKey(notes[0].noteName).base) >= 4 ? true : false;

  let adjustedNotes = notes.map((note) => {
    return {
      ...note,
      octaveIndex: dropOctave ? note.octaveIndex - 1 : note.octaveIndex,
    };
  });

  if (randomOctave) {
    for (const note of adjustedNotes) {
      note.octaveIndex += Math.floor(Math.random() * 3) - 1;
    }
  }

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
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={oneNote ? '0 -60 90 120' : '0 -60 140 120'}
    >
      <StaffLines x={10} yList={yListStaff} h={120} />
      <GClefCurve />
      <Notes
        notes={adjustedNotes}
        yLowC={yLowC}
        noteBelowOffsetX={noteBelowOffsetX}
        notesCx={notesCx}
      />
      <LedgerLines
        notes={adjustedNotes}
        notesCx={notesCx}
        noteBelowOffsetX={noteBelowOffsetX}
      />
      <Accidentals notes={adjustedNotes} yLowC={yLowC} notesCx={notesCx} />
    </svg>
  );
};

export default Notation;
