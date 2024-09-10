import { AccidentalLevel, MajorOrMinor, DifficultyLevel } from '../@types';

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

export const extensionsOrganized: {
  [key in DifficultyLevel]: string[];
} = {
  easy: [
    '',
    '-',
    'o',
    'o7',
    'h7',
    'sus4',
    '6',
    '-6',
    '69',
    '-69',
    '7',
    '-7',
    'maj7',
    '-maj7',
    '-9',
    '-maj9',
    '9',
    'maj9',
    'add9',
    '-add9',
    // FIX THESE (visual)
    '+',
    '+7'
  ],
  medium: [
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
    '-13',
    'maj13',
    '-maj13',
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
    // '7#9b9',
    '7b13#9',

    // just to check sorting
    '7b13b9',

    // '7b13sus4', // don't like it
  ],
};
