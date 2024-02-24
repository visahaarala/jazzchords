import {
  Range,
  AccidentalLevel,
  MajorOrMinor,
  ExtensionLevel,
  Extension,
} from '../@types';

export const basesSorted: {
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

export const extensionsSorted: {
  [key in ExtensionLevel]: Extension[];
} = {
  easy: [
    { extension: '', type: 'major' },
    { extension: '', type: 'minor' },
    { extension: 'add9', type: 'major' },
    { extension: 'add9', type: 'major' },
    { extension: '+', type: 'major' },
    { extension: 'o', type: 'major' },
    { extension: 'o7', type: 'major' },
    { extension: 'h7', type: 'major' },
    { extension: 'sus', type: 'major' },
    { extension: '7sus', type: 'major' },
    { extension: '^7', type: 'major' },
    { extension: 'o^7', type: 'major' },
    { extension: '^9', type: 'major' },
    { extension: '^13', type: 'major' },
    { extension: '6', type: 'major' },
    { extension: '69', type: 'major' },
    { extension: '^7#11', type: 'major' },
    { extension: '^9#11', type: 'major' },
    { extension: '^7#5', type: 'major' },
    { extension: 'h9', type: 'major' },
    { extension: '9', type: 'major' },
    { extension: '7b9', type: 'major' },
    { extension: '7#9', type: 'major' },
    { extension: '7#11', type: 'major' },
    { extension: '7b5', type: 'major' },
    { extension: '7#5', type: 'major' },
  ],
  medium: [
    { extension: '9#11', type: 'major' },
    { extension: '9b5', type: 'major' },
    { extension: '9#5', type: 'major' },
    { extension: '7b13', type: 'major' },
    { extension: '7#9#5', type: 'major' },
    { extension: '7#9b5', type: 'major' },
    { extension: '7#9#11', type: 'major' },
    { extension: '7b9#11', type: 'major' },
    { extension: '7b9b5', type: 'major' },
    { extension: '7b9#5', type: 'major' },
    { extension: '7b9#9', type: 'major' },
    { extension: '7b9b13', type: 'major' },
    { extension: '7alt', type: 'major' },
    { extension: '13', type: 'major' },
    { extension: '13#11', type: 'major' },
    { extension: '13b9', type: 'major' },
  ],
  hard: [
    { extension: '13#9', type: 'major' },
    { extension: '7b9sus', type: 'major' }, // similar as Gh7/C
    { extension: '7susadd3', type: 'major' }, // or 7sus(add3) ??
    { extension: '9sus', type: 'major' }, // similar as G-7/C
    { extension: '13sus', type: 'major' }, // similar as Bbmaj7/C
    { extension: '7b13sus', type: 'major' },
    { extension: '11', type: 'major' },
    { extension: '7', type: 'minor' },
    { extension: '6', type: 'minor' },
    { extension: '69', type: 'minor' },
    { extension: '^7', type: 'minor' },
    { extension: '^9', type: 'minor' },
    { extension: '9', type: 'minor' },
    { extension: 'add9', type: 'minor' }, //same as add2
    { extension: '11', type: 'minor' },
    { extension: '7b5', type: 'minor' },
  ],
};

export const generateChordSorted = ({
  extensionLevels,
  accidentalLevels,
}: {
  extensionLevels: ExtensionLevel[];
  accidentalLevels: AccidentalLevel[];
}): string => {

  // // make a list of all chosen extensions
  // const levels: Extension[] = [];
  // for (let level of extensionLevels) {
  //   levels.concat(extensionsSorted[level]);
  // }
  // // choose one randomly
  // const index = Math.floor(Math.random() * levels.length);
  // const extension = levels[index];
  // console.log(extension);
  
  // // make a list of all bases
  // const bases: string[] = [];
  // for (let level of accidentalLevels) {
  //   bases.concat(basesSorted[level][extension.type]);
  // }
  // console.log(bases);

  return 'C7';
};

const sharps = {
  majors: ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#'],
  minors: ['A-', 'E-', 'B-', 'F#-', 'C#-', 'G#-', 'D#-', 'A#-'],
};

const flats = {
  majors: ['C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb'],
  minors: ['A-', 'D-', 'G-', 'C-', 'F-', 'Bb-', 'Eb-', 'Ab-'],
};

const extensions = {
  majors: [
    'add9',
    '+',
    'o',
    'o7',
    'h7',
    'sus',
    '7sus',
    '^7',
    'o^7',
    '^9',
    '^13',
    '6',
    '69',
    '^7#11',
    '^9#11',
    '^7#5',
    'h9',
    '9',
    '7b9',
    '7#9',
    '7#11',
    '7b5',
    '7#5',
    '9#11',
    '9b5',
    '9#5',
    '7b13',
    '7#9#5',
    '7#9b5',
    '7#9#11',
    '7b9#11',
    '7b9b5',
    '7b9#5',
    '7b9#9',
    '7b9b13',
    '7alt',
    '13',
    '13#11',
    '13b9',
    '13#9',
    '7b9sus', // similar as Gh7/C
    '7susadd3', // or 7sus(add3) ??
    '9sus', // similar as G-7/C
    '13sus', // similar as Bbmaj7/C
    '7b13sus',
    '11',
  ],
  minors: [
    '7',
    '6',
    '69',
    '^7',
    '^9',
    '9',
    'add9', //same as add2
    '11',
    '7b5',
  ],
};

export const generateChord = ({
  accidentalRange,
}: {
  accidentalRange: Range;
}): string => {
  const numberOfAccidentals =
    Math.floor(
      Math.random() * (accidentalRange.max - accidentalRange.min + 1)
    ) + accidentalRange.min;

  // is sharp or flat
  const isSharp = Math.random() > 0.5;

  // is major or minor?
  const majorMinorRatio =
    extensions.majors.length /
    (extensions.majors.length + extensions.minors.length); // ratio according to the ratio of extensions in majors/minors
  const isMajor = Math.random() < majorMinorRatio;

  // chord base
  const base = isSharp
    ? isMajor
      ? sharps.majors[numberOfAccidentals]
      : sharps.minors[numberOfAccidentals]
    : isMajor
    ? flats.majors[numberOfAccidentals]
    : flats.minors[numberOfAccidentals];

  // extension
  const extension = isMajor
    ? extensions.majors[Math.floor(Math.random() * extensions.majors.length)]
    : extensions.minors[Math.floor(Math.random() * extensions.minors.length)];

  const chord = base + extension;

  return chord;
};
