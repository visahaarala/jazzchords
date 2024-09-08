export type Extension = { isMinor: boolean; segments: string[] };

export type FreshAndUsed<T> = { fresh: T[]; used: T[] };

export type ProgramState = {
  accidentalsMin: AccidentalLevel;
  accidentalsMax: AccidentalLevel;
  difficultyMin: DifficultyLevel;
  difficultyMax: DifficultyLevel;
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
};

export type ReducerActionType =
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
  | 'RESET_SETTINGS';

export type ReducerAction = {
  type: ReducerActionType;
  payload?: Partial<ProgramState>;
};

export type Range = {
  min: number;
  max: number;
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

export type Note = { noteName: string; octave: number };

export type Chord = {
  key: Key;
  extension: Extension;
  notes: Note[];
  randomTopNote: string;
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
