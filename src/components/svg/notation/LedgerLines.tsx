import { Note } from '../../../@types';
import { noteToWhiteKeyIndex } from '../../../functions/noteFunctions';

const LedgerLines = ({
  notes,
  noteBelowOffsetX,
  notesCx,
}: {
  notes: Note[];
  noteBelowOffsetX: number;
  notesCx: number;
}) => {
  const noteIndices = notes.map((note) => noteToWhiteKeyIndex(note));

  const ledgerLines = (): { index: number; hasNoteBelow?: boolean }[] => {
    // add all notes for hasNoteBelow information
    const rs = notes.map((note) => ({
      index: noteToWhiteKeyIndex(note),
      hasNoteBelow: note.hasNoteBelow,
    }));

    const highest = noteIndices.slice(-1)[0];
    const lowest = noteIndices[0];

    // add missing even indices from 12 to the highest
    for (let i = 12; i <= highest; i += 2) {
      if (!rs.map((ll) => ll.index).includes(i)) {
        rs.push({ index: i, hasNoteBelow: false });
      }
    }

    // add missing even indices from 0 to the lowest
    for (let i = 0; i >= lowest; i -= 2) {
      if (!rs.map((ll) => ll.index).includes(i)) {
        rs.push({ index: i, hasNoteBelow: false });
      }
    }

    return rs;
  };

  return ledgerLines().map((ledgerLine) => {
    const index = ledgerLine.index;
    let y = 30 - index * 5;
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
    if (index <= 0 || index >= 12) {
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

export default LedgerLines;
