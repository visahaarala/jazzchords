import {
  AccidentalLevel,
  MajorOrMinor,
  DifficultyLevel,
  Chord,
  ProgramState,
  Base,
} from '../@types';

export const keysOrganized: {
  [key in AccidentalLevel]: {
    [key in MajorOrMinor]: string[];
  };
} = {
  0: { major: ['C'], minor: ['A'] },
  1: { major: ['G', 'F'], minor: ['E', 'D'] },
  2: { major: ['D', 'Bb'], minor: ['B', 'G'] },
  3: { major: ['A', 'Eb'], minor: ['F#', 'C'] },
  4: { major: ['E', 'Ab'], minor: ['C#', 'F'] },
  5: { major: ['B', 'Db'], minor: ['G#', 'Bb'] },
  6: { major: ['F#', 'Gb'], minor: ['D#', 'Eb'] },
  7: { major: ['C#', 'Cb'], minor: ['A#', 'Ab'] },
};

export const accidentalLevels = Object.keys(keysOrganized) as AccidentalLevel[];

export const extensionsOrganized: {
  [key in DifficultyLevel]: string[];
} = {
  easy: [
    '',
    '-',
    'o',
    'add9',
    'sus4',
    'maj7',
    '6',
    '69',
    '-7',
    '-maj7',
    '-6',
    '-69',
    '-maj9',
    '-9',
    '-add9', // same as -add2
    '9',
    'maj9',
    '+',
  ],
  // medium: [
  //   { extension: ['o', '7', undefined, undefined, undefined], isMinor: false },
  //   { extension: ['ø', '7', undefined, undefined, undefined], isMinor: false },

  //   {
  //     extension: [undefined, '7', 'sus4', undefined, undefined],
  //     isMinor: false,
  //   },

  //   { extension: ['ø', '9', undefined, undefined, undefined], isMinor: false },
  //   {
  //     extension: ['o', 'maj7', undefined, undefined, undefined],
  //     isMinor: false,
  //   },
  //   { extension: [undefined, '7', '♭5', undefined, undefined], isMinor: false },
  //   { extension: [undefined, '7', '♯5', undefined, undefined], isMinor: false },
  //   { extension: [undefined, '7', '♭9', undefined, undefined], isMinor: false },
  //   { extension: [undefined, '7', '♯9', undefined, undefined], isMinor: false },
  //   {
  //     extension: [undefined, '7', '♭5', undefined, undefined],
  //     isMinor: true,
  //   }, // same as halfdim7
  //   {
  //     extension: [undefined, 'maj7', '♯5', undefined, undefined],
  //     isMinor: false,
  //   },
  //   {
  //     extension: [undefined, '7', 'sus4', undefined, undefined],
  //     isMinor: false,
  //   },
  //   { extension: [undefined, '9', '♭5', undefined, undefined], isMinor: false },
  //   { extension: [undefined, '9', '♯5', undefined, undefined], isMinor: false },
  //   {
  //     extension: [undefined, '9', 'sus4', undefined, undefined],
  //     isMinor: false,
  //   }, // similar as G-7/C
  //   {
  //     extension: [undefined, '11', undefined, undefined, undefined],
  //     isMinor: true,
  //   },
  //   {
  //     extension: [undefined, '11', undefined, undefined, undefined],
  //     isMinor: false,
  //   },
  //   {
  //     extension: [undefined, '13', undefined, undefined, undefined],
  //     isMinor: false,
  //   },
  //   {
  //     extension: [undefined, 'maj13', undefined, undefined, undefined],
  //     isMinor: false,
  //   },
  // ],
  // hard: [
  //   {
  //     extension: [undefined, '7', '♯11', undefined, undefined],
  //     isMinor: false,
  //   },
  //   {
  //     extension: [undefined, 'maj7', '♯11', undefined, undefined],
  //     isMinor: false,
  //   },
  //   {
  //     extension: [undefined, 'maj9', '♯11', undefined, undefined],
  //     isMinor: false,
  //   },
  //   {
  //     extension: [undefined, '13', '♯9', undefined, undefined],
  //     isMinor: false,
  //   },
  //   {
  //     extension: [undefined, '9', '♯11', undefined, undefined],
  //     isMinor: false,
  //   },
  //   {
  //     extension: [undefined, '7', '♭13', undefined, undefined],
  //     isMinor: false,
  //   },
  //   {
  //     extension: [undefined, '13', '♯11', undefined, undefined],
  //     isMinor: false,
  //   },
  //   {
  //     extension: [undefined, '13', '♭9', undefined, undefined],
  //     isMinor: false,
  //   },
  //   {
  //     extension: [undefined, '7', '♭9sus4', undefined, undefined],
  //     isMinor: false,
  //   }, // similar as Gh7/C
  //   {
  //     extension: [undefined, '13', 'sus4', undefined, undefined],
  //     isMinor: false,
  //   }, // similar as B♭maj7/C
  // ],
  // painful: [
  //   {
  //     extension: [undefined, '7', undefined, undefined, 'alt.'],
  //     isMinor: false,
  //   },
  //   { extension: [undefined, '7', '♯9', '♯5', undefined], isMinor: false },
  //   { extension: [undefined, '7', '♯9', '♭5', undefined], isMinor: false },
  //   { extension: [undefined, '7', '♯11', '♯9', undefined], isMinor: false },
  //   { extension: [undefined, '7', '♯11', '♭9', undefined], isMinor: false },
  //   { extension: [undefined, '7', '♭9', '♭5', undefined], isMinor: false },
  //   { extension: [undefined, '7', '♭9', '♯5', undefined], isMinor: false },
  //   { extension: [undefined, '7', '♯9', '♭9', undefined], isMinor: false },
  //   { extension: [undefined, '7', '♭13', '♭9', undefined], isMinor: false },
  //   {
  //     extension: [undefined, '7', '♭13sus4', undefined, undefined],
  //     isMinor: false,
  //   },
  // ],
};

