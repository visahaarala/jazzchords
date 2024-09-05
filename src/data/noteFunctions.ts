import { Alphabet, Extension, Key, Note } from '../@types';

//
// From a chord extension
// -> generate an array of relative notes
//
// ie. 7b5 becomes ['1','3','b5','7']
//

type SegmentInstruction = {
  add?: string[];
  remove?: string[];
};

const segmentInstructions: { [key: string]: SegmentInstruction } = {
  o: {
    remove: ['3', '5'],
    add: ['b3', 'b5'],
  },
  sus4: {
    remove: ['3'],
    add: ['4'],
  },
  '+': { remove: ['5'], add: ['#5'] },
  add9: { add: ['9'] },
  maj7: { add: ['#7'] },
  // not necessary to remove minor third in -11
  '11': { add: ['7', '9', '11'], remove: ['3'] },
  b13: { add: ['b13'], remove: ['5'] },
};

const getSegmentInstruction = (segment: string): SegmentInstruction => {
  if (segmentInstructions[segment]) {
    return segmentInstructions[segment];
  }
  // handle b5, #9, b13, #11, etc...
  if (
    segment.length === 2 &&
    (segment[0] === 'b' || segment[0] === '#') &&
    Number(segment[1])
  ) {
    return {
      // first try to remove if number already exists in chord
      remove: [segment[1]],
      add: [segment],
    };
  }
  // in case of a simple number (no 'b' or '#'), just add
  return { add: [segment] };
};

const breakUpSegmentCombos = (segments: string[]): string[] => {
  const combos: { [key: string]: string[] } = {
    h7: ['o', '7'],
    o7: ['o', '6'],
    '+7': ['+', '7'],
    '9': ['7', '9'],
    '69': ['6', '9'],
    maj9: ['maj7', '9'],
    h9: ['o', '7', '9'],
    omaj7: ['o', '#7'],
    '13': ['7', '9', '13'],
    maj13: ['#7', '9', '13'],
  };
  return segments.map((s) => (combos[s] ? combos[s] : s)).flat();
};

const modifyChord = ({
  chord,
  instruction,
}: {
  chord: string[];
  instruction: SegmentInstruction;
}) => {
  if (instruction.remove) {
    for (const note of instruction.remove) {
      if (chord.indexOf(note) >= 0) {
        chord.splice(chord.indexOf(note), 1);
      }
    }
  }
  if (instruction.add) {
    for (const newNote of instruction.add) {
      if (chord.indexOf(newNote) === -1) {
        // add new note only if it does not exist yet
        chord.push(newNote);
      }
    }
  }
};

const organizeChord = (chord: string[]) => {
  chord.sort((a, b) => {
    const anum = Number(a.replace('#', '').replace('b', ''));
    const bnum = Number(b.replace('#', '').replace('b', ''));
    return anum - bnum;
  });
};

// turn chord extension into an array of relative notes
const generateRelativeChord = (extension: Extension): string[] => {
  let { isMinor, segments } = extension;
  // starting point: a major chord
  const chord: string[] = ['1', '3', '5'];
  // check for minor
  if (isMinor) {
    modifyChord({ chord, instruction: { remove: ['3'], add: ['b3'] } });
  }
  segments = breakUpSegmentCombos(segments);
  for (const segment of segments) {
    const instruction = getSegmentInstruction(segment);
    modifyChord({ chord, instruction });
  }
  organizeChord(chord);
  return chord;
};

//
// From an array of relative notes
// -> generate an array of actual note names
//
// ie. D7b5 that became ['1','3','b5','7']
// now becomes ['D', 'F#', 'Ab', 'C']
//

const whiteKeys: Alphabet[] = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

const whiteKeysIndex: { [key in Alphabet]: number } = {
  C: 0,
  D: 2,
  E: 4,
  F: 5,
  G: 7,
  A: 9,
  B: 11,
};

type AccidentalOffset = -2 | -1 | 0 | 1 | 2;

const accidentals: { [key in AccidentalOffset]: string } = {
  '-2': 'bb',
  '-1': 'b',
  '0': '',
  '1': '#',
  '2': '##',
};

type RelativeNoteData = { noteNumber: number; offset: number };

const generateNoteData = (chord: string[]): RelativeNoteData[] => {
  const noteData: RelativeNoteData[] = [];
  for (let note of chord) {
    let offset = 0;
    if (note[0] === 'b') {
      offset = -1;
      note = note.substring(1);
    }
    if (note[0] === '#') {
      offset = 1;
      note = note.substring(1);
    }
    const noteNumber = Number(note);
    noteData.push({ noteNumber, offset });
  }
  return noteData;
};

const getNoteName = (alphabetIndex: number, noteIndex: number): string => {
  const alphabet = whiteKeys[alphabetIndex % 7];
  const accidentalOffset =
    ((noteIndex - whiteKeysIndex[alphabet] + (12 + 2)) % 12) - 2;
  const accidental = accidentals[accidentalOffset as AccidentalOffset];
  return alphabet + accidental;
};

const generateNoteNames = (
  key: Key,
  relativeNoteData: RelativeNoteData[]
): Note[] => {
  const base = key.base;
  const accidentalIndex = !key.accidental
    ? 0
    : Number(
        Object.keys(accidentals).find(
          (a) =>
            accidentals[a as unknown as AccidentalOffset] === key.accidental
        )
      );
  const baseAlphabetIndex = whiteKeys.indexOf(base);
  const baseNoteIndex = whiteKeysIndex[base] + accidentalIndex;
  const notes: Note[] = [];
  const chordScale = [0, 2, 4, 5, 7, 9, 10];
  for (const { noteNumber, offset } of relativeNoteData) {
    const alphabetIndex = baseAlphabetIndex + noteNumber - 1;
    const octave = Math.floor((noteNumber - 1) / 7) + 1;
    const noteIndex = baseNoteIndex + chordScale[(noteNumber - 1) % 7] + offset;
    const noteName = getNoteName(alphabetIndex, noteIndex);
    notes.push({ noteName, octave });
  }
  return notes;
};

export const getNotes = (key: Key, extension: Extension) => {
  const relativeChord = generateRelativeChord(extension);
  const noteData = generateNoteData(relativeChord);
  const notes = generateNoteNames(key, noteData);
  return notes;
};
