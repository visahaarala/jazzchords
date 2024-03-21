import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import {
  AccidentalLevel,
  Chord,
  ExtensionLevel,
  TimeSignature,
} from '../@types';
import { bpcOptions, bpmOptions } from '../data/tempo';

export const Context = createContext<{
  accidentalLevelState: [
    [AccidentalLevel, AccidentalLevel],
    Dispatch<SetStateAction<[AccidentalLevel, AccidentalLevel]>>
  ];
  extensionLevelState: [
    [ExtensionLevel, ExtensionLevel],
    Dispatch<SetStateAction<[ExtensionLevel, ExtensionLevel]>>
  ];
  beatsPerChordState: [TimeSignature, Dispatch<SetStateAction<TimeSignature>>];
  beatsPerMinuteState: [number, Dispatch<SetStateAction<number>>];
  isMutedState: [boolean, Dispatch<SetStateAction<boolean>>];
  chordListState: [Chord[], Dispatch<SetStateAction<Chord[]>>];
  chordIndexState: [number, Dispatch<SetStateAction<number>>];
}>({
  accidentalLevelState: [['0', '4'], () => {}],
  extensionLevelState: [['easy', 'medium'], () => {}],
  beatsPerChordState: [0, () => {}],
  beatsPerMinuteState: [0, () => {}],
  isMutedState: [true, () => {}],
  chordListState: [[], () => {}],
  chordIndexState: [0, () => {}],
});

const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const accidentalLevelState = useState<[AccidentalLevel, AccidentalLevel]>([
    '0',
    '4',
  ]);
  const extensionLevelState = useState<[ExtensionLevel, ExtensionLevel]>([
    'easy',
    'medium',
  ]);
  const beatsPerChordState = useState(bpcOptions[3]);
  const beatsPerMinuteState = useState(bpmOptions[13]);
  const isMutedState = useState(false);
  const chordListState = useState<Chord[]>([]);
  const chordIndexState = useState(0);

  const value = {
    accidentalLevelState,
    extensionLevelState,
    beatsPerChordState,
    beatsPerMinuteState,
    isMutedState,
    chordListState,
    chordIndexState,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
