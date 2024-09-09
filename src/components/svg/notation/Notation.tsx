import { LedgerLineType, Note } from '../../../@types';
import {
  noteToIndex,
  stringToKey,
  whiteKeys,
} from '../../../functions/noteFunctions';
import Accidental from './Accidental';
import GClefCurve from './GClefCurve';
import LedgerLine from './Ledgerline';
import NoteEllipse from './NoteEllipse';
import StaffLine from './StaffLine';

export const noteBelowXOffset = 12;
export const notesCx = 100;
export const yStart = 30; // the low C

const Notation = ({ notes }: { notes: Note[] }) => {
  console.log(notes.map((note) => note.noteName));

  const staffY = [-20, -10, 0, 10, 20];

  const dropOctave =
    // if base is G or above, drop an octave
    whiteKeys.indexOf(stringToKey(notes[0].noteName).base) >= 4 ? true : false;

  const adjustedNotes = notes.map((note) => {
    return { ...note, octave: dropOctave ? note.octave - 1 : note.octave };
  });

  const noteIndices = adjustedNotes.map((note) => noteToIndex(note));

  const ledgerLines = (): LedgerLineType[] => {
    // add all notes for hasNoteBelow information
    const rs = adjustedNotes.map((note) => ({
      index: noteToIndex(note),
      hasNoteBelow: note.hasNoteBelow,
    }));

    // add missing even indices in between highest & lowest
    const highest = noteIndices.splice(-1)[0];
    const lowest = noteIndices[0];
    let index = Math.floor((lowest + 1) / 2) * 2;
    while (index <= highest) {
      if (!rs.map((ll) => ll.index).includes(index)) {
        rs.push({ index, hasNoteBelow: false });
      }
      index += 2;
    }
    return rs;
  };

  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -60 130 120'>
      {staffY.map((y) => (
        <StaffLine y={y} key={y} />
      ))}

      <GClefCurve />

      {adjustedNotes.map((note) => (
        <NoteEllipse note={note} key={note.noteName} />
      ))}

      {adjustedNotes.map((note) => (
        <Accidental note={note} key={note.noteName} />
      ))}

      {ledgerLines().map((ledgerLine) => (
        <LedgerLine ledgerLine={ledgerLine} key={ledgerLine.index} />
      ))}
    </svg>
  );
};

export default Notation;
