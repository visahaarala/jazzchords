import { Clef, Note } from '../../../@types';
import { noteToWhiteKeyIndex } from '../../../functions/noteFunctions';

const LedgerLinesPath = ({
  notes,
  clef,
  noteBelowOffsetX,
  notesCx,
  yLowC,
}: {
  notes: Note[];
  clef: Clef;
  noteBelowOffsetX: number;
  notesCx: number;
  yLowC: number;
}) => {
  const noteIndices = notes.map((note) => noteToWhiteKeyIndex(note));

  const lowestLedgerIndexAboveStaff = clef === 'treble' ? 12 : 7;
  const highestLedgerIndexBelowStaff = clef === 'treble' ? 0 : -5;

  const ledgerLines = (): { index: number; hasNoteBelow?: boolean }[] => {
    // add all notes for hasNoteBelow information
    const rs = notes.map((note) => ({
      index: noteToWhiteKeyIndex(note),
      hasNoteBelow: note.hasNoteBelow,
    }));

    const highest = noteIndices.slice(-1)[0];
    const lowest = noteIndices[0];

    // add missing even indices from 12 to the highest
    for (let i = lowestLedgerIndexAboveStaff; i <= highest; i += 2) {
      if (!rs.map((ll) => ll.index).includes(i)) {
        rs.push({ index: i, hasNoteBelow: false });
      }
    }

    // add missing even indices from 0 to the lowest
    for (let i = highestLedgerIndexBelowStaff; i >= lowest; i -= 2) {
      if (!rs.map((ll) => ll.index).includes(i)) {
        rs.push({ index: i, hasNoteBelow: false });
      }
    }

    return rs;
  };

  return ledgerLines().map((ledgerLine) => {
    const index = ledgerLine.index;
    let y = yLowC - index * 5;
    // place ledger line in every other height, continuing staff
    if (y > 0) {
      y = Math.floor(y / 10) * 10;
    } else {
      y = Math.floor((y + 5) / 10) * 10;
    }
    // center x
    let cx = notesCx;
    if (ledgerLine.hasNoteBelow) {
      cx += noteBelowOffsetX;
    }
    const halfWidth = 10;
    if (index <= highestLedgerIndexBelowStaff || index >= lowestLedgerIndexAboveStaff) {
      return (
        <path
          key={index}
          d={`M${cx - halfWidth} ${y} H${cx + halfWidth}`}
          fill='none'
          stroke='currentColor'
          strokeWidth={1}
        />
      );
    }
    return '';
  });
};

export default LedgerLinesPath;
