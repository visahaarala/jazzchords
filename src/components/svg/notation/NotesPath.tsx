import { Note } from '../../../@types';
import { noteToWhiteKeyIndex } from '../../../functions/noteFunctions';

const NotesPath = ({
  notes,
  yLowC,
  noteBelowOffsetX,
  notesCx,
}: {
  notes: Note[];
  yLowC: number;
  noteBelowOffsetX: number;
  notesCx: number;
}) =>
  notes.map((note) => {
    const cy = yLowC - noteToWhiteKeyIndex(note) * 5;
    let cx = notesCx;
    if (note.hasNoteBelow) cx += noteBelowOffsetX;
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
  });

export default NotesPath;
