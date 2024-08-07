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
    '7',
    '-7',
    '-maj7',
    '-6',
    '-69',
    '-maj9',
    '-9',
    '-add9',
    '9',
    'maj9',
    '+',
  ],
  medium: [
    'o7',
    'h7',
    '7sus4',
    'h9',
    'omaj7',
    '7b5',
    '7#5',
    '7b9',
    '7#9',
    '-7b5',
    'maj7b5',
    '7sus4',
    '9b5',
    '9#5',
    '9sus4',
    '-11',
    '11',
    '13',
    'maj13',
  ],
  hard: [
    '7#11',
    'maj7#11',
    'maj9#11',
    '13#9',
    '13b9',
    '9#11',
    '7b13',
    '13#11',
    '13b9',
    // '13sus4', // don't like it
  ],
  painful: [
    // '7alt', // not implemented yet
    '7#9b5',
    '7#9#5',
    '7#11b9',
    '7#11#9',
    '7b9b5',
    '7b9#5',
    '7#9b9',
    '7b13b9',
    '7b13#9',
    // '7b13sus4', // don't like it
  ],
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

    // SPLIT CHORD EXTENSION TO ARRAY OF SEGMENTS
    const extArray: string[] = [];
    // remove minor
    let ext: string | undefined = extension.replace('-', '');
    // take apart 69
    if (ext.indexOf('69') === 0) {
      extArray.push('69');
      ext = ext.substring(2);
    }
    // take apart first number (6, 7, 9, 11, 13)
    if (/[679]/.exec(ext)?.index === 0) {
      extArray.push(ext.substring(0, 1));
      ext = ext.substring(1);
    }
    if (/11|13/.exec(ext)?.index === 0) {
      extArray.push(ext.substring(0, 2));
      ext = ext.substring(2);
    }
    // split the rest by #, b and alt
    while (ext) {
      const index = ext.substring(1).search(/#|b|alt/) + 1;
      if (index > 0) {
        extArray.push(ext.substring(0, index));
        ext = ext.substring(index);
      } else {
        extArray.push(ext);
        ext = undefined;
      }
    }

    // make a number[] of notes from isMinor & extension
    const notes: number[] = [];

    // create new Chord and add it to chords list
    const newChord: Chord = {
      base: key[0] as Base,
      accidental: key.includes('b')
        ? 'flat'
        : key.includes('#')
        ? 'sharp'
        : undefined,
      isMinor,
      extension: extArray,
      notes,
    };
    chords.push(newChord);
  }
  return chords;
};
