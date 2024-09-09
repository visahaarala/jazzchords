import { Note } from '../../../@types';
import { noteIndex } from '../../../functions/noteFunctions';
import { noteBelowXOffset, notesCx } from './Notation';

const NoteEllipse = ({
  note,
  rxFactor,
  dropOctave,
}: {
  note: Note;
  rxFactor: number;
  dropOctave: boolean;
}) => {
  const yStart = dropOctave ? 65 : 30;

  console.log('dropOctave:', dropOctave);

  const cy = yStart - noteIndex(note) * 5;

  let cx = notesCx;
  if (note.hasNoteBelow) cx += noteBelowXOffset;

  return (
    <ellipse
      key={note.noteName}
      cy={cy}
      cx={note.hasNoteBelow ? cx + 10 : cx}
      rx={5 * rxFactor}
      ry={4.8}
      fill='none'
      stroke='currentColor'
      strokeWidth={0.8}
    />
  );
};

export default NoteEllipse;
