const sharps = {
  majors: ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#'],
  minors: ['A-', 'E-', 'B-', 'F#-', 'C#-', 'G#-', 'D#-', 'A#-'],
};

const flats = {
  majors: ['C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb'],
  minors: ['A-', 'D-', 'G-', 'C-', 'F-', 'Bb-', 'Eb-', 'Ab-'],
};

const keys = { sharps, flats };

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

export const generateChord = () => {
  // sharp or flat?
  const sharpsOrFlats =
    Math.random() > 0.5 ? keys.sharps : keys.flats;

  // minor or major?
  const majorMinorRatio =
    extensions.majors.length /
    (extensions.majors.length + extensions.minors.length); // ratio according to the ratio of extensions in majors/minors
  const isMajor = Math.random() < majorMinorRatio;
  const majorOrMinor = isMajor ? sharpsOrFlats.majors : sharpsOrFlats.minors;

  // chord base?
  const chordBaseIndex = Math.floor(Math.random() * majorOrMinor.length);
  const chordBase = majorOrMinor[chordBaseIndex];

  // extension?
  const extensionList = isMajor
    ? extensions.majors
    : extensions.minors;
  const extensionIndex = Math.floor(Math.random() * extensionList.length);
  const extension = extensionList[extensionIndex];

  const chord = chordBase + extension;

  return chord;
};
