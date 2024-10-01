export type ProgramState = {
  // PLAYER
  accidentalsMin: AccidentalLevel;
  accidentalsMax: AccidentalLevel;
  difficultyMin: DifficultyLevel;
  difficultyMax: DifficultyLevel;
  showNextChord: boolean;
  showRandomTopNote: boolean;
  randomTopNoteMin: RandomTopNote;
  randomTopNoteMax: RandomTopNote;
  playerClef: Clef;
  majorsShuffled: FreshAndUsed<string>;
  minorsShuffled: FreshAndUsed<string>;
  extensionsShuffled: FreshAndUsed<Extension>;
  keyLocked: boolean;
  extensionLocked: boolean;
  chords: Chord[];
  chordIndex: number;
  beatsPerChord: BeatsPerChord;
  beatsPerMinute: BeatsPerMinute;
  beat: number;
  isMuted: boolean;
  viewPlaySettings: boolean;

  // NOTATION
  notesClef: Clef;
  notesKey: Key;
  notesExtension: Extension;
};

export type Clef = 'bass' | 'treble';

export type Extension = { isMinor: boolean; segments: string[] };

export type FreshAndUsed<T> = { fresh: T[]; used: T[] };

export type ReducerActionType =
  // PLAYER
  | 'SET_BPC'
  | 'SET_BPM'
  | 'SET_MUTED'
  | 'SET_BEAT'
  | 'INCREMENT_BEAT'
  | 'APPEND_CHORD_LIST'
  | 'INCREMENT_CHORD_INDEX'
  | 'DECREMENT_CHORD_INDEX'
  | 'SWITCH_KEY_LOCK'
  | 'SWITCH_EXTENSION_LOCK'
  | 'SET_ACCIDENTALS_MIN'
  | 'SET_ACCIDENTALS_MAX'
  | 'SET_DIFFICULTY_MIN'
  | 'SET_DIFFICULTY_MAX'
  | 'SET_RANDOM_TOP_NOTE_MIN'
  | 'SET_RANDOM_TOP_NOTE_MAX'
  | 'TOGGLE_SHOW_RANDOM_TOP_NOTE'
  | 'SET_PLAYER_CLEF'
  | 'TOGGLE_SHOW_NEXT_CHORD'
  | 'TOGGLE_VIEW_PLAY_SETTINGS'
  | 'RESET_SETTINGS'

  // NOTATION
  | 'SET_NOTES_CLEF'
  | 'SET_NOTES_KEY'
  | 'SET_NOTES_EXTENSION';

export type ReducerAction = {
  type: ReducerActionType;
  payload?: Partial<ProgramState>;
};

export type MajorOrMinor = 'major' | 'minor';

export type Alphabet = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

export type ExtensionText =
  | 'b'
  | '#'
  | '4'
  | '5'
  | '6'
  | '7'
  | '9'
  | '11'
  | '13'
  | '69'
  | 'o'
  | 'h'
  | '+'
  | 'add'
  | 'sus'
  | 'maj';

export type Accidental = 'b' | '#' | undefined;

export type Key = { base: Alphabet; accidental?: Accidental };

export type Note = {
  noteName: string;
  octaveIndex: number;
  hasNoteBelow?: boolean;
};

export type Chord = {
  key: Key;
  extension: Extension;
  notes: Note[];
  randomTopNote?: Note;
};

export type AccidentalLevel = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';

export type DifficultyLevel = 'easy' | 'medium' | 'hard' | 'painful';

export type BeatsPerChord =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '∞';

export type BeatsPerMinute =
  | '20'
  | '22'
  | '24'
  | '26'
  | '28'
  | '30'
  | '33'
  | '36'
  | '39'
  | '42'
  | '46'
  | '50'
  | '55'
  | '60'
  | '66'
  | '72'
  | '79'
  | '86'
  | '94'
  | '102'
  | '112'
  | '124'
  | '136'
  | '148'
  | '162'
  | '178'
  | '196'
  | '216'
  | '238'
  | '262';

// export type RandomTopNote =
//   | 'E2' // E below bass clef staff
//   | 'F2'
//   | 'G2'
//   | 'A2'
//   | 'B2'
//   | 'C3' // bass clef middle C
//   | 'D3'
//   | 'E3'
//   | 'F3'
//   | 'G3'
//   | 'A3'
//   | 'B3'
//   | 'C3'
//   | 'C4' // "low C"
//   | 'D4'
//   | 'E4'
//   | 'F4'
//   | 'G4'
//   | 'A4'
//   | 'B4'
//   | 'C5'
//   | 'D5'
//   | 'E5'
//   | 'F5'
//   | 'G5'
//   | 'A5'
//   | 'B5'
//   | 'C6'; // high C above treble clef staff

export type RandomTopNote =
  | 'E' // E below bass clef staff
  | 'F'
  | 'G'
  | 'A'
  | 'B'
  | 'c' // bass clef middle C
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'a'
  | 'b'
  | 'c1' // "low C"
  | 'd1'
  | 'e1'
  | 'f1'
  | 'g1'
  | 'a1'
  | 'b1'
  | 'c2'
  | 'd2'
  | 'e2'
  | 'f2'
  | 'g2'
  | 'a2'
  | 'b2'
  | 'c3'; // high C above treble clef staff
