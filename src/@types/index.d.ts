export type SearchParamsType = {
  bpc: BeatsPerChordType;
  bpm: BeatsPerMinuteType;
  isMuted: boolean;
  amin: AccidentalLevelType;
  amax: AccidentalLevelType;
  dmin: DifficultyLevelType;
  dmax: DifficultyLevelType;
};

export type ProgramStateType = {
  accidentalsMin: AccidentalLevelType;
  accidentalsMax: AccidentalLevelType;
  difficultyMin: DifficultyLevelType;
  difficultyMax: DifficultyLevelType;
  chordList: ChordType[];
  chordIndex: number;
  beatsPerChord: BeatsPerChordType;
  beatsPerMinute: BeatsPerMinuteType;
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

export type ReducerActionType = {
  type: ReducerActionTypeType;
  payload?: Partial<ProgramStateType>;
};

export type RangeType = {
  min: number;
  max: number;
};

export type MajorOrMinorType = 'major' | 'minor';

export type ExtensionType = {
  extension: [
    string | undefined, // dim
    string | undefined, // 7
    string | undefined, // brackets top
    string | undefined, // brackets bottom
    string | undefined // alt
  ];
  isMinor: boolean;
};

export type ChordType = {
  base: string;
  isMinor: boolean;
  dim?: string;
  seventh?: string;
  sixNine?: string;
  bracket: [string?, string?];
  alt?: string;
};

export type AccidentalLevelType = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';

export type DifficultyLevelType = 'easy' | 'medium' | 'hard' | 'painful';

export type BeatsPerChordType =
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

export type BeatsPerMinuteType =
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
