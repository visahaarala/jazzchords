import { Note } from '../../../@types';
import {
  stringToKey,
  whiteKeys,
} from '../../../functions/noteFunctions';
import GClefCurve from './GClefCurve';
import LedgerLine from './Ledgerline';
import NoteEllipse from './Note';
import StaffLine from './StaffLine';

export const noteBelowXOffset = 10;
export const notesCx = 80;

const Notation = ({ notes }: { notes: Note[] }) => {
  const staffY = [-20, -10, 0, 10, 20];
  const rxFactors = [0.9, 1, 1.15, 1.3];

  const dropOctave =
    // if G or above, drop an octave
    whiteKeys.indexOf(stringToKey(notes[0].noteName).base) >= 4 ? true : false;

  // const noteIndices = notes.map((note) => noteIndex(note));

  const ledgerLines = (): Note[] => {
    const ledgerLines: Note[] = [];
    for (const note of notes) {
      ledgerLines.push(note);
    }
    return ledgerLines;
  };

  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -60 160 120'>
      {staffY.map((y) => (
        <StaffLine y={y} key={y} />
      ))}

      <GClefCurve />

      {rxFactors.map((f) =>
        notes.map((note) => (
          <NoteEllipse
            note={note}
            rxFactor={f}
            key={Math.random()}
            dropOctave={dropOctave}
          />
        ))
      )}

      {ledgerLines().map((note) => (
        <LedgerLine note={note} key={Math.random()} dropOctave={dropOctave} />
      ))}

      {/* <Flat /> */}

      {/* {} */}
    </svg>
  );
};

export default Notation;
