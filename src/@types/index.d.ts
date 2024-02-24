export type Range = {
  min: number;
  max: number;
};

export type MajorOrMinor = 'major' | 'minor';
export type Extension = { extension: string; type: MajorOrMinor };

export type AccidentalLevel = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';
export type ExtensionLevel = 'easy' | 'medium' | 'hard' | 'painful';

