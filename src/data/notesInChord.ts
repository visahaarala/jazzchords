import { extensionsOrganized } from './chordData';
import { decipherExtension } from './chordFunctions';

const scale = [1,3,5,6,8,10,12]; 

const major: number[] = [1, 5, 8];

// replace means replacing the first note with the second

const notesByExtension: {
  [key: string]: { notes: number[]; mode: 'overwrite' | 'add' | 'replace' };
} = {
  '-': { notes: [1, 4, 8], mode: 'overwrite' },
  o: { notes: [1, 4, 7], mode: 'overwrite' },
  add9: { notes: [15], mode: 'add' },
  sus4: { notes: [5, 6], mode: 'replace' },
  maj7: { notes: [12], mode: 'add' },
  '6': { notes: [10], mode: 'add' },
  '69': { notes: [10, 15], mode: 'add' },
  '7': { notes: [11], mode: 'add' },
  maj9: { notes: [12, 15], mode: 'add' },
  '9': { notes: [11, 15], mode: 'add' },
  '+': { notes: [1, 5, 9], mode: 'overwrite' },
  o7: { notes: [1, 4, 7, 10], mode: 'overwrite' },
  h7: { notes: [1, 4, 7, 11], mode: 'overwrite' },
  // have to add some combos
  // because segments are deciphered
  // to serve the visual representation
  omaj7: { notes: [1, 4, 7, 12], mode: 'overwrite' },
  '#11': { notes: [19], mode: 'add' },

  // and give alternatives like
  // 11 => 9 + sus4
  // h9 => h7 + 9
  // maybe the alternative deciphering function should be called first!
};

const modifyChord = ({
  notes,
  extension,
}: {
  notes: number[];
  extension: string;
}) => {
  const nbe = notesByExtension[extension];
  switch (nbe.mode) {
    case 'overwrite':
      return nbe.notes;
    case 'add':
      return [...new Set([...notes, ...nbe.notes])];
    case 'replace':
      const orig = nbe.notes[0];
      const replace = nbe.notes[1];
      return notes.map((note) => (note === orig ? replace : note));
  }
};

const alternatives: { [key: string]: string[] } = {
  '11': ['9', 'sus4'],
  omaj7: ['o', 'maj7'],
  h9: ['h7', '9'],
};

/// use arrayOne.union(arrayTwo) to eliminate duplicates

const combosBreakDown = (ext: string) => {
  const alts = alternatives[ext];

  const nbe = alts
    ? alts.map((a) => notesByExtension[a].notes)
    : notesByExtension[ext].notes;

  return nbe;
};

export const printNotes = () => {
  console.log('printNotes');
  extensionsOrganized.easy.forEach((ext) => {
    const { isMinor, segments } = decipherExtension(ext);
    console.log(
      ext,
      isMinor,
      segments.map((s) => combosBreakDown(s).toString())
    );
  });
};
