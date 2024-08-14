export type ProgramState = {
  accidentalsMin: AccidentalLevel;
  accidentalsMax: AccidentalLevel;
  difficultyMin: DifficultyLevel;
  difficultyMax: DifficultyLevel;
  chordList: Chord[];
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
  | 'SET_DIFFICULTY_MIN'
  | 'SET_DIFFICULTY_MAX'
  | 'SET_DIFFICULTY_MAX'
  | 'SET_ACCIDENTALS_MIN'
  | 'SET_ACCIDENTALS_MAX'
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

export type Key = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

export type Extension =
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

export type Accidental = 'flat' | 'sharp' | undefined;

export type Chord = {
  base: Key;
  accidental: Accidental;
  isMinor: boolean;
  extension: string[];
  notes: number[];
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
