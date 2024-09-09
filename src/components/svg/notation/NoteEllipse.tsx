import { Note } from '../../../@types';
import { noteToIndex } from '../../../functions/noteFunctions';
import { noteBelowXOffset, notesCx, yStart } from './Notation';

const NoteEllipse = ({ note }: { note: Note }) => {
  const cy = yStart - noteToIndex(note) * 5;

  let cx = notesCx;
  if (note.hasNoteBelow) cx += noteBelowXOffset;

  const rxFactors = [0.9, 1, 1.15, 1.3];

  return rxFactors.map((rxf) => {
    return (
      <ellipse
        key={rxf}
        cy={cy}
        cx={cx}
        rx={5 * rxf}
        ry={4.8}
        fill='none'
        stroke='currentColor'
        strokeWidth={0.8}
      />
    );
  });
};

export default NoteEllipse;
