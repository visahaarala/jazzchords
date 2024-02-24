import {
  AccidentalLevel,
  MajorOrMinor,
  ExtensionLevel,
  Extension,
} from '../@types';

export const basesOrganized: {
  [key in AccidentalLevel]: {
    [key in MajorOrMinor]: string[];
  };
} = {
  0: { major: ['C'], minor: ['A-'] },
  1: { major: ['G', 'F'], minor: ['E-', 'D-'] },
  2: { major: ['D', 'Bb'], minor: ['B-', 'G-'] },
  3: { major: ['A', 'Eb'], minor: ['F#-', 'C-'] },
  4: { major: ['E', 'Ab'], minor: ['C#-', 'F-'] },
  5: { major: ['B', 'Db'], minor: ['G#-', 'Bb-'] },
  6: { major: ['F#', 'Gb'], minor: ['D#-', 'Eb-'] },
  7: { major: ['C#', 'Cb'], minor: ['A#-', 'Ab-'] },
};

export const extensionsOrganized: {
  [key in ExtensionLevel]: Extension[];
} = {
  easy: [
    { extension: '', type: 'major' },
    { extension: '', type: 'minor' },
    { extension: 'o7', type: 'major' },
    { extension: 'h7', type: 'major' },
    { extension: '+', type: 'major' },
    { extension: 'o', type: 'major' },
    { extension: 'add9', type: 'major' },
    { extension: 'sus', type: 'major' },
    { extension: '7sus', type: 'major' },
    { extension: '^7', type: 'major' },
    { extension: '^9', type: 'major' },
    { extension: '6', type: 'major' },
    { extension: '69', type: 'major' },
    { extension: '9', type: 'major' },
    { extension: '7', type: 'minor' },
  ],
  medium: [
    { extension: 'h9', type: 'major' },
    { extension: 'o^7', type: 'major' },
    { extension: '7b5', type: 'major' },
    { extension: '7#5', type: 'major' },
    { extension: '7b9', type: 'major' },
    { extension: '7#9', type: 'major' },
    { extension: '6', type: 'minor' },
    { extension: '69', type: 'minor' },
    { extension: '^7', type: 'minor' },
    { extension: '^9', type: 'minor' },
    { extension: '9', type: 'minor' },
    { extension: 'add9', type: 'minor' }, //same as add2
    { extension: '7b5', type: 'minor' }, // same as h7
  ],
  hard: [
    { extension: '^13', type: 'major' },
    { extension: '11', type: 'minor' },
    { extension: '11', type: 'major' },
    { extension: '7#11', type: 'major' },
    { extension: '^7#11', type: 'major' },
    { extension: '^9#11', type: 'major' },
    { extension: '^7#5', type: 'major' },
    { extension: '13#9', type: 'major' },
    { extension: '7sus(add3)', type: 'major' }, // or 7sus(add3) ??
    { extension: '9#11', type: 'major' },
    { extension: '9b5', type: 'major' },
    { extension: '9#5', type: 'major' },
    { extension: '7b13', type: 'major' },
    { extension: '13', type: 'major' },
    { extension: '13#11', type: 'major' },
    { extension: '13b9', type: 'major' },
    { extension: '7b9sus', type: 'major' }, // similar as Gh7/C
    { extension: '9sus', type: 'major' }, // similar as G-7/C
    { extension: '13sus', type: 'major' }, // similar as Bbmaj7/C
  ],
  painful: [
    { extension: '7alt', type: 'major' },
    { extension: '7#9#5', type: 'major' },
    { extension: '7#9b5', type: 'major' },
    { extension: '7#9#11', type: 'major' },
    { extension: '7b9#11', type: 'major' },
    { extension: '7b9b5', type: 'major' },
    { extension: '7b9#5', type: 'major' },
    { extension: '7b9#9', type: 'major' },
    { extension: '7b9b13', type: 'major' },
    { extension: '7b13sus', type: 'major' },
  ],
};

export const generateChordSorted = ({
  extensionLevels,
  accidentalLevels,
}: {
  extensionLevels: ExtensionLevel[];
  accidentalLevels: AccidentalLevel[];
}): string => {
  // make a list of all chosen extensions
  const levels: Extension[] = [];
  for (let level of extensionLevels) {
    levels.push(...extensionsOrganized[level]);
  }
  // choose one randomly
  const index = Math.floor(Math.random() * levels.length);
  const extension = levels[index];

  // make a list of all bases (for that extension, minor or major)
  const bases: string[] = [];
  for (let level of accidentalLevels) {
    bases.push(...basesOrganized[level][extension.type]);
  }
  // choose one randomly
  const baseIndex = Math.floor(Math.random() * bases.length);
  const base = bases[baseIndex];

  console.log(base, extension);

  return (base ? base : '') + (extension ? extension.extension : '');
};
