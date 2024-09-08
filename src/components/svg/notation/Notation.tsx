import { Note } from '../../../@types';

const Notation = ({ notes }: { notes: Note[] }) => {
  return <p>{notes.map((note) => note.noteName + note.octave + ' ')}</p>;
};

export default Notation;
