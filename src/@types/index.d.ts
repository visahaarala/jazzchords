export type Range = {
  min: number;
  max: number;
};

export type MajorOrMinor = 'major' | 'minor';
export type Extension = {
  // o 7 #9 #5 alt.
  extension: [
    string | undefined,
    string | undefined,
    string | undefined,
    string | undefined,
    string | undefined
  ];
  isMinor: boolean;
};

export type Chord = {
  base: string;
  isMinor: boolean;
  dim?: string;
  seventh?: string;
  sixNine?: string;
  top?: string;
  bottom?: string;
  alt?: string;
};

export type AccidentalLevel = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';
export type ExtensionLevel = 'easy' | 'medium' | 'hard' | 'painful';