export const allDifficultyLevels = Object.keys(
  extensionsOrganized
) as DifficultyLevel[];

const createRangeArray = <T>(min: T, max: T, options: T[]) => {
  const minIndex = options.indexOf(min);
  const maxIndex = options.indexOf(max);
  const rangeArray: T[] = [];
  for (let i = minIndex; i <= maxIndex; i++) {
    rangeArray.push(options[i]);
  }
  return rangeArray;
};

export const generateChords = (
  number: number,
  state: ProgramState
): Chord[] => {
  const { difficultyMin, difficultyMax, accidentalsMin, accidentalsMax } =
    state;

  const difficultyLevels = createRangeArray(
    difficultyMin,
    difficultyMax,
    Object.keys(extensionsOrganized) as DifficultyLevel[]
  );
  const extensions: string[] = [];
  for (const level of difficultyLevels) {
    extensions.push(...extensionsOrganized[level]);
  }
  const accidentalsLevels = createRangeArray(
    accidentalsMin,
    accidentalsMax,
    Object.keys(keysOrganized) as AccidentalLevel[]
  );

  const chords: Chord[] = [];
  for (let i = 0; i < number; i++) {
    // choose an extension randomly
    const randomExtensionIndex = Math.floor(Math.random() * extensions.length);
    const extension = extensions[randomExtensionIndex];
    const isMinor = extension.includes('-');
    // choose an accidentalLevel randomly
    const randomAccidentalsLevelIndex = Math.floor(
      Math.random() * accidentalsLevels.length
    );
    const randomAccidentalsLevel =
      accidentalsLevels[randomAccidentalsLevelIndex];
    // choose bases for accidentalLevel & extension
    const randomKeys =
      keysOrganized[randomAccidentalsLevel][isMinor ? 'minor' : 'major'];
    // choose one of those bases
    const randomBaseIndex = Math.floor(Math.random() * randomKeys.length);
    const key = randomKeys[randomBaseIndex];

    // make a number[] of notes from isMinor & extension
    const notes: number[] = [];

    // create new Chord and add it to chords list
    const newChord: Chord = {
      base: key[0] as Base,
      accidental: key.includes('b') ? 'flat' : key.includes('#') ? 'sharp' : undefined,
      isMinor,
      extension,
      notes,
    };
    chords.push(newChord);
  }
  return chords;
};
