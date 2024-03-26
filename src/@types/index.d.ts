export type SearchParamsType = {
  bpc: BeatsPerChord;
  bpm: BeatsPerMinute;
  isMuted: boolean;
  amin: AccidentalLevel;
  amax: AccidentalLevel;
  dmin: DifficultyLevel;
  dmax: DifficultyLevel;
};

export type ProgramStateType = {
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

export type ReducerActionTypeType =
  | 'SET_BPC'
  | 'SET_BPM'
  | 'SET_MUTED'
  | 'SET_BEAT'
  | 'INCREMENT_BEAT'
  | 'RESET_BEAT'
  | 'APPEND_CHORD_LIST'
  | 'INCREMENT_CHORD_INDEX'
  | 'DECREMENT_CHORD_INDEX'
  | 'SET_DIFFICULTY_MIN'
  | 'SET_DIFFICULTY_MAX'
  | 'SET_DIFFICULTY_MAX'
  | 'SET_ACCIDENTALS_MIN'
  | 'SET_ACCIDENTALS_MAX'
  | 'RESET_SETTINGS';

export type ReducerActionPayload = Partial<ProgramStateType>;

export type ReducerActionType = {
  type: ReducerActionTypeType;
  payload?: ReducerActionPayload;
};

// export type ChordGenerateParams = {
//   number: number;
//   difficultyMin?: DifficultyLevel;
//   difficultyMax?: DifficultyLevel;
//   accidentalsMin?: AccidentalLevel;
//   accidentalsMax?: AccidentalLevel;
// };

export type Range = {
  min: number;
  max: number;
};

export type MajorOrMinor = 'major' | 'minor';

export type Extension = {
  extension: [
    string | undefined, // dim
    string | undefined, // 7
    string | undefined, // brackets top
    string | undefined, // brackets bottom
    string | undefined // alt
  ];
  isMinor: boolean;
};

export type Chord = {
  base: string;
  isMinor: boolean;
  dim?: string;
  seventh?: string;
  sixNine?: string;
  bracket: [string?, string?];
  alt?: string;
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
  | '178';
