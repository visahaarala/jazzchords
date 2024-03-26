import {
  Accidentals,
  MajorOrMinor,
  Difficulty,
  Extension,
  Chord,
} from '../@types';

export const basesOrganized: {
  [key in Accidentals]: {
    [key in MajorOrMinor]: string[];
  };
} = {
  0: { major: ['C'], minor: ['A'] },
  1: { major: ['G', 'F'], minor: ['E', 'D'] },
  2: { major: ['D', 'B♭'], minor: ['B', 'G'] },
  3: { major: ['A', 'E♭'], minor: ['F♯', 'C'] },
  4: { major: ['E', 'A♭'], minor: ['C♯', 'F'] },
  5: { major: ['B', 'D♭'], minor: ['G♯', 'B♭'] },
  6: { major: ['F♯', 'G♭'], minor: ['D♯', 'E♭'] },
  7: { major: ['C♯', 'C♭'], minor: ['A♯', 'A♭'] },
};

export const extensionsOrganized: {
  [key in Difficulty]: Extension[];
} = {
  easy: [
    {
      extension: [undefined, undefined, undefined, undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, undefined, undefined, undefined, undefined],
      isMinor: true,
    },
    {
      extension: ['o', undefined, undefined, undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, undefined, 'add9', undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, undefined, 'sus4', undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, 'maj7', undefined, undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, '6', undefined, undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, '6/9', undefined, undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, '7', undefined, undefined, undefined],
      isMinor: true,
    },
    {
      extension: [undefined, 'maj7', undefined, undefined, undefined],
      isMinor: true,
    },
    {
      extension: [undefined, '6', undefined, undefined, undefined],
      isMinor: true,
    },
    {
      extension: [undefined, '6/9', undefined, undefined, undefined],
      isMinor: true,
    },
    {
      extension: [undefined, 'maj9', undefined, undefined, undefined],
      isMinor: true,
    },
    {
      extension: [undefined, '9', undefined, undefined, undefined],
      isMinor: true,
    },
    {
      extension: [undefined, undefined, 'add9', undefined, undefined],
      isMinor: true,
    }, //same as add2
    {
      extension: [undefined, '9', undefined, undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, 'maj9', undefined, undefined, undefined],
      isMinor: false,
    },
    {
      extension: ['+', undefined, undefined, undefined, undefined],
      isMinor: false,
    },
  ],
  medium: [
    { extension: ['o', '7', undefined, undefined, undefined], isMinor: false },
    { extension: ['ø', '7', undefined, undefined, undefined], isMinor: false },

    {
      extension: [undefined, '7', 'sus4', undefined, undefined],
      isMinor: false,
    },

    { extension: ['ø', '9', undefined, undefined, undefined], isMinor: false },
    {
      extension: ['o', 'maj7', undefined, undefined, undefined],
      isMinor: false,
    },
    { extension: [undefined, '7', '♭5', undefined, undefined], isMinor: false },
    { extension: [undefined, '7', '♯5', undefined, undefined], isMinor: false },
    { extension: [undefined, '7', '♭9', undefined, undefined], isMinor: false },
    { extension: [undefined, '7', '♯9', undefined, undefined], isMinor: false },
    {
      extension: [undefined, '7', '♭5', undefined, undefined],
      isMinor: true,
    }, // same as halfdim7
    {
      extension: [undefined, 'maj7', '♯5', undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, '7', 'sus4', undefined, undefined],
      isMinor: false,
    },
    { extension: [undefined, '9', '♭5', undefined, undefined], isMinor: false },
    { extension: [undefined, '9', '♯5', undefined, undefined], isMinor: false },
    {
      extension: [undefined, '9', 'sus4', undefined, undefined],
      isMinor: false,
    }, // similar as G-7/C
    {
      extension: [undefined, '11', undefined, undefined, undefined],
      isMinor: true,
    },
    {
      extension: [undefined, '11', undefined, undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, '13', undefined, undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, 'maj13', undefined, undefined, undefined],
      isMinor: false,
    },
  ],
  hard: [
    {
      extension: [undefined, '7', '♯11', undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, 'maj7', '♯11', undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, 'maj9', '♯11', undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, '13', '♯9', undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, '9', '♯11', undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, '7', '♭13', undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, '13', '♯11', undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, '13', '♭9', undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, '7', '♭9sus4', undefined, undefined],
      isMinor: false,
    }, // similar as Gh7/C
    {
      extension: [undefined, '13', 'sus4', undefined, undefined],
      isMinor: false,
    }, // similar as B♭maj7/C
  ],
  painful: [
    {
      extension: [undefined, '7', undefined, undefined, 'alt.'],
      isMinor: false,
    },
    { extension: [undefined, '7', '♯9', '♯5', undefined], isMinor: false },
    { extension: [undefined, '7', '♯9', '♭5', undefined], isMinor: false },
    { extension: [undefined, '7', '♯11', '♯9', undefined], isMinor: false },
    { extension: [undefined, '7', '♯11', '♭9', undefined], isMinor: false },
    { extension: [undefined, '7', '♭9', '♭5', undefined], isMinor: false },
    { extension: [undefined, '7', '♭9', '♯5', undefined], isMinor: false },
    { extension: [undefined, '7', '♯9', '♭9', undefined], isMinor: false },
    { extension: [undefined, '7', '♭13', '♭9', undefined], isMinor: false },
    {
      extension: [undefined, '7', '♭13sus4', undefined, undefined],
      isMinor: false,
    },
  ],
};

