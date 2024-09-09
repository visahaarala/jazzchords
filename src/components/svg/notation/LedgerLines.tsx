import { Note } from '../../../@types';
import { noteToIndex } from '../../../functions/noteFunctions';

const LedgerLines = ({
  notes,
  noteBelowOffsetX,
  notesCx,
}: {
  notes: Note[];
  noteBelowOffsetX: number;
  notesCx: number;
}) => {
  const noteIndices = notes.map((note) => noteToIndex(note));

  const ledgerLines = (): { index: number; hasNoteBelow: boolean }[] => {
    // add all notes for hasNoteBelow information
    const rs = notes.map((note) => ({
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
    return <></>;
  });
};

export default LedgerLines;
