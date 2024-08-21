import {
  AccidentalLevel,
  MajorOrMinor,
  DifficultyLevel,
  Chord,
  ProgramState,
  Extension,
  Alphabet,
  FreshAndUsed,
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

const shuffleArray = <T>(array: T[]): T[] => {
  const orig: T[] = [...array];
  const mixed: T[] = [];
  while (orig.length) {
    mixed.push(...orig.splice(Math.floor(Math.random() * orig.length), 1));
  }
  return mixed;
};

export const generateKeysShuffled = (
  state: ProgramState
): {
  majorsShuffled: FreshAndUsed<string>;
  minorsShuffled: FreshAndUsed<string>;
} => {
  const accidentalLevels = createRangeArray(
    state.accidentalsMin,
    state.accidentalsMax,
    Object.keys(keysOrganized) as AccidentalLevel[]
  );
  // make arrays of majors & minors
  const majors: string[] = [];
  const minors: string[] = [];
  for (const level of accidentalLevels) {
    majors.push(...keysOrganized[level].major);
    minors.push(...keysOrganized[level].minor);
  }
  // turn them into shuffled arrays
  const majorsShuffled: FreshAndUsed<string> = {
    fresh: shuffleArray(majors),
    used: [],
  };
  const minorsShuffled: FreshAndUsed<string> = {
    fresh: shuffleArray(minors),
    used: [],
  };
  return { majorsShuffled, minorsShuffled };
};

export const generateExtensionsShuffled = (
  state: ProgramState
): { extensionsShuffled: FreshAndUsed<Extension> } => {
  const difficultyLevels = createRangeArray(
    state.difficultyMin,
    state.difficultyMax,
    Object.keys(extensionsOrganized) as DifficultyLevel[]
  );
  const extensionTexts: string[] = [];
  for (const level of difficultyLevels) {
    extensionTexts.push(...extensionsOrganized[level]);
  }
  const extensionTextsShuffled: string[] = shuffleArray(extensionTexts);
  const extensionsShuffled: FreshAndUsed<Extension> = { fresh: [], used: [] };
  for (let ext of extensionTextsShuffled) {
    // CHECK FOR MINOR
    let isMinor = false;
    if (ext.substring(0, 1) === '-') {
      isMinor = true;
      ext = ext.substring(1);
    }
    // SPLIT CHORD EXTENSION TO ARRAY OF SEGMENTS
    const segments: string[] = [];
    // take apart 69
    if (ext.indexOf('69') === 0) {
      segments.push('69');
      ext = ext.substring(2);
    }
    // take apart first number (6, 7, 9, 11, 13)
    if (/[679]/.exec(ext)?.index === 0) {
      segments.push(ext.substring(0, 1));
      ext = ext.substring(1);
    }
    if (/11|13/.exec(ext)?.index === 0) {
      segments.push(ext.substring(0, 2));
      ext = ext.substring(2);
    }
    // split the rest by #, b and alt
    while (ext.length) {
      const index = ext.substring(1).search(/#|b|alt/) + 1;
      if (index > 0) {
        segments.push(ext.substring(0, index));
        ext = ext.substring(index);
      } else {
        segments.push(ext);
        ext = '';
      }
    }
    extensionsShuffled.fresh.push({ isMinor, segments });
  }
  return { extensionsShuffled };
};

export const generateChords = ({
  number,
  state,
  append,
}: {
  number: number;
  state: ProgramState;
  append?: boolean;
}): {
  chords: Chord[];
  extensionsShuffled: FreshAndUsed<Extension>;
  majorsShuffled: FreshAndUsed<string>;
  minorsShuffled: FreshAndUsed<string>;
} => {
  const chords: Chord[] = append ? [...state.chords] : [];
  const extensionsShuffled: FreshAndUsed<Extension> = {
    fresh: [...state.extensionsShuffled.fresh],
    used: [...state.extensionsShuffled.used],
  };
  const majorsShuffled: FreshAndUsed<string> = {
    fresh: [...state.majorsShuffled.fresh],
    used: [...state.majorsShuffled.used],
  };
  const minorsShuffled: FreshAndUsed<string> = {
    fresh: [...state.minorsShuffled.fresh],
    used: [...state.minorsShuffled.used],
  };
  for (let i = 0; i < number; i++) {
    let extension: Extension;
    if (state.extensionLocked && chords.length >= 2) {
      // if extension is locked, keep repeating the same extension
      extension = state.chords.slice(-1)[0].extension;
    } else {
      // SHUFFLE NEW FRESH ARRAYS IF NECESSARY
      if (!extensionsShuffled.fresh.length) {
        extensionsShuffled.fresh = shuffleArray(extensionsShuffled.used);
        extensionsShuffled.used = [];
      }
      // if extension / key is not locked
      // splice the first fresh and push it to used
      extension = extensionsShuffled.fresh.splice(0, 1)[0];
      extensionsShuffled.used.push(extension);
    }

    // SHUFFLE NEW FRESH ARRAYS IF NECESSARY
    if (!majorsShuffled.fresh.length) {
      majorsShuffled.fresh = shuffleArray(majorsShuffled.used);
      majorsShuffled.used = [];
    }
    if (!minorsShuffled.fresh.length) {
      minorsShuffled.fresh = shuffleArray(minorsShuffled.used);
      minorsShuffled.used = [];
    }
    // check if it's major/minor, pick a key and rotate the major/minor array
    let key = '';
    if (extension.isMinor) {
      key = minorsShuffled.fresh.splice(0, 1)[0];
      minorsShuffled.used.push(key);
    } else {
      key = majorsShuffled.fresh.splice(0, 1)[0];
      majorsShuffled.used.push(key);
    }
    chords.push({
      key: {
        base: key[0] as Alphabet,
        accidental: key.includes('b')
          ? 'flat'
          : key.includes('#')
          ? 'sharp'
          : undefined,
      },
      extension,
    });
  }

  return {
    chords,
    extensionsShuffled,
    majorsShuffled,
    minorsShuffled,
  };
};
