import { Note } from '../../../@types';
import { stringToKey, whiteKeys } from '../../../functions/noteFunctions';
import Accidentals from './Accidentals';
import GClefCurve from './GClefCurve';
import LedgerLines from './LedgerLines';
import Notes from './Notes';
import StaffLines from './StaffLines';

const Notation = ({ notes }: { notes: Note[] }) => {
  console.log(notes.map((note) => note.noteName));

  const yListStaff = [-20, -10, 0, 10, 20];
  const noteBelowOffsetX = 12;
  const notesCx = 100;
  const yLowC = 30; // the low C

  const dropOctave =
    // if base is G or above, drop an octave
    whiteKeys.indexOf(stringToKey(notes[0].noteName).base) >= 4 ? true : false;

  const adjustedNotes = notes.map((note) => {
    return { ...note, octave: dropOctave ? note.octave - 1 : note.octave };
  });

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -60 140 120'
      style={{ backgroundColor: 'orangered' }}
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
