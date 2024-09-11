export type ProgramState = {
  // PLAYER
  accidentalsMin: AccidentalLevel;
  accidentalsMax: AccidentalLevel;
  difficultyMin: DifficultyLevel;
  difficultyMax: DifficultyLevel;
  showRandomTopNote: boolean;
  showNextChord: boolean;
  randomTopNoteMin: RandomTopNote;
  randomTopNoteMax: RandomTopNote;
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
  notationKey: Key;
  notationExtension: Extension;
};

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
  | 'RESET_SETTINGS'
  | 'TOGGLE_SHOW_RANDOM_TOP_NOTE'
  | 'TOGGLE_SHOW_NEXT_CHORD'
  | 'TOGGLE_VIEW_PLAY_SETTINGS'

  // NOTATION
  | 'SET_NOTATION_KEY'
  | 'SET_NOTATION_EXTENSION';

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

export type Key = { base: Alphabet; accidental: Accidental };

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

export type RandomTopNote =
  | 'C1'
  | 'D1'
  | 'E1'
  | 'F1'
  | 'G1'
  | 'A1'
  | 'B1'
  | 'C2'
  | 'D2'
  | 'E2'
  | 'F2'
  | 'G2'
  | 'A2'
  | 'B2'
  | 'C3';
