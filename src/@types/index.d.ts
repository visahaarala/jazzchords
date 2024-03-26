export type SearchParams = {
  bpc: TimeSignature;
  bpm: BeatsPerMinute;
  isMuted: boolean;
  amin: Accidentals;
  amax: Accidentals;
  dmin: Difficulty;
  dmax: Difficulty;
};

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

export type Accidentals = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';
export type Difficulty = 'easy' | 'medium' | 'hard' | 'painful';

export type TimeSignature =
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