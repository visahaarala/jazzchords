import { Note } from '../../../@types';
import { noteIndex } from '../../../functions/noteFunctions';
import { noteBelowXOffset, notesCx } from './Notation';

const LedgerLine = ({
  note,
  dropOctave,
}: {
  note: Note;
  dropOctave: boolean;
}) => {
  const index = noteIndex(note) + (dropOctave ? -7 : 0);
  const y = 30 - index * 5;

  console.log(index, y);

  let cx = notesCx;
  if (note.hasNoteBelow) cx += noteBelowXOffset;

  const x1 = cx - 10;
  const x2 = x1 + 20;

  if (index <= 0 || index >= 12) {
    return (
      <path
        key={index}
        d={`M${x1} ${y} H${x2}`}
        fill='none'
        stroke='currentColor'
        strokeWidth={1}
      />
    );
  }
  return <></>;
};

export default LedgerLine;
