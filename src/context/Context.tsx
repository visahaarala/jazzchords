import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { AccidentalLevel, Chord, ExtensionLevel } from '../@types';
import { bpcOptions, bpmOptions } from '../data/tempo';

export const Context = createContext<{
  accidentalLevelsState: [
    AccidentalLevel[],
    Dispatch<SetStateAction<AccidentalLevel[]>>
  ];
  extensionLevelsState: [
    ExtensionLevel[],
    Dispatch<SetStateAction<ExtensionLevel[]>>
  ];
  beatsPerChordState: [number, Dispatch<SetStateAction<number>>];
  beatsPerMinuteState: [number, Dispatch<SetStateAction<number>>];
  isMutedState: [boolean, Dispatch<SetStateAction<boolean>>];
  chordListState: [Chord[], Dispatch<SetStateAction<Chord[]>>];
  chordIndexState: [number, Dispatch<SetStateAction<number>>];
}>({
  accidentalLevelsState: [[], () => {}],
  extensionLevelsState: [[], () => {}],
  beatsPerChordState: [0, () => {}],
  beatsPerMinuteState: [0, () => {}],
  isMutedState: [true, () => {}],
  chordListState: [[], () => {}],
  chordIndexState: [0, () => {}],
});

const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const accidentalLevelsState = useState<AccidentalLevel[]>([]);
  const extensionLevelsState = useState<ExtensionLevel[]>([]);
  const beatsPerChordState = useState(bpcOptions[3]);
  const beatsPerMinuteState = useState(bpmOptions[13]);
  const isMutedState = useState(false);
  const chordListState = useState<Chord[]>([]);
  const chordIndexState = useState(0);

  const value = {
    accidentalLevelsState,
    extensionLevelsState,
    beatsPerChordState,
    beatsPerMinuteState,
    isMutedState,
    chordListState,
    chordIndexState,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
