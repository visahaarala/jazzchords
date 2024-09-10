import { Note } from '../../../@types';
import { noteToWhiteKeyIndex } from '../../../functions/noteFunctions';

const Accidentals = ({
  notes,
  yLowC,
  notesCx,
}: {
  notes: Note[];
  yLowC: number;
  notesCx: number;
}) => {
  type AccidentalData = {
    accidental: string;
    noteName: string;
    noteIndex: number;
  };

  type AccidentalSlotsType = { width: number; accidentals: AccidentalData[] };

  // recursive function for sorting accidentals to slots
  const sortToSlots = (
    slotIndex: number,
    slots: AccidentalSlotsType[],
    notes: Note[]
  ) => {
    const notesForNextSlot: Note[] = [];
    for (const note of notes) {
      const noteIndex = noteToWhiteKeyIndex(note);
      const noteName = note.noteName;
      const accidental = noteName.slice(1);
      const slot = slots[slotIndex];
      // if slot not initialized yet
      if (!slot) {
        slots[slotIndex] = {
          width: accidental === 'bb' ? 20 : 13,
          accidentals: [{ noteIndex, noteName, accidental }],
        };
      }
      // else if there is enough vertical space between previous
      else if (slot.accidentals.slice(-1)[0].noteIndex - noteIndex > 4) {
        // if this slot has accidental 'bb', make it wider
        if (accidental === 'bb') {
          slot.width = 20;
        }
        slots[slotIndex].accidentals.push({ noteIndex, noteName, accidental });
      }
      // else put the note for the next slot
      else {
        notesForNextSlot.push(note);
      }
    }
    if (notesForNextSlot.length === 0) return slots;
    return sortToSlots(slotIndex + 1, slots, notesForNextSlot);
  };

  // shallow reverse copy of notes with accidentals only
  const notesReversed = notes
    .slice()
    .reverse()
    .filter((note) => note.noteName.slice(1).length > 0);

  // accidentals sorted to slots with different horiz offsets
  const accidentalsInSlots = sortToSlots(0, [], notesReversed);

  const flatCurve = (cx: number, cy: number) =>
    `M${cx - 4} ${cy - 12} v18` +
    `M${cx - 4} ${cy - 2}` +
    `C${cx} ${cy - 6} ${cx + 5} ${cy - 7} ${cx + 4} ${cy - 2}` +
    `C${cx + 3} ${cy + 0.6} ${cx + 3} ${cy + 1} ${cx - 4} ${cy + 6}z` +
    `M${cx - 4} ${cy - 2}` +
    `C${cx} ${cy - 6} ${cx + 4} ${cy - 6} ${cx + 3} ${cy - 2}` +
    `C${cx + 2.5} ${cy - 0.5} ${cx + 3} ${cy + 1} ${cx - 4} ${cy + 6}z`;

  let nextHorizontalOffset = 0;
  let horizontalOffset = 0;
  return accidentalsInSlots.map((slot) => {
    const { width, accidentals } = slot;
    horizontalOffset = nextHorizontalOffset;
    nextHorizontalOffset -= width;
    const cx = notesCx - 17 + horizontalOffset;

    return accidentals.map((acc) => {
      const { accidental, noteName, noteIndex } = acc;
      const cy = yLowC - noteIndex * 5;

      let curve = '';
      let fill = 'none';
      switch (accidental) {
        case '##':
          curve =
            // it's an 8 by 8 playground
            `M${cx - 4} ${cy - 4} h2` +
            `C${cx - 2} ${cy - 2} ${cx + 2} ${cy + 2} ${cx + 4} ${cy + 2}` +
            'v2 h-2' +
            `C${cx + 2} ${cy + 2} ${cx - 2} ${cy - 2} ${cx - 4} ${cy - 2} z` +
            //
            `M${cx - 4} ${cy + 4} h2` +
            `C${cx - 2} ${cy + 2} ${cx + 2} ${cy - 2} ${cx + 4} ${cy - 2}` +
            'v-2 h-2' +
            `C${cx + 2} ${cy - 2} ${cx - 2} ${cy + 2} ${cx - 4} ${cy + 2} z` +
            //
            ``;
          fill = 'currentColor';
          break;
        case '#':
          curve =
            `M${cx - 2.5} ${cy - 9} v20` +
            `M${cx + 2.5} ${cy + 9} v-20` +
            `M${cx - 5} ${cy - 3} l10 -4 v1 l-10 4 z` +
            `M${cx + 5} ${cy + 3} l-10 4 v-1 l10 -4 z`;
          break;
        case 'b':
          curve = flatCurve(cx, cy);
          break;
        case 'bb':
          curve = flatCurve(cx, cy) + flatCurve(cx - 8, cy);
          break;
        default:
          return '';
      }

      return (
        <path
          key={noteName}
          d={curve}
          fill={fill}
          stroke='currentColor'
          strokeWidth={1}
        />
      );
    });
  });
};

export default Accidentals;
