import {
  AccidentalLevel,
  DifficultyLevel,
  Chord,
  ProgramState,
  Extension,
  Alphabet,
  FreshAndUsed,
  Key,
  Accidental,
} from '../@types';

import { keysOrganized, extensionsOrganized } from '../data/chordData';
import { getNotes } from './noteFunctions';

export const accidentalLevels = Object.keys(keysOrganized) as AccidentalLevel[];

export const difficultyLevels = Object.keys(
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
  const accidentalLevelsInRange = createRangeArray(
    state.accidentalsMin,
    state.accidentalsMax,
    Object.keys(keysOrganized) as AccidentalLevel[]
  );
  // make arrays of majors & minors
  const majors: string[] = [];
  const minors: string[] = [];
  for (const level of accidentalLevelsInRange) {
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

export const stringToExtension = (ext: string): Extension => {
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
  return { isMinor, segments };
};

export const extensionToString = (ext: Extension): string => {
  return (ext.isMinor ? '-' : '') + ext.segments.join('');
};

export const generateExtensionsShuffled = (
  state: ProgramState
): { extensionsShuffled: FreshAndUsed<Extension> } => {
  const difficultyLevelsInRange = createRangeArray(
    state.difficultyMin,
    state.difficultyMax,
    Object.keys(extensionsOrganized) as DifficultyLevel[]
  );
  const extensionTexts: string[] = [];
  for (const level of difficultyLevelsInRange) {
    extensionTexts.push(...extensionsOrganized[level]);
  }
  const extensionTextsShuffled: string[] = shuffleArray(extensionTexts);
  const extensionsShuffled: FreshAndUsed<Extension> = { fresh: [], used: [] };
  for (let ext of extensionTextsShuffled) {
    extensionsShuffled.fresh.push(stringToExtension(ext));
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
    if (state.extensionLocked) {
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

    let keyString: string;
    if (state.keyLocked) {
      const lastKey = state.chords.slice(-1)[0].key;
      keyString = lastKey.base + lastKey.accidental;
    } else {
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
      if (extension.isMinor) {
        keyString = minorsShuffled.fresh.splice(0, 1)[0];
        minorsShuffled.used.push(keyString);
      } else {
        keyString = majorsShuffled.fresh.splice(0, 1)[0];
        majorsShuffled.used.push(keyString);
      }
    }

    const key: Key = {
      base: keyString[0] as Alphabet,
      accidental: keyString.includes('b')
        ? 'b'
        : keyString.includes('#')
        ? '#'
        : undefined,
    };

    const notes = getNotes(key, extension);

    const randomTop = {
      ...notes[Math.floor(Math.random() * notes.length)],
      hasNoteBelow: false,
    };

    // to spread random top notes more randmly and evenly 
    // between more or less C1 and C3
    // octaveIndex will be adjusted to a given range in Notation.tsx
    randomTop.octaveIndex = Math.floor(Math.random() * 4) - 1;

    chords.push({
      key,
      extension,
      notes,
      randomTopNote: randomTop,
    });
  }

  return {
    chords,
    extensionsShuffled,
    majorsShuffled,
    minorsShuffled,
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
