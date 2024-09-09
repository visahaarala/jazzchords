import { Note } from '../../../@types';
import { noteToIndex } from '../../../functions/noteFunctions';
// import { notesCx, yStart } from './Notation';

const Accidentals = ({
  notes,
  yLowC,
  notesCx,
}: {
  notes: Note[];
  yLowC: number;
  notesCx: number;
}) => {
  // first figure out horizontal offsets for each accidental

  return notes.map((note) => {
    let curve: string | undefined = undefined;

    const cy = yLowC - noteToIndex(note) * 5;
    const cx = notesCx - 16;

    const flatCurve = (cx: number, cy: number) =>
      `M${cx - 4} ${cy - 16} v22` +
      `M${cx - 4} ${cy - 2}` +
      `C${cx} ${cy - 6} ${cx + 5} ${cy - 7} ${cx + 4} ${cy - 2}` +
      `C${cx + 3} ${cy + 0.6} ${cx + 3} ${cy + 1} ${cx - 4} ${cy + 6}z` +
      `M${cx - 4} ${cy - 2}` +
      `C${cx} ${cy - 6} ${cx + 4} ${cy - 6} ${cx + 3} ${cy - 2}` +
      `C${cx + 2.5} ${cy - 0.5} ${cx + 3} ${cy + 1} ${cx - 4} ${cy + 6}z`;

    // const accidental = stringToKey(note.noteName).accidental;
    const accidental = note.noteName.slice(1);
    if (accidental === '##') {
      curve =
        `M${cx - 4} ${cy - 4} l8 8` +
        //
        `M${cx - 4} ${cy + 4} l8-8`;
    }
    if (accidental === '#') {
      curve =
        `M${cx - 2.5} ${cy - 9} v20` +
        `M${cx + 2.5} ${cy + 9} v-20` +
        `M${cx - 5} ${cy - 3} l10 -4 v1 l-10 4 z` +
        `M${cx + 5} ${cy + 3} l-10 4 v-1 l10 -4 z`;
    }
    if (accidental === 'b') {
      curve = flatCurve(cx, cy);
    }
    if (accidental === 'bb') {
      curve = flatCurve(cx, cy) + flatCurve(cx - 8, cy);
    }

    if (!curve) return '';

    return [
      // <ellipse
      //   cx={cx}
      //   cy={cy}
      //   rx={7}
      //   ry={10}
      //   fill='none'
      //   stroke='currentColor'
      //   strokeWidth={0.1}
      //   key='circle'
      // />,
      <path
        d={curve}
        fill='none'
        stroke='currentColor'
        strokeWidth={1}
        key='curve'
      />,
    ];
  });
};

export default Accidentals;
