export type Range = {
  min: number;
  max: number;
};

export type MajorOrMinor = 'major' | 'minor';
export type Extension = {
  // o 7 #9 #5 alt.
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
export type ExtensionLevel = 'easy' | 'medium' | 'hard' | 'painful';
export type TimeSignature = number | '∞';