const createDifficultyLevelsArray = (
  difficultyMin: Difficulty,
  difficultyMax: Difficulty
): Difficulty[] => {
  const allLevels = Object.keys(extensionsOrganized) as Difficulty[];
  const minIndex = allLevels.indexOf(difficultyMin);
  const maxIndex = allLevels.indexOf(difficultyMax);
  const levelsArray: Difficulty[] = [];
  for (let i = minIndex; i <= maxIndex; i++) {
    levelsArray.push(allLevels[i]);
  }
  return levelsArray;
};

const createRangeArray = <T>(min: T, max: T, options: T[]) => {
  const minIndex = options.indexOf(min);
  const maxIndex = options.indexOf(max);
  const rangeArray: T[] = [];
  for (let i = minIndex; i <= maxIndex; i++) {
    rangeArray.push(options[i]);
  }
  return rangeArray;
};

export const generateChords = ({
  difficultyMin,
  difficultyMax,
  accidentalsMin,
  accidentalsMax,
  numberOfChords,
}: {
  difficultyMin: Difficulty;
  difficultyMax: Difficulty;
  accidentalsMin: Accidentals;
  accidentalsMax: Accidentals;
  numberOfChords: number;
}): Chord[] => {
  const difficultyLevels = createRangeArray(
    difficultyMin,
    difficultyMax,
    Object.keys(extensionsOrganized) as Difficulty[]
  );
  const extensions: Extension[] = [];
  for (const level of difficultyLevels) {
    extensions.push(...extensionsOrganized[level]);
  }
  const accidentalsLevels = createRangeArray(
    accidentalsMin,
    accidentalsMax,
    Object.keys(basesOrganized) as Accidentals[]
  );

  const chords: Chord[] = [];
  for (let i = 0; i < numberOfChords; i++) {
    // choose an extension randomly
    const randomExtensionIndex = Math.floor(Math.random() * extensions.length);
    const extension = extensions[randomExtensionIndex];
    // choose an accidentalLevel randomly
    const randomAccidentalsLevelIndex = Math.floor(
      Math.random() * accidentalsLevels.length
    );
    const randomAccidentalsLevel =
      accidentalsLevels[randomAccidentalsLevelIndex];
    // choose bases for accidentalLevel & extension
    const randomBases =
      basesOrganized[randomAccidentalsLevel][
        extension.isMinor ? 'minor' : 'major'
      ];
    // choose one of those bases
    const randomBaseIndex = Math.floor(Math.random() * randomBases.length);
    const base = randomBases[randomBaseIndex];
    // create new Chord
    const ext = extension.extension;
    const newChord: Chord = {
      base: base,
      isMinor: extension.isMinor,
      dim: ext[0],
      seventh: ext[1],
      bracket: [ext[2], ext[3]],
      alt: ext[4],
    };
    if (newChord.seventh === '6/9') {
      newChord.seventh = undefined;
      newChord.sixNine = '6/9';
    }
    chords.push(newChord);
  }
  return chords;
};
