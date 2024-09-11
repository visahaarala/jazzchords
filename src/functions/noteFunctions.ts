import { Accidental, Alphabet, Extension, Key, Note } from '../@types';

/////////////////////////////////////////
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
  r3: { remove: ['3'] },
  r5: { remove: ['5'] },
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
  // '11': { add: ['7', '9', '11'], remove: ['3'] },
  b13: { add: ['b13'], remove: ['5'] },
};

const getSegmentInstruction = (
  segment: string
  // isMinor: boolean
): SegmentInstruction => {
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

const breakUpSegmentCombos = (
  segments: string[],
  isMinor: boolean
): string[] => {
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
    11: isMinor ? ['7', '9', '11'] : ['r3', '7', '9', '11'],
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

const sortPoints = (chord: string): number => {
  let points = Number(chord.replace(/\D/g, '')) * 10;
  if (chord.includes('#')) points += 5;
  if (chord.includes('b')) points -= 5;
  return points;
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
  segments = breakUpSegmentCombos(segments, isMinor);
  for (const segment of segments) {
    const instruction = getSegmentInstruction(
      segment
      // isMinor
    );
    modifyChord({ chord, instruction });
  }
  chord.sort((a, b) => {
    return sortPoints(a) - sortPoints(b);
  });
  return chord;
};

/////////////////////////////////////////
//
// From an array of relative notes
// -> generate an array of actual note names
//
// ie. D7b5 that became ['1','3','b5','7']
// now becomes ['D', 'F#', 'Ab', 'C']
//

export const whiteKeys: Alphabet[] = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

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

const generateRelativeNoteData = (chord: string[]): RelativeNoteData[] => {
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

export const noteToWhiteKeyIndex = (note: Note) => {
  const key = stringToKey(note.noteName);
  return whiteKeys.indexOf(key.base) + note.octaveIndex * 7;
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
    const octaveIndex = Math.floor(alphabetIndex / 7);
    const noteIndex = baseNoteIndex + chordScale[(noteNumber - 1) % 7] + offset;
    const noteName = getNoteName(alphabetIndex, noteIndex);
    const newNote: Note = { noteName, octaveIndex, hasNoteBelow: false };

    // check if there is a note right below
    const prevNote = notes.slice(-1)[0];
    if (prevNote) {
      if (noteToWhiteKeyIndex(prevNote) === noteToWhiteKeyIndex(newNote) - 1) {
        newNote.hasNoteBelow = true;
      }
    }
    notes.push(newNote);
  }
  return notes;
};

export const getNotes = (key: Key, extension: Extension) => {
  const relativeChord = generateRelativeChord(extension);
  const relativeNoteData = generateRelativeNoteData(relativeChord);
  const notes = generateNoteNames(key, relativeNoteData);
  return notes;
};

export const changeEnharmonically = (key: Key): Key => {
  if (!key.accidental) return key; // already a white key, no change needed

  // offset from current base
  const offset = key.accidental === '#' ? 1 : -1;

  // noteindex of the current note
  const noteIndex = whiteKeysIndex[key.base] + offset;

  // find new base alphabet
  const oldBaseIndex = whiteKeys.indexOf(key.base);
  const newBaseIndex = (oldBaseIndex + offset + 7) % 7;
  const newBase = whiteKeys[newBaseIndex];

  // find new accidental
  const newBaseNoteIndex = whiteKeysIndex[newBase];
  const newOffset = noteIndex - newBaseNoteIndex;
  const newAccidental =
    newOffset === 0 ? undefined : accidentals[newOffset as AccidentalOffset];

  return {
    base: newBase,
    accidental: newAccidental as Accidental,
  };
};

export const keyToString = (option: Key): string => {
  return option.base + (option.accidental ? option.accidental : '');
};

export const stringToKey = (key: string): Key => {
  return {
    base: key[0] as Alphabet,
    accidental: key[1] as Accidental,
  };
};

// make this USECALLBACK
export const randomTopNotes = [
  'C1',
  'D1',
  'E1',
  'F1',
  'G1',
  'A1',
  'B1',
  'C2',
  'D2',
  'E2',
  'F2',
  'G2',
  'A2',
  'B2',
  'C3',
];

export const randomTopNoteToKeyIndex = (rtn: string): number => {
  const note: Note = { noteName: rtn[0], octaveIndex: Number(rtn[1]) - 1 };
  return noteToWhiteKeyIndex(note);
};
