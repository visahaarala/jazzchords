import {
  AccidentalLevel,
  MajorOrMinor,
  ExtensionLevel,
  Extension,
  Chord,
} from '../@types';

export const basesOrganized: {
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

export const extensionsOrganized: {
  [key in ExtensionLevel]: Extension[];
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
    { extension: ['o', '7', undefined, undefined, undefined], isMinor: false },
    { extension: ['ø', '7', undefined, undefined, undefined], isMinor: false },
    {
      extension: ['+', undefined, undefined, undefined, undefined],
      isMinor: false,
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
      extension: [undefined, '7', 'sus4', undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, 'maj7', undefined, undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, 'maj9', undefined, undefined, undefined],
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
      extension: [undefined, '9', undefined, undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, '7', undefined, undefined, undefined],
      isMinor: true,
    },
  ],
  medium: [
    { extension: ['ø', '9', undefined, undefined, undefined], isMinor: false },
    {
      extension: ['o', 'maj7', undefined, undefined, undefined],
      isMinor: false,
    },
    { extension: [undefined, '7', 'b5', undefined, undefined], isMinor: false },
    { extension: [undefined, '7', '#5', undefined, undefined], isMinor: false },
    { extension: [undefined, '7', 'b9', undefined, undefined], isMinor: false },
    { extension: [undefined, '7', '#9', undefined, undefined], isMinor: false },
    {
      extension: [undefined, '6', undefined, undefined, undefined],
      isMinor: true,
    },
    {
      extension: [undefined, '6/9', undefined, undefined, undefined],
      isMinor: true,
    },
    {
      extension: [undefined, 'maj7', undefined, undefined, undefined],
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
      extension: [undefined, '7b5', undefined, undefined, undefined],
      isMinor: true,
    }, // same as h7
  ],
  hard: [
    {
      extension: [undefined, 'maj13', undefined, undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, '11', undefined, undefined, undefined],
      isMinor: true,
    },
    {
      extension: [undefined, '11', undefined, undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, '7', '#11', undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, 'maj7', '#11', undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, 'maj9', '#11', undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, 'maj7', '#5', undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, '13', '#9', undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, '7', 'sus4', undefined, undefined],
      isMinor: false,
    }, // or 7sus4(add3) ??
    {
      extension: [undefined, '9', '#11', undefined, undefined],
      isMinor: false,
    },
    { extension: [undefined, '9', 'b5', undefined, undefined], isMinor: false },
    { extension: [undefined, '9', '#5', undefined, undefined], isMinor: false },
    {
      extension: [undefined, '7', 'b13', undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, '13', undefined, undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, '13', '#11', undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, '13', 'b9', undefined, undefined],
      isMinor: false,
    },
    {
      extension: [undefined, '7', 'b9sus4', undefined, undefined],
      isMinor: false,
    }, // similar as Gh7/C
    {
      extension: [undefined, '9', 'sus4', undefined, undefined],
      isMinor: false,
    }, // similar as G-7/C
    {
      extension: [undefined, '13', 'sus4', undefined, undefined],
      isMinor: false,
    }, // similar as Bbmaj7/C
  ],
  painful: [
    {
      extension: [undefined, '7', undefined, undefined, 'alt.'],
      isMinor: false,
    },
    { extension: [undefined, '7', '#9', '#5', undefined], isMinor: false },
    { extension: [undefined, '7', '#9', 'b5', undefined], isMinor: false },
    { extension: [undefined, '7', '#9', '#11', undefined], isMinor: false },
    { extension: [undefined, '7', 'b9', '#11', undefined], isMinor: false },
    { extension: [undefined, '7', 'b9', 'b5', undefined], isMinor: false },
    { extension: [undefined, '7', 'b9', '#5', undefined], isMinor: false },
    { extension: [undefined, '7', 'b9', '#9', undefined], isMinor: false },
    { extension: [undefined, '7', 'b9', 'b13', undefined], isMinor: false },
    {
      extension: [undefined, '7', 'b13sus4', undefined, undefined],
      isMinor: false,
    },
  ],
};

export const generateChords = ({
  extensionLevels,
  accidentalLevels,
  numberOfChords,
}: {
  extensionLevels: ExtensionLevel[];
  accidentalLevels: AccidentalLevel[];
  numberOfChords: number;
}): Chord[] => {
  // make a list of all chosen extensions
  const levels: Extension[] = [];
  for (let level of extensionLevels) {
    levels.push(...extensionsOrganized[level]);
  }

  const chords: Chord[] = [];
  for (let i = 0; i < numberOfChords; i++) {
    // choose one randomly
    const index = Math.floor(Math.random() * levels.length);
    const extension = levels[index];

    // make a list of all bases (for that extension, minor or major)
    const bases: string[] = [];
    for (let level of accidentalLevels) {
      const newBases =
        basesOrganized[level][extension.isMinor ? 'minor' : 'major'];
      bases.push(...newBases);
    }
    // choose one randomly
    const baseIndex = Math.floor(Math.random() * bases.length);
    const base = bases[baseIndex];
    if (base && extension) {
      const ext = extension.extension;
      const newChord: Chord = {
        base,
        isMinor: extension.isMinor,
        dim: ext[0],
        seventh: ext[1],
        top: ext[2],
        bottom: ext[3],
        alt: ext[4],
      };
      if (newChord.seventh === '6/9') {
        newChord.seventh = undefined;
        newChord.sixNine = '6/9';
      }
      chords.push(newChord);
    }
  }

  return chords;
};

export const generateChord = ({
  extensionLevels,
  accidentalLevels,
}: {
  extensionLevels: ExtensionLevel[];
  accidentalLevels: AccidentalLevel[];
}): Chord => {
  return generateChords({
    extensionLevels,
    accidentalLevels,
    numberOfChords: 1,
  })[0];
};
