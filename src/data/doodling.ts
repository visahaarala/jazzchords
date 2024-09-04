// trying to figure out scales and why...

import { Alphabet } from '../@types';

const whiteKeys: Alphabet[] = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

const whiteKeysIndex: { [key in Alphabet]: number } = {
  C: 0,
  D: 2,
  E: 4,
  F: 5,
  G: 7,
  A: 9,
  B: 11,
};

const majorScale: number[] = [2, 2, 1, 2, 2, 2];
const minorScale: number[] = [2, 1, 2, 2, 1, 2];

const accidentals: { [key: number]: string } = {
  '-2': 'bb',
  '-1': 'b',
  '0': '',
  '1': '#',
  '2': '##',
};

const noteName = (alphabetIndex: number, noteIndex: number): string => {
  const alphabet = whiteKeys[alphabetIndex];
  const accidentalOffset =
    ((noteIndex - whiteKeysIndex[alphabet] + (12 + 2)) % 12) - 2;
  const accidental = accidentals[accidentalOffset];
  return alphabet + accidental;
};

const printScale = (key: string, scale: number[]) => {
  const alphabet = key[0] as Alphabet;
  const accidentalIndex = Number(
    Object.keys(accidentals).find(
      (a) => accidentals[a as unknown as number] === key[1]
    )
  );
  let alphabetIndex = whiteKeys.indexOf(alphabet);
  let noteIndex = whiteKeysIndex[alphabet] + accidentalIndex;
  const notes: string[] = [];
  notes.push(noteName(alphabetIndex, noteIndex));
  for (const interval of scale) {
    alphabetIndex = (alphabetIndex + 1) % whiteKeys.length;
    noteIndex = ((noteIndex + interval - 1) % 12) + 1;
    notes.push(noteName(alphabetIndex, noteIndex));
  }
  console.log(notes);
};

// di: difference in interval
// da: difference in alphabet
const printCircle = (di: number, da: number) => {
  let majorAlphabetIndex = 0;
  let majorNoteIndex = 0;
  const majorKeys: string[] = [];
  const minorKeys: string[] = [];
  for (let i = 0; i < 7; i++) {
    majorAlphabetIndex = (majorAlphabetIndex + da) % whiteKeys.length;
    majorNoteIndex = (majorNoteIndex + di) % 12;
    majorKeys.push(noteName(majorAlphabetIndex, majorNoteIndex));
    const minorAlphabetIndex = (majorAlphabetIndex + 5) % whiteKeys.length;
    const minorNoteIndex = (majorNoteIndex + 9) % 12;
    minorKeys.push(noteName(minorAlphabetIndex, minorNoteIndex));
  }
  console.log('Major:', majorKeys.toString());
  console.log('Minor:', minorKeys.toString());
};

export const runDoodling = () => {
  printScale('F#', minorScale);
  console.log('---');
  console.log('Flat');
  printCircle(5, 3);
  console.log('Sharp');
  printCircle(7, 4);
};
